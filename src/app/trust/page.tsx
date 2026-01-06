// src/app/trust/page.tsx
import InstitutionalFrame from '@/components/InstitutionalFrame';
import Link from 'next/link';

function Panel({
  title,
  body,
  badge,
}: {
  title: string;
  body: string;
  badge?: string;
}) {
  return (
    <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8'>
      <div className='pointer-events-none absolute inset-0 opacity-[0.55]'>
        <div className='absolute -top-24 left-10 h-56 w-56 rounded-full bg-[rgba(255,214,128,.10)] blur-3xl' />
        <div className='absolute -bottom-24 right-8 h-56 w-56 rounded-full bg-white/[0.06] blur-3xl' />
      </div>

      <div className='relative'>
        <div className='flex items-start justify-between gap-6'>
          <div className='text-[11px] tracking-widemax text-[rgba(255,214,128,.92)]'>
            {title.toUpperCase()}
          </div>

          {badge ? (
            <div className='rounded-full border border-[rgba(255,214,128,.22)] bg-[rgba(255,214,128,.06)] px-3 py-1 text-[10px] tracking-wideplus text-[rgba(255,214,128,.9)]'>
              {badge.toUpperCase()}
            </div>
          ) : null}
        </div>

        <div className='mt-4 text-sm text-white/60 leading-relaxed'>{body}</div>
      </div>
    </div>
  );
}

function PrimaryButton({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const cls =
    'inline-flex items-center justify-center rounded-2xl border border-[rgba(255,214,128,.26)] bg-[rgba(255,214,128,.08)] px-5 py-3 text-[10px] tracking-wideplus text-[rgba(255,214,128,.92)] hover:bg-[rgba(255,214,128,.12)] transition';
  if (external) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noreferrer'
        className={cls}
      >
        {label.toUpperCase()} <span className='ml-2 text-white/45'>↗</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {label.toUpperCase()}
    </Link>
  );
}

function GhostButton({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const cls =
    'inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-3 text-[10px] tracking-wideplus text-white/70 hover:bg-white/[0.04] hover:text-white/85 transition';
  if (external) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noreferrer'
        className={cls}
      >
        {label.toUpperCase()} <span className='ml-2 text-white/45'>↗</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {label.toUpperCase()}
    </Link>
  );
}

export default function Trust() {
  const items: Array<{ t: string; d: string; b?: string }> = [
    {
      t: 'Certificate Resolution',
      d:
        'Resolve by hash, envelope ID, or ledger ID. Proof is returned as structured data and public pointers — not opinion.',
      b: 'Public',
    },
    {
      t: 'Deterministic Archive',
      d:
        'Sealed artifacts are rendered deterministically before hashing. The verified registry points to the authoritative object.',
      b: 'Archive-grade',
    },
    {
      t: 'Immutability Discipline',
      d:
        'Once sealed, a record is treated as immutable. Repair is idempotent: it reconciles pointers without duplicating artifacts.',
      b: 'Policy',
    },
    {
      t: 'Chain of Custody',
      d:
        'Storage paths, timestamps, registry entries, and signature envelopes form an auditable custody trail.',
      b: 'Audit',
    },
    {
      t: 'Public Boundary',
      d:
        'This site is an institutional boundary. Governance execution happens through the Authority Gateway and internal OS lanes.',
      b: 'Separation',
    },
    {
      t: 'AXIOM Sidecar',
      d:
        'Intelligence runs as a read-only sidecar on evidence. Only at seal time is a snapshot embedded into the archive render.',
      b: 'Non-blocking',
    },
  ];

  return (
    <InstitutionalFrame active='/trust'>
      <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-10'>
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,214,128,.10),transparent_62%)] blur-2xl' />
          <div className='absolute -bottom-40 left-10 h-72 w-72 rounded-full bg-white/[0.06] blur-3xl' />
        </div>

        <div className='relative flex items-start justify-between gap-10'>
          <div>
            <div className='text-[11px] tracking-widemax text-white/70'>TRUST LANE</div>
            <h1 className='mt-4 text-3xl tracking-wideplus'>TRUST & VERIFICATION</h1>
            <p className='mt-6 max-w-3xl text-white/65 leading-relaxed'>
              Trust is established through verifiable mechanisms: deterministic archive renders,
              cryptographic hashes, signed envelopes, and resolvable certificates. Oasis does not
              ask for trust — it provides proof.
            </p>

            <div className='mt-8 flex flex-wrap gap-3'>
              {/* Canonical public proof surfaces */}
              <PrimaryButton
                href='https://sign.oasisintlholdings.com/verify.html'
                label='Verify a record'
                external
              />
              <GhostButton
                href='https://sign.oasisintlholdings.com/certificate.html'
                label='View certificate'
                external
              />
            </div>
          </div>

          <div className='hidden lg:block'>
            <div className='rounded-3xl border border-[rgba(255,214,128,.18)] bg-[rgba(255,214,128,.05)] p-6'>
              <div className='text-[10px] tracking-wideplus text-[rgba(255,214,128,.9)]'>
                VERIFICATION PRIMITIVES
              </div>
              <div className='mt-2 text-[11px] text-white/55'>
                Hash • Verified Registry • Public Render • Certificate Receipt
              </div>

              <div className='mt-5 h-px w-full bg-[rgba(255,214,128,.16)]' />

              <div className='mt-5 text-[10px] tracking-wideplus text-white/60'>
                OPERATING RULE
              </div>
              <div className='mt-2 text-[11px] text-white/55 leading-relaxed'>
                Signed ≠ archived. Archive is a separate lifecycle state. The verified registry is the
                system of record for public proof.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10 grid gap-4 md:grid-cols-2'>
        {items.map((x) => (
          <Panel key={x.t} title={x.t} body={x.d} badge={x.b} />
        ))}
      </div>

      <div className='mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-8'>
        <div className='flex items-start justify-between gap-8'>
          <div>
            <div className='text-[11px] tracking-widemax text-white/70'>OPERATOR NOTE</div>
            <div className='mt-3 text-sm text-white/60 leading-relaxed'>
              The Authority Gateway is the airlock. Verification and certificate flows remain isolated
              on the Sign domain to preserve stability, shareability, and institutional clarity.
            </div>
          </div>

          <div className='hidden md:block rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3'>
            <div className='text-[10px] tracking-wideplus text-white/65'>CANONICAL ENDPOINTS</div>
            <div className='mt-2 space-y-1 text-[11px] text-white/55'>
              <div>• sign.oasisintlholdings.com/verify.html</div>
              <div>• sign.oasisintlholdings.com/certificate.html</div>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
}
