// src/app/page.tsx
import Link from "next/link";
import InstitutionalFrame from "@/components/InstitutionalFrame";

function Card({
  title,
  desc,
  tag,
}: {
  title: string;
  desc: string;
  tag: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="text-sm text-white/85">{title}</div>
        <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] tracking-wideplus text-white/60">
          {tag}
        </div>
      </div>
      <div className="mt-4 text-sm text-white/55 leading-relaxed">{desc}</div>
    </div>
  );
}

function DotRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-[6px] h-2 w-2 rounded-full bg-[rgba(255,214,128,.85)] shadow-[0_0_0_6px_rgba(255,214,128,.08)]" />
      <div>
        <div className="text-[11px] tracking-widemax text-white/80">
          {title.toUpperCase()}
        </div>
        <div className="mt-1 text-sm text-white/55 leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <InstitutionalFrame active="/">
      {/* HERO */}
      <section className="rounded-[28px] border border-white/10 bg-white/[0.02] p-8 md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,214,128,.18)] bg-[rgba(255,214,128,.05)] px-3 py-2 text-[10px] tracking-wideplus text-[rgba(255,214,128,.9)]">
              OASIS DIGITAL PARLIAMENT
              <span className="h-1 w-1 rounded-full bg-[rgba(255,214,128,.85)]" />
              INSTITUTIONAL BOUNDARY
            </div>

            <h1 className="mt-7 text-4xl leading-[1.06] tracking-wideplus md:text-5xl">
              Silence and structure -{" "}
              <span className="text-[rgba(255,214,128,.92)]">
                governance you can verify
              </span>
              .
            </h1>

            <p className="mt-6 max-w-2xl text-sm text-white/60 leading-relaxed md:text-[15px]">
              Oasis International Holdings builds institutional governance
              infrastructure where approvals, signatures, archives, and
              verification resolve into a single coherent system - calm,
              auditable, and enterprise-grade.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-xl border border-[rgba(255,214,128,.22)] bg-[rgba(255,214,128,.06)] px-4 py-3 text-[10px] tracking-wideplus text-[rgba(255,214,128,.92)] hover:bg-[rgba(255,214,128,.10)]"
                href="https://portal.oasisintlholdings.com"
                target="_blank"
                rel="noreferrer"
              >
                ENTER PUBLIC AUTHORITY GATEWAY <span aria-hidden="true">↗</span>
              </a>

              <Link
                className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[10px] tracking-wideplus text-white/70 hover:bg-white/[0.04]"
                href="/digital-parliament"
              >
                EXPLORE DIGITAL PARLIAMENT
              </Link>
            </div>
          </div>

          {/* HERO META */}
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-8">
            <div className="text-[11px] tracking-widemax text-white/70">
              INSTITUTIONAL POSTURE
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-start justify-between gap-6 border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                <div className="text-[11px] tracking-widemax text-white/60">
                  THIS SITE
                </div>
                <div className="text-sm text-white/55 text-right leading-relaxed">
                  Institutional boundary - language, trust primitives.
                </div>
              </div>

              <div className="flex items-start justify-between gap-6 border-t border-white/10 pt-4">
                <div className="text-[11px] tracking-widemax text-white/60">
                  EXECUTION
                </div>
                <div className="text-sm text-white/55 text-right leading-relaxed">
                  Occurs through internal OS lanes and the Authority Portal.
                </div>
              </div>

              <div className="flex items-start justify-between gap-6 border-t border-white/10 pt-4">
                <div className="text-[11px] tracking-widemax text-white/60">
                  PROOF
                </div>
                <div className="text-sm text-white/55 text-right leading-relaxed">
                  Hash - Registry - Public render - Certificate receipt.
                </div>
              </div>

              <div className="flex items-start justify-between gap-6 border-t border-white/10 pt-4">
                <div className="text-[11px] tracking-widemax text-white/60">
                  POLICY
                </div>
                <div className="text-sm text-white/55 text-right leading-relaxed">
                  Signed is not archived. Archive is a lifecycle state.
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-[10px] tracking-wideplus text-white/65">
                AUTHORITY GATEWAY
              </div>
              <div className="mt-2 text-sm text-white/55 leading-relaxed">
                Signing, verification, and certificates live behind the public
                portal. This site remains calm, descriptive, and non-executing by
                design.
              </div>
            </div>
          </div>
        </div>

        {/* HERO FOOT META STRIP */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="text-[11px] tracking-widemax text-white/70">
              MODE
            </div>
            <div className="mt-2 text-sm text-white/55">
              Institutional - readable - verifiable
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="text-[11px] tracking-widemax text-white/70">
              JURISDICTION
            </div>
            <div className="mt-2 text-sm text-white/55">Ontario, Canada</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="text-[11px] tracking-widemax text-white/70">
              PRINCIPLE
            </div>
            <div className="mt-2 text-sm text-white/55">Evidence over claims</div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Verification"
          desc='Public verify and certificate flows designed to feel official - not "crypto".'
          tag="Public"
        />
        <Card
          title="Auditability"
          desc="Deterministic archives, hashes, and evidence pointers - no ambiguity."
          tag="System of Record"
        />
        <Card
          title="Execution"
          desc="Draft -> Council -> Signature -> Archive, with clean lifecycle states."
          tag="Governance"
        />
        <Card
          title="Gateway"
          desc="Sign, verify, certificates, and onboarding - one public door."
          tag="Access"
        />
      </section>

      {/* GATEWAY PANEL */}
      <section className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.02] p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <div className="text-[11px] tracking-widemax text-white/70">
              PUBLIC AUTHORITY GATEWAY
            </div>
            <h2 className="mt-3 text-2xl tracking-wideplus md:text-3xl">
              One door.{" "}
              <span className="text-[rgba(255,214,128,.92)]">Deliberate access</span>.
            </h2>
            <p className="mt-5 max-w-xl text-sm text-white/60 leading-relaxed">
              A public launchpad for external clients and stakeholders.
              Verification and certificate access remain simple. Organization
              onboarding remains deliberate. No noise.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                className="rounded-xl border border-[rgba(255,214,128,.22)] bg-[rgba(255,214,128,.06)] px-4 py-3 text-[10px] tracking-wideplus text-[rgba(255,214,128,.92)] hover:bg-[rgba(255,214,128,.10)]"
                href="https://portal.oasisintlholdings.com"
                target="_blank"
                rel="noreferrer"
              >
                OPEN GATEWAY <span aria-hidden="true">↗</span>
              </a>
              <Link
                className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[10px] tracking-wideplus text-white/70 hover:bg-white/[0.04]"
                href="/trust"
              >
                TRUST AND DISCIPLINE
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-8">
            <div className="text-[11px] tracking-widemax text-white/70">
              GATEWAY OUTLINE
            </div>

            <div className="mt-6 space-y-5">
              <DotRow
                title="Verify"
                desc="Validate records by hash, envelope id, or ledger id."
              />
              <DotRow
                title="Certificate"
                desc="Official view designed for printing and retention."
              />
              <DotRow
                title="Sign"
                desc="Authority-scoped signing flows with verification receipts."
              />
              <DotRow
                title="Onboard"
                desc="Create an organization and assign authority - optional, never forced."
              />
            </div>
          </div>
        </div>
      </section>

      {/* MICRO FOOTER */}
      <section className="mt-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mt-4 text-center text-[11px] tracking-widemax text-white/45">
          Built for clarity. Designed for calm. Verified by evidence.
        </div>
      </section>
    </InstitutionalFrame>
  );
}
