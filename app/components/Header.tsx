import Wordmark from "./Wordmark";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { href: "#science", label: "Science" },
  { href: "#how", label: "How it works" },
  { href: "#device", label: "Device" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="shrink-0">
          <Wordmark />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-ink-soft transition hover:text-ink"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#device"
            className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-brand-deep"
          >
            Try the device
          </a>
        </div>
      </div>
    </header>
  );
}
