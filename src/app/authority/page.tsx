import InstitutionalFrame from "@/components/InstitutionalFrame";
import Link from "next/link";

function Panel({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
      <div className="text-[11px] tracking-widemax text-[rgba(255,214,128,.92)]">
        {title.toUpperCase()}
      </div>
      <div className="mt-3 text-sm text-white/60 leading-relaxed">{body}</div>
    </div>
  );
}

function ActionLink({
  href,
  label,
  tone = "muted",
  external = false,
}: {
  href: string;
  label: string;
  tone?: "muted" | "gold";
  external?: boolean;
}) {
  const cls =
    tone === "gold"
      ? "rounded-xl border border-[rgba(255,214,128,.22)] bg-[rgba(255,214,128,.06)] px-4 py-3 text-[10px] tracking-wideplus text-[rgba(255,214,128,.92)] hover:bg-[rgba(255,214,128,.10)]"
      : "rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[10px] tracking-wideplus text-white/70 hover:bg-white/[0.04]";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {label}
    </Link>
  );
}

export default function Authority() {
  return (
    <InstitutionalFrame active="">
      <div className="flex items-start justify-between gap-8">
        <div>
          <h1 className="text-3xl tracking-wideplus">PUBLIC AUTHORITY GATEWAY</h1>
          <p className="mt-6 max-w-3xl text-white/65 leading-relaxed">
            This page is an airlock. The institutional shell explains posture and vocabulary, but
            it does not execute governance. Signing, verification, certificate issuance, and
            onboarding occur through the Public Authority Portal.
          </p>
        </div>

        <div className="hidden md:block rounded-2xl border border-[rgba(255,214,128,.18)] bg-[rgba(255,214,128,.05)] px-4 py-3">
          <div className="text-[10px] tracking-wideplus text-[rgba(255,214,128,.9)]">BOUNDARY</div>
          <div className="mt-1 text-[11px] text-white/55">Explain here • Execute elsewhere</div>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Panel
          title="What Happens Here"
          body="This site establishes institutional context: what the system is, how governance is structured, and how proof is generated. No records are created, signed, or modified here."
        />
        <Panel
          title="What Happens in the Portal"
          body="The Public Authority Portal handles signing, verification, certificate resolution, and onboarding. It is the sole public execution surface."
        />
        <Panel
          title="Truth Lane Discipline"
          body="Execution environments are lane-segregated. Sandbox and record-of-truth never cross. Public views only ever resolve sealed artifacts."
        />
        <Panel
          title="Operator Intent"
          body="If you are here to act, proceed to the Portal. If you are here to understand, remain within this institutional boundary."
        />
      </div>

      {/* ACTIONS (NO WIRING CHANGES TO EXISTING ROUTES) */}
      <div className="mt-12 flex flex-wrap gap-3">
        <ActionLink href="/" label="RETURN HOME" tone="muted" />

        {/* keep your internal trust route exactly as-is */}
        <ActionLink href="/trust" label="CONTINUE TO TRUST" tone="gold" external={false} />

        {/* optional outward doors (evidence-first; no marketing) */}
        <ActionLink
          href="https://portal.oasisintlholdings.com"
          label="OPEN PUBLIC PORTAL"
          tone="muted"
          external
        />
        <ActionLink
          href="https://onboarding.oasisintlholdings.com"
          label="ONBOARDING"
          tone="muted"
          external
        />
        <ActionLink
          href="https://ledger.oasisintlholdings.com"
          label="CLIENT LEDGER"
          tone="muted"
          external
        />
      </div>

      <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
        <div className="text-[11px] tracking-widemax text-white/70">PRODUCTION NOTE</div>
        <div className="mt-3 text-sm text-white/60 leading-relaxed">
          This page remains unchanged as systems evolve. Authority routes outward; execution remains
          segregated. The boundary is architectural, not cosmetic.
        </div>
      </div>
    </InstitutionalFrame>
  );
}
