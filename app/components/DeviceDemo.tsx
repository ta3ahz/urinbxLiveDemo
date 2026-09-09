"use client";

import { useEffect, useRef, useState } from "react";

/* Loads the firmware UI compiled to WebAssembly (public/demo/uribx.js + .wasm)
   and bridges canvas pointer events to the LVGL indev. Same screens as the
   shipping device — regenerate with scripts/sync-demo.sh after a firmware change. */

type EmModule = {
  onRuntimeInitialized?: () => void;
  locateFile?: (p: string) => string;
  _web_w: () => number;
  _web_h: () => number;
  _web_framebuffer: () => number;
  _web_pointer: (x: number, y: number, pressed: number) => void;
  HEAPU8: Uint8Array;
};

declare global {
  interface Window {
    Module?: Partial<EmModule>;
    __uribxLoaded?: boolean;
  }
}

export default function DeviceDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ready">("idle");
  const startedRef = useRef(false);

  // Defer the ~950KB wasm until the device is about to enter the viewport.
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !startedRef.current) {
          startedRef.current = true;
          io.disconnect();
          boot();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function boot() {
    setStatus("loading");
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let lx = 0,
      ly = 0;

    const M: Partial<EmModule> = {
      locateFile: (p: string) => "/demo/" + p,
      onRuntimeInitialized() {
        const mod = window.Module as EmModule;
        const W = mod._web_w();
        const H = mod._web_h();
        canvas.width = W;
        canvas.height = H;
        const img = ctx.createImageData(W, H);
        setStatus("ready");

        const draw = () => {
          const ptr = mod._web_framebuffer();
          img.data.set(mod.HEAPU8.subarray(ptr, ptr + W * H * 4));
          ctx.putImageData(img, 0, 0);
          raf = requestAnimationFrame(draw);
        };
        raf = requestAnimationFrame(draw);

        const map = (clientX: number, clientY: number) => {
          const r = canvas.getBoundingClientRect();
          lx = Math.round(((clientX - r.left) * W) / r.width);
          ly = Math.round(((clientY - r.top) * H) / r.height);
        };
        const down = (x: number, y: number) => {
          map(x, y);
          mod._web_pointer(lx, ly, 1);
        };
        const move = (x: number, y: number) => {
          map(x, y);
          mod._web_pointer(lx, ly, 1);
        };
        const up = () => mod._web_pointer(lx, ly, 0);

        canvas.addEventListener("mousedown", (e) => down(e.clientX, e.clientY));
        canvas.addEventListener("mousemove", (e) => {
          if (e.buttons & 1) move(e.clientX, e.clientY);
        });
        window.addEventListener("mouseup", up);
        canvas.addEventListener(
          "touchstart",
          (e) => {
            e.preventDefault();
            down(e.touches[0].clientX, e.touches[0].clientY);
          },
          { passive: false }
        );
        canvas.addEventListener(
          "touchmove",
          (e) => {
            e.preventDefault();
            move(e.touches[0].clientX, e.touches[0].clientY);
          },
          { passive: false }
        );
        window.addEventListener("touchend", up);
      },
    };
    window.Module = M;

    const s = document.createElement("script");
    s.src = "/demo/uribx.js";
    s.async = true;
    document.body.appendChild(s);

    return () => cancelAnimationFrame(raf);
  }

  return (
    <div className="relative select-none">
      {/* Hardware bezel */}
      <div
        className="relative rounded-[26px] p-3 sm:p-4"
        style={{
          background: "linear-gradient(150deg,#1a2740,#0a1526 60%)",
          boxShadow:
            "0 30px 70px -20px rgba(3,10,25,.65), inset 0 1px 0 rgba(255,255,255,.06)",
        }}
      >
        <div
          className="relative overflow-hidden rounded-[14px] bg-black"
          style={{ aspectRatio: "800 / 480" }}
        >
          <canvas
            ref={canvasRef}
            width={800}
            height={480}
            className="block h-full w-full"
            style={{ touchAction: "none", cursor: status === "ready" ? "pointer" : "default" }}
            aria-label="Interactive uriBX device screen"
          />
          {status !== "ready" && (
            <div className="absolute inset-0 grid place-items-center bg-[#081426] text-center">
              <div>
                <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-cyan" />
                <p className="font-mono text-xs tracking-widest text-white/60">
                  {status === "loading" ? "LOADING DEVICE FIRMWARE…" : "SCROLL TO WAKE DEVICE"}
                </p>
              </div>
            </div>
          )}
        </div>
        {/* Bezel chin with brand + status LED */}
        <div className="flex items-center justify-between px-2 pt-3">
          <span className="font-mono text-[10px] tracking-[0.25em] text-white/35">
            URB-1000
          </span>
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full rounded-full bg-good"
                style={{ animation: "ringpulse 2.4s ease-out infinite" }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-good" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/35">LIVE</span>
          </span>
        </div>
      </div>
    </div>
  );
}
