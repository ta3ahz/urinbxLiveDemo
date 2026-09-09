export default function Wordmark({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-label="uriBX">
      <svg
        viewBox="0 0 24 24"
        className={compact ? "h-5 w-5" : "h-6 w-6"}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2.5C12 2.5 4.5 10.6 4.5 15.2a7.5 7.5 0 0 0 15 0C19.5 10.6 12 2.5 12 2.5Z"
          fill="var(--brand)"
        />
        <circle cx="9.4" cy="14.4" r="2.2" fill="#fff" opacity="0.85" />
      </svg>
      <span
        className="font-semibold tracking-tight"
        style={{ fontSize: compact ? "1.05rem" : "1.25rem", letterSpacing: "-0.02em" }}
      >
        <span style={{ color: "var(--ink)" }}>uri</span>
        <span style={{ color: "var(--brand)" }}>BX</span>
      </span>
    </span>
  );
}
