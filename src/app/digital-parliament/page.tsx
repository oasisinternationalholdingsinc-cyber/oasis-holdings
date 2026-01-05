import InstitutionalFrame from "@/components/InstitutionalFrame";
import Link from "next/link";

/* ---------- AXIOM STATE (production-safe) ---------- */
/*
  In production this can later be wired to a real signal.
  For now it is explicit, visible, and intentional.
*/
const AXIOM_STATE: "green" | "amber" | "red" = "green";

const AXIOM_LABEL = {
  green: "STABLE · VERIFIED",
  amber: "ADVISORY · REVIEW",
  red: "ATTENTION · RISK",
}[AXIOM_STATE];

const AXIOM_COLOR = {
  green: "bg-emerald-400",
  amber: "bg-amber-400",
  red: "bg-red-400",
}[AXIOM_STATE];

/* ---------- COMPONENTS ---------- */

function AxiomLight() {
  return (
    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-20 ${AXIOM_COLOR}`}
        />
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${AXIOM_COLOR}`} />
      </span>
      <span className="text-[10px] tracking-wideplus text-white/70">
        AXIOM — {AXIOM_LABEL}
      </span>
    </div>
  );
}

function Capability({
  title,
  body,
  tag,
}: {
  title: string;
  body: string;
  tag: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
      <div className="flex items-center justify-between">
        <div className="text-sm tracking-wideplus text-white/90">{title}</div>
        <div className="text-[10px] tracking-wideplus text-white/45">
          {tag.toUpperCase()}
        </div>
      </div>
      <p className="mt-4 text-sm text-white/60 leading-relaxed">{body}</p>
    </div>
  );
}

/* ---------- PAGE ---------- */

export default function DigitalParliament() {
  return (
    <InstitutionalFrame active="/digital-parliament" surface="none">
      {/* HERO */}
      <section className="relative pt-10">
        {/* Gold emblem (contained, absolute, respectful) */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
          <svg
            width="520"
            height="520"
            viewBox="0 0 520 520"
            className="opacity-[0.08]"
          >
            <defs>
              <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,214,128,0.6)" />
                <stop offset="100%" stopColor="rgba(255,214,128,0)" />
              </radialGradient>
            </defs>
            <circle cx="260" cy="260" r="220" fill="url(#goldGlow)" />
            <circle
              cx="260"
              cy="260"
              r="180"
              fill="none"
              stroke="rgba(255,214,128,.25)"
              strokeWidth="1"
            />
            <circle
              cx="260"
              cy="260"
              r="140"
              fill="none"
              stroke="rgba(255,214,128,.18)"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Title + status */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-4">
              {/* Ledger tick — subtle, authoritative */}
              <div className="h-2 w-2 rounded-full bg-[rgba(255,214,128,.9)] animate-pulse" />
              <span className="text-[10px] tracking-wideplus text-white/55">
                LEDGER ACTIVE
              </span>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl tracking-wideplus">
              Digital Parliament Ledger
            </h1>

            <p className="mt-6 max-w-3xl text-white/65 leading-relaxed">
              A deterministic governance system where drafting, authority review,
              execution, signature, archival, and verification resolve into a
              single auditable lifecycle. Evidence over claims. Structure over noise.
            </p>
          </div>

          <AxiomLight />
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/trust"
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[10px] tracking-wideplus text-white/75 hover:bg-white/[0.05]"
          >
            TRUST & VERIFICATION
          </Link>

          <Link
            href="/authority"
            className="rounded-xl border border-[rgba(255,214,128,.25)] bg-[rgba(255,214,128,.08)] px-4 py-3 text-[10px] tracking-wideplus text-[rgba(255,214,128,.95)] hover:bg-[rgba(255,214,128,.12)]"
          >
            PUBLIC AUTHORITY GATEWAY
          </Link>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mt-20 grid gap-6 md:grid-cols-2">
        <Capability
          title="Draft → Council → Execution"
          tag="Lifecycle"
          body="Governance records progress through explicit lifecycle states with authority-gated transitions and auditable decisions."
        />
        <Capability
          title="Signature Discipline"
          tag="Authority"
          body="Envelope-based signatures with jurisdictional clarity. Signed does not imply archived — execution is deliberate."
        />
        <Capability
          title="Deterministic Archive"
          tag="Evidence"
          body="Archive artifacts are rendered deterministically before hashing, producing verifiable public objects."
        />
        <Capability
          title="Verified Registry"
          tag="Public Proof"
          body="Verification resolves by hash, envelope ID, or ledger ID — returning structured proof, not opinion."
        />
      </section>

      {/* AXIOM SECTION */}
      <section className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-10">
        <div className="text-[11px] tracking-widemax text-[rgba(255,214,128,.92)]">
          AXIOM INTELLIGENCE LAYER
        </div>
        <p className="mt-4 max-w-3xl text-sm text-white/60 leading-relaxed">
          AXIOM operates as a read-only intelligence sidecar. It analyzes drafts,
          approvals, and evidence without mutating records. Only at archive seal
          time is a cryptographically bound snapshot embedded into the final artifact.
        </p>
      </section>

      {/* FOOTNOTE */}
      <section className="mt-20 border-t border-white/10 pt-10">
        <p className="max-w-3xl text-[11px] tracking-wideplus text-white/45 leading-relaxed">
          The Digital Parliament Ledger is not a document store. It is a governance
          instrument. Authority is structural. Truth is verifiable.
        </p>
      </section>
    </InstitutionalFrame>
  );
}
