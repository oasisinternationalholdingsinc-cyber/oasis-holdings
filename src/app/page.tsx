// src/app/page.tsx
import Link from "next/link";
import InstitutionalFrame from "@/components/InstitutionalFrame";

/**
 * Small design primitives (Apple-level polish):
 * - Emblem badge: gold capsule with inner ring + subtle bevel
 * - Chips: quieter, more "system UI"
 * - Cards: refined depth + hover lift
 * - Separators: softer, more architectural
 */

function EmblemBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,214,128,.22)] bg-[rgba(255,214,128,.06)] px-3 py-2 text-[10px] tracking-wideplus text-[rgba(255,214,128,.92)] shadow-[0_0_0_1px_rgba(0,0,0,.35)_inset]">
      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[rgba(255,214,128,.28)] bg-[rgba(255,214,128,.08)] shadow-[0_0_0_1px_rgba(0,0,0,.35)_inset]">
        <span className="h-1.5 w-1.5 rounded-full bg-[rgba(255,214,128,.95)] shadow-[0_0_12px_rgba(255,214,128,.25)]" />
      </span>
      <span className="translate-y-[.5px]">{children}</span>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] tracking-wideplus text-white/60 shadow-[0_0_0_1px_rgba(0,0,0,.35)_inset]">
      {children}
    </div>
  );
}

function SoftCard({
  title,
  desc,
  tag,
}: {
  title: string;
  desc: string;
  tag: string;
}) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-8 shadow-[0_40px_90px_rgba(0,0,0,.35)] transition-all duration-300 hover:-translate-y-[2px] hover:border-white/15 hover:bg-white/[0.03]">
      <div className="flex items-start justify-between gap-4">
        <div className="text-sm text-white/85">{title}</div>
        <Chip>{tag}</Chip>
      </div>
      <div className="mt-4 text-sm text-white/55 leading-relaxed">{desc}</div>
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-60" />
      <div className="mt-4 text-[11px] text-white/45">
        Evidence-grade posture. No noise.
      </div>
    </div>
  );
}

function DotRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-[6px] h-2 w-2 rounded-full bg-[rgba(255,214,128,.85)] shadow-[0_0_0_6px_rgba(255,214,128,.08),0_0_18px_rgba(255,214,128,.12)]" />
      <div className="min-w-0">
        <div className="text-[11px] tracking-widemax text-white/80">
          {title.toUpperCase()}
        </div>
        <div className="mt-1 text-sm text-white/55 leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

function MetaRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-6 border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
      <div className="text-[11px] tracking-widemax text-white/60">{k}</div>
      <div className="text-sm text-white/55 text-right leading-relaxed">{v}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <InstitutionalFrame active="/">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-8 shadow-[0_60px_140px_rgba(0,0,0,.45)] md:p-12">
        {/* subtle ambient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-full bg-[rgba(255,214,128,.06)] blur-[90px]" />
          <div className="absolute bottom-[-140px] right-[-120px] h-80 w-80 rounded-full bg-white/[0.04] blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.06),transparent_55%)]" />
        </div>

        <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <EmblemBadge>OASIS DIGITAL PARLIAMENT • INSTITUTIONAL BOUNDARY</EmblemBadge>

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
                className="rounded-xl border border-[rgba(255,214,128,.26)] bg-[rgba(255,214,128,.07)] px-4 py-3 text-[10px] tracking-wideplus text-[rgba(255,214,128,.92)] shadow-[0_0_0_1px_rgba(0,0,0,.35)_inset] transition-all duration-300 hover:bg-[rgba(255,214,128,.11)] hover:shadow-[0_0_0_1px_rgba(0,0,0,.35)_inset,0_18px_50px_rgba(0,0,0,.35)] active:translate-y-[1px]"
                href="https://portal.oasisintlholdings.com"
                target="_blank"
                rel="noreferrer"
              >
                ENTER PUBLIC AUTHORITY GATEWAY <span aria-hidden="true">↗</span>
              </a>

              <Link
                className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[10px] tracking-wideplus text-white/70 shadow-[0_0_0_1px_rgba(0,0,0,.35)_inset] transition-all duration-300 hover:bg-white/[0.04] hover:shadow-[0_0_0_1px_rgba(0,0,0,.35)_inset,0_18px_50px_rgba(0,0,0,.35)] active:translate-y-[1px]"
                href="/digital-parliament"
              >
                EXPLORE DIGITAL PARLIAMENT
              </Link>
            </div>
          </div>

          {/* HERO META */}
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.02] p-7 shadow-[0_40px_90px_rgba(0,0,0,.35)] md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="text-[11px] tracking-widemax text-white/70">
                INSTITUTIONAL POSTURE
              </div>
              <div className="hidden md:block rounded-full border border-[rgba(255,214,128,.18)] bg-[rgba(255,214,128,.05)] px-3 py-1 text-[10px] tracking-wideplus text-[rgba(255,214,128,.85)]">
                PROOF PRIMITIVES
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <MetaRow k="THIS SITE" v="Institutional boundary - language, trust primitives." />
              <MetaRow k="EXECUTION" v="Occurs through internal OS lanes and the Authority Portal." />
              <MetaRow k="PROOF" v="Hash - Registry - Public render - Certificate receipt." />
              <MetaRow k="POLICY" v="Signed is not archived. Archive is a lifecycle state." />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(0,0,0,.35)_inset]">
              <div className="text-[10px] tracking-wideplus text-white/65">
                AUTHORITY GATEWAY
              </div>
              <div className="mt-2 text-sm text-white/55 leading-relaxed">
                Signing, verification, and certificates live behind the public
                portal. This site remains calm, descriptive, and non-executing
                by design.
              </div>
            </div>
          </div>
        </div>

        {/* HERO FOOT META STRIP */}
        <div className="relative mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["MODE", "Institutional - readable - verifiable"],
            ["JURISDICTION", "Ontario, Canada"],
            ["PRINCIPLE", "Evidence over claims"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_0_0_1px_rgba(0,0,0,.35)_inset] transition-colors hover:bg-white/[0.03]"
            >
              <div className="text-[11px] tracking-widemax text-white/70">{k}</div>
              <div className="mt-2 text-sm text-white/55">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SoftCard
          title="Verification"
          desc='Public verify and certificate flows designed to feel official - not "crypto".'
          tag="Public"
        />
        <SoftCard
          title="Auditability"
          desc="Deterministic archives, hashes, and evidence pointers - no ambiguity."
          tag="System of Record"
        />
        <SoftCard
          title="Execution"
          desc="Draft -> Council -> Signature -> Archive, with clean lifecycle states."
          tag="Governance"
        />
        <SoftCard
          title="Gateway"
          desc="Sign, verify, certificates, and onboarding - one public door."
          tag="Access"
        />
      </section>

      {/* GATEWAY PANEL */}
      <section className="relative mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-8 shadow-[0_60px_140px_rgba(0,0,0,.40)] md:p-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[rgba(255,214,128,.05)] blur-[90px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,.06),transparent_55%)]" />
        </div>

        <div className="relative grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <div className="text-[11px] tracking-widemax text-white/70">
              PUBLIC AUTHORITY GATEWAY
            </div>
            <h2 className="mt-3 text-2xl tracking-wideplus md:text-3xl">
              One door.{" "}
              <span className="text-[rgba(255,214,128,.92)]">
                Deliberate access
              </span>
              .
            </h2>
            <p className="mt-5 max-w-xl text-sm text-white/60 leading-relaxed">
              A public launchpad for external clients and stakeholders.
              Verification and certificate access remain simple. Organization
              onboarding remains deliberate. No noise.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                className="rounded-xl border border-[rgba(255,214,128,.26)] bg-[rgba(255,214,128,.07)] px-4 py-3 text-[10px] tracking-wideplus text-[rgba(255,214,128,.92)] shadow-[0_0_0_1px_rgba(0,0,0,.35)_inset] transition-all duration-300 hover:bg-[rgba(255,214,128,.11)] hover:shadow-[0_0_0_1px_rgba(0,0,0,.35)_inset,0_18px_50px_rgba(0,0,0,.35)] active:translate-y-[1px]"
                href="https://portal.oasisintlholdings.com"
                target="_blank"
                rel="noreferrer"
              >
                OPEN GATEWAY <span aria-hidden="true">↗</span>
              </a>
              <Link
                className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[10px] tracking-wideplus text-white/70 shadow-[0_0_0_1px_rgba(0,0,0,.35)_inset] transition-all duration-300 hover:bg-white/[0.04] hover:shadow-[0_0_0_1px_rgba(0,0,0,.35)_inset,0_18px_50px_rgba(0,0,0,.35)] active:translate-y-[1px]"
                href="/trust"
              >
                TRUST AND DISCIPLINE
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 shadow-[0_40px_90px_rgba(0,0,0,.35)] md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="text-[11px] tracking-widemax text-white/70">
                GATEWAY OUTLINE
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] tracking-wideplus text-white/55">
                ONE PUBLIC DOOR
              </div>
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
