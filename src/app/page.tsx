import InstitutionalFrame from "@/components/InstitutionalFrame";
import Link from "next/link";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[11px] tracking-widemax text-white/65">
      {children}
    </span>
  );
}

function Block({
  k,
  title,
  body,
}: {
  k: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
      <div className="flex items-center justify-between gap-6">
        <div className="text-[10px] tracking-wideplus text-white/60">{k}</div>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <div className="mt-4 text-[12px] tracking-wideplus text-white/85">
        {title}
      </div>
      <div className="mt-2 text-sm text-white/60 leading-relaxed">{body}</div>
    </div>
  );
}

function Row({
  k,
  v,
}: {
  k: string;
  v: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-6 border-t border-white/10 py-4 first:border-t-0 first:pt-0 last:pb-0">
      <div className="text-[11px] tracking-widemax text-white/70">{k}</div>
      <div className="text-sm text-white/60 text-right leading-relaxed">{v}</div>
    </div>
  );
}

export default function Home() {
  return (
    <InstitutionalFrame active="/">
      {/* HERO STRIP */}
      <div className="grid gap-6 lg:grid-cols-[1.4fr_.9fr]">
        <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-10">
          <div className="flex flex-wrap gap-2">
            <Pill>Institutional Boundary</Pill>
            <Pill>Verifiability First</Pill>
            <Pill>Archive Discipline</Pill>
          </div>

          <h1 className="mt-6 text-4xl tracking-wideplus">
            Institutional Governance
          </h1>

          <p className="mt-5 max-w-2xl text-white/65 leading-relaxed">
            Oasis International Holdings stewards governance infrastructure through a
            constitutional digital system. This public site is the boundary: it explains the
            discipline, exposes proof primitives, and routes operators to the Authority Gateway.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/digital-parliament"
              className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[10px] tracking-wideplus text-white/70 hover:bg-white/[0.04]"
            >
              EXPLORE DIGITAL PARLIAMENT
            </Link>

            <Link
              href="/trust"
              className="rounded-xl border border-[rgba(255,214,128,.22)] bg-[rgba(255,214,128,.06)] px-4 py-3 text-[10px] tracking-wideplus text-[rgba(255,214,128,.92)] hover:bg-[rgba(255,214,128,.10)]"
            >
              TRUST & VERIFICATION
            </Link>
          </div>
        </div>

        {/* RIGHT PANEL: "SYSTEM CARD" */}
        <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-8">
          <div className="text-[11px] tracking-widemax text-[rgba(255,214,128,.92)]">
            PUBLIC POSTURE
          </div>

          <div className="mt-6">
            <Row
              k="This site"
              v="Institutional boundary • language • trust primitives"
            />
            <Row
              k="Execution"
              v="Occurs through internal OS lanes and the Authority Portal"
            />
            <Row
              k="Proof"
              v="Hash • Registry • Public render • Certificate receipt"
            />
            <Row
              k="Policy"
              v={
                <>
                  Signed ≠ Archived. <span className="text-white/45">Archive is a lifecycle state.</span>
                </>
              }
            />
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-[10px] tracking-wideplus text-white/65">
              AUTHORITY GATEWAY
            </div>
            <div className="mt-2 text-sm text-white/60 leading-relaxed">
              Signing, verification, and certificate resolution live behind the public portal.
              This site remains calm, descriptive, and non-executing by design.
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: DISCIPLINE / LIFECYCLE */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Block
          k="STEWARDSHIP"
          title="Lifecycle Discipline"
          body="Draft, approve, execute, archive. Authority is expressed through process, not aesthetics."
        />
        <Block
          k="VERIFIABILITY"
          title="Proof Over Claims"
          body="Certificates resolve to structured records. Registry pointers identify the authoritative object."
        />
        <Block
          k="CONTINUITY"
          title="Minute Book as Record"
          body="A registry designed to outlive operators, tools, and interface styles."
        />
      </div>

      {/* SECTION: THE THREE DOORS */}
      <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.02] p-9">
        <div className="flex items-center justify-between gap-6">
          <div>
            <div className="text-[11px] tracking-widemax text-white/70">
              NAVIGATION
            </div>
            <div className="mt-2 text-lg tracking-wideplus text-white/85">
              Three public doors. Nothing else.
            </div>
          </div>
          <div className="hidden md:block text-[11px] text-white/50">
            Silence + structure communicate authority.
          </div>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          <Link
            href="/digital-parliament"
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04]"
          >
            <div className="text-[10px] tracking-wideplus text-[rgba(255,214,128,.9)]">
              DIGITAL PARLIAMENT
            </div>
            <div className="mt-3 text-sm text-white/60 leading-relaxed">
              Governance architecture: lanes, lifecycle, archive discipline, institutional posture.
            </div>
          </Link>

          <Link
            href="/trust"
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04]"
          >
            <div className="text-[10px] tracking-wideplus text-[rgba(255,214,128,.9)]">
              TRUST
            </div>
            <div className="mt-3 text-sm text-white/60 leading-relaxed">
              Verification primitives: hash resolution, registry, public render, certificate receipt.
            </div>
          </Link>

          <Link
            href="/contact"
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04]"
          >
            <div className="text-[10px] tracking-wideplus text-[rgba(255,214,128,.9)]">
              CONTACT
            </div>
            <div className="mt-3 text-sm text-white/60 leading-relaxed">
              Institutional inquiries only. For sign / verify / certificate, use the portal.
            </div>
          </Link>
        </div>
      </div>
    </InstitutionalFrame>
  );
}
