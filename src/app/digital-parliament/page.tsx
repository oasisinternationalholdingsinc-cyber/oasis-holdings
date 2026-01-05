import InstitutionalFrame from '@/components/InstitutionalFrame';
import Link from "next/link";

const GATEWAY_URL = "https://portal.oasisintlholdings.com";

function Chip({
  children,
  tone = "gold",
}: {
  children: React.ReactNode;
  tone?: "gold" | "muted";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] tracking-[0.18em] uppercase border";
  const gold =
    "border-[rgba(255,214,128,.25)] bg-[rgba(255,214,128,.08)] text-[rgba(255,214,128,.92)] shadow-[0_0_0_1px_rgba(255,214,128,.08)_inset]";
  const muted =
    "border-[rgba(255,255,255,.10)] bg-[rgba(255,255,255,.04)] text-[rgba(255,255,255,.70)]";
  return <span className={`${base} ${tone === "gold" ? gold : muted}`}>{children}</span>;
}

function Panel({
  title,
  children,
  right,
}: {
  title?: React.ReactNode;
  children: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <div className="relative rounded-3xl border border-[rgba(255,255,255,.08)] bg-[rgba(10,14,22,.55)] shadow-[0_1px_0_rgba(255,255,255,.04)_inset,0_30px_80px_rgba(0,0,0,.55)]">
      <div className="absolute inset-0 rounded-3xl pointer-events-none bg-[radial-gradient(1200px_500px_at_50%_-20%,rgba(255,214,128,.10),transparent_65%)]" />
      <div className="relative p-8 md:p-10">
        {title ? (
          <div className="mb-6 flex items-start justify-between gap-6">
            <div className="min-w-0">{title}</div>
            {right ? <div className="hidden md:block">{right}</div> : null}
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[rgba(255,255,255,.08)] bg-[rgba(255,255,255,.03)] px-5 py-4">
      <div className="text-[10px] tracking-[0.22em] uppercase text-[rgba(255,255,255,.55)]">
        {label}
      </div>
      <div className="mt-2 text-sm text-[rgba(255,255,255,.82)]">{value}</div>
    </div>
  );
}

function Card({
  title,
  tag,
  desc,
}: {
  title: string;
  tag: string;
  desc: string;
}) {
  return (
    <div className="group relative rounded-3xl border border-[rgba(255,255,255,.08)] bg-[rgba(255,255,255,.03)] p-6 shadow-[0_1px_0_rgba(255,255,255,.04)_inset] transition">
      <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none bg-[radial-gradient(500px_200px_at_20%_0%,rgba(255,214,128,.10),transparent_60%)]" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="text-sm font-medium text-[rgba(255,255,255,.92)]">{title}</div>
        <Chip tone="muted">{tag}</Chip>
      </div>
      <div className="relative mt-4 text-sm leading-relaxed text-[rgba(255,255,255,.66)]">
        {desc}
      </div>
      <div className="relative mt-6 text-[11px] tracking-[0.18em] uppercase text-[rgba(255,214,128,.70)]">
        Evidence-grade posture. No noise.
      </div>
    </div>
  );
}

function Row({
  k,
  v,
}: {
  k: string;
  v: string;
}) {
  return (
    <div className="flex items-start justify-between gap-6 border-t border-[rgba(255,255,255,.08)] py-4">
      <div className="text-[10px] tracking-[0.22em] uppercase text-[rgba(255,255,255,.62)]">
        {k}
      </div>
      <div className="text-sm text-[rgba(255,255,255,.78)] text-right">{v}</div>
    </div>
  );
}

export default function DigitalParliamentPage() {
  return (
    <main className="min-h-screen bg-[#05070c] text-white">
      {/* subtle backdrop */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_700px_at_50%_-10%,rgba(255,214,128,.08),transparent_60%),radial-gradient(900px_500px_at_20%_30%,rgba(120,170,255,.05),transparent_60%),radial-gradient(800px_500px_at_80%_55%,rgba(255,255,255,.03),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-10 md:px-8 md:pt-14">
        <Panel
          title={
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <Chip>Digital Parliament Ledger</Chip>
                <Chip tone="muted">Public Boundary</Chip>
                <Chip tone="muted">Verifiability First</Chip>
              </div>

              <h1 className="text-3xl md:text-4xl font-medium tracking-wide text-[rgba(255,255,255,.95)]">
                Digital Parliament Ledger
              </h1>

              <p className="max-w-2xl text-sm md:text-[15px] leading-relaxed text-[rgba(255,255,255,.70)]">
                A constitutional governance system: drafted with discipline, approved by authority, executed with
                signatures when required, and archived with verifiable artifacts. This site explains the system.
                Execution occurs inside the OS and the Authority Gateway.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={GATEWAY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-[rgba(255,214,128,.25)] bg-[rgba(255,214,128,.10)] px-5 py-3 text-[11px] tracking-[0.18em] uppercase text-[rgba(255,214,128,.92)] shadow-[0_0_0_1px_rgba(255,214,128,.08)_inset] hover:bg-[rgba(255,214,128,.14)] transition"
                >
                  Enter Authority Gateway <span className="ml-2 opacity-80">↗</span>
                </a>

                <Link
                  href="/trust"
                  className="inline-flex items-center justify-center rounded-xl border border-[rgba(255,255,255,.10)] bg-[rgba(255,255,255,.03)] px-5 py-3 text-[11px] tracking-[0.18em] uppercase text-[rgba(255,255,255,.78)] hover:bg-[rgba(255,255,255,.05)] transition"
                >
                  Trust & Verification
                </Link>
              </div>
            </div>
          }
          right={
            <div className="w-[340px] rounded-3xl border border-[rgba(255,255,255,.08)] bg-[rgba(255,255,255,.03)] p-6 shadow-[0_1px_0_rgba(255,255,255,.04)_inset]">
              <div className="flex items-center justify-between">
                <div className="text-[11px] tracking-[0.22em] uppercase text-[rgba(255,255,255,.70)]">
                  Institutional Posture
                </div>
                <Chip>Proof Primitives</Chip>
              </div>

              <div className="mt-4 space-y-1">
                <Row k="This site" v="Institutional boundary · language · trust primitives" />
                <Row k="Execution" v="Occurs through internal OS lanes and the Authority Portal" />
                <Row k="Proof" v="Hash · Registry · Public render · Certificate receipt" />
                <Row k="Policy" v="Signed is not archived. Archive is a lifecycle state." />
              </div>

              <div className="mt-5 rounded-2xl border border-[rgba(255,255,255,.08)] bg-[rgba(255,255,255,.03)] p-4">
                <div className="text-[10px] tracking-[0.22em] uppercase text-[rgba(255,214,128,.75)]">
                  Authority Gateway
                </div>
                <div className="mt-2 text-sm leading-relaxed text-[rgba(255,255,255,.68)]">
                  Signing, verification, and certificates live behind the public portal. This site remains calm,
                  descriptive, and non-executing by design.
                </div>
              </div>
            </div>
          }
        >
          {/* Meta strip */}
          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
            <Stat label="Mode" value="Institutional · readable · verifiable" />
            <Stat label="Jurisdiction" value="Ontario, Canada" />
            <Stat label="Principle" value="Evidence over claims" />
          </div>

          {/* Capability cards */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
            <Card
              title="Verification"
              tag="Public"
              desc='Public verify + certificate flows designed to feel official — not “crypto”.'
            />
            <Card
              title="Auditability"
              tag="System of Record"
              desc="Deterministic archives, hashes, and evidence pointers — no ambiguity."
            />
            <Card
              title="Execution"
              tag="Governance"
              desc="Draft → Council → Signature → Archive, with clean lifecycle states."
            />
            <Card
              title="Gateway"
              tag="Access"
              desc="Sign, verify, certificates, and onboarding — one public door."
            />
          </div>

          {/* Lifecycle + proof */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-[rgba(255,255,255,.08)] bg-[rgba(255,255,255,.03)] p-7 shadow-[0_1px_0_rgba(255,255,255,.04)_inset]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] tracking-[0.22em] uppercase text-[rgba(255,214,128,.78)]">
                    Lifecycle
                  </div>
                  <div className="mt-2 text-lg font-medium text-[rgba(255,255,255,.92)]">
                    Drafted with discipline. Archived with proof.
                  </div>
                </div>
                <Chip tone="muted">OS lanes</Chip>
              </div>

              <div className="mt-6 rounded-2xl border border-[rgba(255,255,255,.08)] bg-[rgba(0,0,0,.20)] p-5">
                <div className="text-sm text-[rgba(255,255,255,.78)] leading-relaxed">
                  <span className="text-[rgba(255,214,128,.85)]">Draft</span> →{" "}
                  <span className="text-[rgba(255,214,128,.85)]">Council</span> →{" "}
                  <span className="text-[rgba(255,214,128,.85)]">Signature</span> (when required) →{" "}
                  <span className="text-[rgba(255,214,128,.85)]">Archive</span> →{" "}
                  <span className="text-[rgba(255,214,128,.85)]">Verified registry</span>
                </div>

                <div className="mt-4 text-sm text-[rgba(255,255,255,.66)] leading-relaxed">
                  Approval is authority. Execution is controlled. Archive is a state — not a button.
                </div>
              </div>

              <div className="mt-5 text-sm text-[rgba(255,255,255,.66)] leading-relaxed">
                AXIOM runs as side-car intelligence. Uploads remain pristine. Only at seal-time is an immutable snapshot
                embedded into the deterministic archive render.
              </div>
            </div>

            <div className="rounded-3xl border border-[rgba(255,255,255,.08)] bg-[rgba(255,255,255,.03)] p-7 shadow-[0_1px_0_rgba(255,255,255,.04)_inset]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] tracking-[0.22em] uppercase text-[rgba(255,214,128,.78)]">
                    Verifiability
                  </div>
                  <div className="mt-2 text-lg font-medium text-[rgba(255,255,255,.92)]">
                    Proof over claims.
                  </div>
                </div>
                <Chip>Registry</Chip>
              </div>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-[rgba(255,255,255,.08)] bg-[rgba(0,0,0,.20)] p-5">
                  <div className="text-[11px] tracking-[0.22em] uppercase text-[rgba(255,255,255,.70)]">
                    What verification returns
                  </div>
                  <div className="mt-3 text-sm text-[rgba(255,255,255,.70)] leading-relaxed">
                    A resolved registry record + the authoritative public render pointer (minute-book view), plus the
                    certificate receipt path when available.
                  </div>
                </div>

                <div className="rounded-2xl border border-[rgba(255,255,255,.08)] bg-[rgba(0,0,0,.20)] p-5">
                  <div className="text-[11px] tracking-[0.22em] uppercase text-[rgba(255,255,255,.70)]">
                    Proof primitives
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-[rgba(255,255,255,.70)]">
                    <li>
                      <span className="text-[rgba(255,214,128,.85)]">Hash</span> — deterministic, record-bound
                    </li>
                    <li>
                      <span className="text-[rgba(255,214,128,.85)]">Registry</span> — verified_documents + minute_book
                    </li>
                    <li>
                      <span className="text-[rgba(255,214,128,.85)]">Render</span> — public pointer, private storage
                    </li>
                    <li>
                      <span className="text-[rgba(255,214,128,.85)]">Receipt</span> — certificate view for retention
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Gateway CTA band */}
          <div className="mt-10 rounded-3xl border border-[rgba(255,255,255,.08)] bg-[rgba(255,255,255,.03)] p-8 shadow-[0_1px_0_rgba(255,255,255,.04)_inset]">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-[rgba(255,214,128,.78)]">
                  Authority Gateway
                </div>
                <div className="mt-2 text-2xl font-medium tracking-wide text-[rgba(255,255,255,.92)]">
                  One door. Deliberate access.
                </div>
                <div className="mt-3 max-w-2xl text-sm leading-relaxed text-[rgba(255,255,255,.66)]">
                  A public launchpad for external clients and stakeholders. Verification and certificate access remain
                  simple. Organization onboarding remains deliberate. No noise.
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={GATEWAY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-[rgba(255,214,128,.25)] bg-[rgba(255,214,128,.10)] px-5 py-3 text-[11px] tracking-[0.18em] uppercase text-[rgba(255,214,128,.92)] hover:bg-[rgba(255,214,128,.14)] transition shadow-[0_0_0_1px_rgba(255,214,128,.08)_inset]"
                >
                  Open Gateway <span className="ml-2 opacity-80">↗</span>
                </a>

                <Link
                  href="/trust"
                  className="inline-flex items-center justify-center rounded-xl border border-[rgba(255,255,255,.10)] bg-[rgba(255,255,255,.03)] px-5 py-3 text-[11px] tracking-[0.18em] uppercase text-[rgba(255,255,255,.78)] hover:bg-[rgba(255,255,255,.05)] transition"
                >
                  Trust and Discipline
                </Link>
              </div>
            </div>
          </div>

          {/* Microline */}
          <div className="mt-12 text-center text-[11px] tracking-[0.22em] uppercase text-[rgba(255,255,255,.40)]">
            Oasis International Holdings Inc — institutional stewardship of governance infrastructure.
          </div>
        </Panel>
      </div>
    </main>
  );
}
