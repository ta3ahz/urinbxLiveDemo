import Header from "./components/Header";
import DeviceDemo from "./components/DeviceDemo";
import Reveal from "./components/Reveal";
import Wordmark from "./components/Wordmark";

/* ---------------------------------------------------------------- data --- */

const SCIENCE = [
  {
    tag: "The signal",
    title: "An epigenetic fingerprint",
    body: "Cell-free DNA shed into urine carries an epigenetic biomarker whose pattern shifts early in tumor development — often before any clinical sign.",
    accent: "var(--brand)",
  },
  {
    tag: "The capture",
    title: "Molecularly imprinted polymers",
    body: "A MIP matrix selectively binds the target straight from a raw urine sample — no centrifuge, no cold chain, no send-out lab. Purification happens chairside in the clinic.",
    accent: "var(--cyan)",
  },
  {
    tag: "The read",
    title: "UV photometry",
    body: "The analyzer measures absorbance against a Solution 2 zero (I₀) and computes a clear positive / negative call — on-device when offline, or in the cloud when connected.",
    accent: "var(--amber)",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Collect",
    body: "Capture a fresh urine sample. Fully non-invasive — no blood draw, no sedation, no imaging.",
  },
  {
    n: "02",
    title: "Prepare",
    body: "Run the sample through the MIP kit, load the optical cuvette, and zero the optics with Solution 2.",
  },
  {
    n: "03",
    title: "Read",
    body: "The temperature-controlled chamber measures absorbance by UV photometry — no pumps, no moving fluidics.",
  },
  {
    n: "04",
    title: "Result",
    body: "A clear Positive / Negative screening call in minutes, synced to the patient's cloud record.",
  },
];

const KIT: [string, string][] = [
  ["MIP purification kit", "Reagents & cartridges to capture the target from raw urine."],
  ["Reference Solution 2", "The zero / I₀ standard the optics calibrate against."],
  ["Optical cuvettes", "Single-use cuvettes for the measurement chamber."],
  ["Collection supplies", "Everything needed to capture a clean sample."],
  ["Quick-start guide", "Guided setup — clinic-ready out of the box."],
];

const BENEFITS: [string, string][] = [
  ["Non-invasive", "No blood draw, no sedation, no imaging. Less stress for the patient, less handling for the team."],
  ["In-clinic", "Run it chairside. No send-out lab, no shipping delay, no lost days waiting on results."],
  ["Fast", "A positive / negative screening call in minutes, right at the point of care."],
  ["Early", "Screen senior and at-risk patients before signs appear — when there is most to be done."],
  ["Simple", "A guided touchscreen walks the workflow. Minimal training, repeatable results."],
  ["Connected", "Secure cloud records and over-the-air firmware updates keep every device current."],
];

/* ---------------------------------------------------------------- page --- */

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="flex-1">
        {/* ============================================================ HERO */}
        <section className="relative overflow-hidden border-b border-line">
          <div className="dotfield pointer-events-none absolute inset-0 opacity-60" />
          <div className="pointer-events-none absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full bg-brand/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-40 top-1/2 h-[420px] w-[420px] rounded-full bg-cyan/5 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-5 py-20 lg:py-28">
            <Reveal className="mx-auto max-w-4xl text-center">
              <p className="eyebrow mb-5">Veterinary cancer screening</p>
              <h1 className="font-display text-[clamp(2.8rem,7vw,5.2rem)] font-semibold leading-[1.0] tracking-[-0.025em] text-balance">
                Find cancer earlier — from a{" "}
                <span className="text-brand">drop of urine</span>.
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty sm:text-xl">
                uriBX is a benchtop analyzer that screens for cancer non-invasively,
                in your clinic, in minutes — reading the epigenetic biomarker signal
                shed into a pet&apos;s urine.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#device"
                  className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-brand-deep"
                >
                  Try the live device →
                </a>
                <a
                  href="#science"
                  className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition hover:border-brand/50"
                >
                  How it works
                </a>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
                {([
                  ["Non-invasive", "just a urine sample"],
                  ["In-clinic", "no send-out lab"],
                  ["Minutes", "point-of-care result"],
                ] as [string, string][]).map(([k, v]) => (
                  <div key={k} className="bg-paper-2 px-6 py-5 text-center">
                    <dt className="font-display text-xl font-semibold tracking-tight">{k}</dt>
                    <dd className="mt-0.5 text-sm text-ink-faint">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <p className="mt-10 text-center font-mono text-xs tracking-[0.22em] text-ink-faint">
              SCREEN EARLY · TREAT SOONER · SAVE LIVES
            </p>
          </div>
        </section>

        {/* ================================================= DEVICE EXPERIENCE */}
        <section
          id="device"
          className="section relative scroll-mt-16 overflow-hidden border-b border-line bg-band text-white"
        >
          {/* spotlight behind the device */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[120px]" />
          <div className="relative mx-auto max-w-5xl px-5 text-center">
            <Reveal>
              <p className="eyebrow mb-4" style={{ color: "var(--cyan)" }}>
                The online experience
              </p>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold leading-tight tracking-[-0.02em] text-white text-balance">
                Walk a real screening — right now.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/70">
                This is the exact interface that ships on the device, running live in your
                browser. Tap <span className="font-medium text-white">Start</span>, enter a
                patient, and read the result. Nothing to install.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-12">
              <div className="mx-auto max-w-[780px]">
                <DeviceDemo />
              </div>
              <ul className="mx-auto mt-7 flex max-w-2xl flex-wrap justify-center gap-2.5">
                {["Start a test", "Enter patient info", "Read the result", "Redeem credits"].map(
                  (h) => (
                    <li
                      key={h}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-wide text-white/70"
                    >
                      {h}
                    </li>
                  )
                )}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ========================================================== IMPACT */}
        <section className="border-b border-line bg-paper-2">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:grid-cols-3">
            {([
              ["≈ 1 in 4", "dogs develop cancer in their lifetime"],
              ["#1", "disease-related cause of death in senior pets"],
              ["Earlier", "detection means more treatment options"],
            ] as [string, string][]).map(([big, small]) => (
              <Reveal key={small} className="text-center sm:text-left">
                <div className="font-display text-4xl font-semibold text-brand sm:text-5xl">
                  {big}
                </div>
                <p className="mt-2 text-sm text-ink-soft">{small}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ========================================================= SCIENCE */}
        <section id="science" className="section border-b border-line">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="max-w-2xl">
              <p className="eyebrow mb-4">The science</p>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-balance">
                A biological signal, read by light.
              </h2>
              <p className="mt-4 text-lg text-ink-soft">
                Three steps turn a urine sample into a screening result — no invasive
                procedure, no external laboratory.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {SCIENCE.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <article className="group h-full rounded-2xl border border-line bg-paper-2 p-7 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl font-mono text-sm font-semibold text-white"
                      style={{ background: s.accent }}
                    >
                      {i + 1}
                    </span>
                    <p className="eyebrow mt-6 mb-2" style={{ color: s.accent }}>
                      {s.tag}
                    </p>
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================= HOW */}
        <section id="how" className="section border-b border-line bg-paper-2">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="max-w-2xl">
              <p className="eyebrow mb-4">The workflow</p>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em]">
                Four steps, start to result.
              </h2>
            </Reveal>

            <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.n} delay={i * 80} className="bg-paper-2">
                  <div className="flex h-full flex-col p-7">
                    <span className="font-mono text-sm font-semibold text-brand tnum">
                      {s.n}
                    </span>
                    <span aria-hidden className="mt-1 h-px w-8 bg-brand/40" />
                    <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ============================================================= KIT */}
        <section className="section border-b border-line bg-paper-2">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <p className="eyebrow mb-4">In the box</p>
                <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em]">
                  Everything to run a test.
                </h2>
                <p className="mt-4 text-ink-soft">
                  The consumable kit carries the chemistry; the analyzer carries the optics
                  and the intelligence. Together they make a screen you can run on your own
                  bench.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <ul className="divide-y divide-line rounded-2xl border border-line bg-paper">
                  {KIT.map(([k, v]) => (
                    <li key={k} className="flex gap-4 px-6 py-4">
                      <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                      <div>
                        <p className="font-medium">{k}</p>
                        <p className="text-sm text-ink-soft">{v}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ======================================================== BENEFITS */}
        <section className="section border-b border-line">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="max-w-2xl">
              <p className="eyebrow mb-4">Why uriBX</p>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em]">
                Built for the exam room.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map(([k, v], i) => (
                <Reveal key={k} delay={(i % 3) * 80}>
                  <div className="h-full rounded-2xl border border-line bg-paper-2 p-7">
                    <h3 className="font-display text-lg font-semibold tracking-tight">{k}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= QUALITY */}
        <section className="section border-b border-line bg-band text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="eyebrow mb-4" style={{ color: "var(--cyan)" }}>
                Quality &amp; compliance
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
                Engineered under a medical-device discipline.
              </h2>
              <p className="mt-4 text-white/70">
                uriBX is developed with design controls, traceability, and quality
                management aligned to ISO 13485 principles — from firmware to consumable.
                Every device updates securely over the air, so the fleet stays current.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                {([
                  ["ISO 13485", "Quality-aligned processes"],
                  ["Design controls", "Traceable, versioned firmware"],
                  ["Secure OTA", "Signed over-the-air updates"],
                  ["For veterinary use", "Screening aid, not a diagnosis"],
                ] as [string, string][]).map(([k, v]) => (
                  <div key={k} className="bg-band p-6">
                    <p className="font-display text-lg font-semibold text-white">{k}</p>
                    <p className="mt-1 text-sm text-white/55">{v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========================================================= CONTACT */}
        <section id="contact" className="section">
          <div className="mx-auto max-w-6xl px-5">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-paper-2 p-8 sm:p-12">
              <div className="labgrid pointer-events-none absolute inset-0 opacity-[0.35]" />
              <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="eyebrow mb-4">Get in touch</p>
                  <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-balance">
                    Bring earlier screening to your clinic.
                  </h2>
                  <p className="mt-4 max-w-md text-ink-soft">
                    Talk to us about pilots, distribution, and pricing for the uriBX
                    URB-1000 and consumable kits.
                  </p>
                  <a
                    href="mailto:info@uribx.com"
                    className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-deep"
                  >
                    info@uribx.com
                  </a>
                </div>
                <div className="relative rounded-2xl border border-line bg-paper p-7">
                  <p className="font-display text-lg font-semibold">
                    Uribx Medikal Cihaz San. ve Tic. A.Ş.
                  </p>
                  <address className="mt-3 not-italic text-sm leading-relaxed text-ink-soft">
                    İzbaş Serbest Bölgesi
                    <br />
                    Menemen, İzmir · Türkiye
                  </address>
                  <div className="mt-5 space-y-1.5 font-mono text-sm">
                    <p>
                      <span className="text-ink-faint">email </span>
                      <a href="mailto:info@uribx.com" className="text-brand hover:underline">
                        info@uribx.com
                      </a>
                    </p>
                    <p>
                      <span className="text-ink-faint">web&nbsp;&nbsp; </span>
                      uribx.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================ FOOTER */}
      <footer className="border-t border-line bg-paper-2">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Wordmark />
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-ink-faint">
              uriBX URB-1000 is a screening aid for veterinary use and does not provide a
              diagnosis. Results should be interpreted by a licensed veterinarian.
            </p>
          </div>
          <p className="font-mono text-xs text-ink-faint">
            © {new Date().getFullYear()} Uribx Medikal Cihaz San. ve Tic. A.Ş.
          </p>
        </div>
      </footer>
    </>
  );
}
