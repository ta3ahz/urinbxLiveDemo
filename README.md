# uriBX — marketing site + live device demo

Landing page for the **uriBX URB-1000** veterinary cancer-screening analyzer, with an
**interactive online device demo**: the real firmware UI compiled to WebAssembly and
running in the browser.

- **Framework:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4
- **Fonts:** Fraunces (display) · Geist Sans (body) · Geist Mono (data)
- **Device demo:** the firmware LVGL UI → WASM, in `public/demo/` (`uribx.js` + `uribx.wasm`)

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## The online device demo

`app/components/DeviceDemo.tsx` loads `public/demo/uribx.js`, blits the LVGL framebuffer
to a `<canvas>`, and bridges mouse/touch events to the LVGL pointer input. It is the same
screen code that ships on the device — with hardware/network stubbed for a happy-path
demo (see `web/web_main.cpp` in the firmware repo).

### Rebuilding the demo after a firmware change

The WASM bundle is generated from the firmware UI source. After changing any device
screen, regenerate and copy it in one step:

```bash
./scripts/sync-demo.sh
```

This runs the firmware's `web/build.sh` (emscripten) and copies the fresh
`uribx.js` + `uribx.wasm` into `public/demo/`. Point it at a non-default firmware
checkout with `URIBX_FW=/path/to/firmware ./scripts/sync-demo.sh`.

> Requires emscripten (`brew install emscripten`) for the firmware build step. The
> committed bundle in `public/demo/` means the site builds and deploys without emscripten;
> you only need it when regenerating the demo.

## Build

```bash
npm run build && npm start
```

## Notes / to confirm before publishing

- Impact stats and **ISO 13485** wording are placeholders — confirm exact claims/certification.
- Kit contents list is representative — confirm against the shipping SKU.
- Medical framing is deliberately "screening aid, for veterinary use, not a diagnosis."
