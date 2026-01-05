import Link from "next/link";
import LedgerClock from "@/components/LedgerClock";

const TABS = [
  { href: "/", label: "Home" },
  { href: "/digital-parliament", label: "Digital Parliament" },
  { href: "/trust", label: "Trust" },
  { href: "/contact", label: "Contact" },
];

type Surface = "card" | "none";

export default function InstitutionalFrame({
  active,
  children,
  surface = "card",
}: {
  active: string;
  children: React.ReactNode;
  surface?: Surface;
}) {
  return (
    <div className="relative min-h-dvh bg-[#05070c] text-white overflow-x-clip">
      {/* ONE atmosphere (absolute, not fixed) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* top halo */}
        <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(900px_220px_at_50%_0%,rgba(255,214,128,0.08),transparent_62%)]" />
        {/* faint vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_20%,rgba(255,255,255,0.04),transparent_60%)]" />
        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(900px_220px_at_50%_100%,rgba(255,214,128,0.05),transparent_65%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070c]/92 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="text-[11px] tracking-widemax text-white/85 hover:text-white"
          >
            OASIS HOLDINGS
          </Link>

          <div className="flex-1 flex justify-center">
            <LedgerClock />
          </div>

          <Link
            href="/authority"
            className="rounded-xl border border-[rgba(255,214,128,.22)] bg-[rgba(255,214,128,.06)] px-3 py-2 text-[10px] tracking-wideplus text-[rgba(255,214,128,.92)] hover:bg-[rgba(255,214,128,.10)]"
          >
            AUTHORITY GATEWAY
          </Link>
        </div>

        <nav className="mx-auto max-w-6xl px-6 pb-4 flex gap-2">
          {TABS.map((t) => {
            const on = active === t.href;
            return (
              <Link
                key={t.href}
                href={t.href}
                className={[
                  "rounded-xl px-3 py-2 text-[10px] tracking-wideplus transition",
                  on
                    ? "border border-[rgba(255,214,128,.30)] bg-[rgba(255,214,128,.10)] text-[rgba(255,214,128,.95)]"
                    : "border border-white/10 text-white/55 hover:text-white/80 hover:bg-white/[0.03]",
                ].join(" ")}
              >
                {t.label.toUpperCase()}
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        {surface === "card" ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-12">
            {children}
          </div>
        ) : (
          <>{children}</>
        )}
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="mx-auto mb-4 h-px w-24 bg-[rgba(255,214,128,.28)]" />
          <p className="text-[10px] tracking-wideplus text-white/40">
            Oasis International Holdings Inc — institutional stewardship of governance infrastructure.
          </p>
        </div>
      </footer>
    </div>
  );
}
