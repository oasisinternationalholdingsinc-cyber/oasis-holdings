import InstitutionalFrame from '@/components/InstitutionalFrame';

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

          {badge && (
            <div className='rounded-full border border-[rgba(255,214,128,.22)] bg-[rgba(255,214,128,.06)] px-3 py-1 text-[10px] tracking-wideplus text-[rgba(255,214,128,.9)]'>
              {badge.toUpperCase()}
            </div>
          )}
        </div>

        <div className='mt-4 text-sm text-white/60 leading-relaxed'>{body}</div>
      </div>
    </div>
  );
}

function AuthorityButton({
  href,
  label,
  primary,
}: {
  href: string;
  label: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className={[
        'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-[10px] tracking-wideplus transition',
        primary
          ? 'border border-[rgba(255,214,128,.28)] bg-[rgba(255,214,128,.10)] text-[rgba(255,214,128,.95)] hover:bg-[rgba(255,214,128,.14)]'
          : 'border border-white/10 bg-white/[0.02] text-white/70 hover:bg-white/[0.04] hover:text-white/85',
      ].join(' ')}
    >
      {label.toUpperCase()} <span className='ml-2 text-white/45'>↗</span>
    </a>
  );
}

export default function Trust() {
  const items = [
    {
      t: 'Certificate Resolution',
      d: 'Resolve records by hash, envelope ID, or ledger ID. Proof is returned as structured data and public pointers — not opinion.',
      b: 'Public',
    },
    {
      t: 'Deterministic Archive',
      d: 'Artifacts are rendered deterministically before hashing. The verified registry always points to the authoritative object.',
      b: 'Archive-grade',
    },
    {
      t: 'Immutability Discipline',
      d: 'Once sealed, records are immutable. Repairs are idempotent — reconciling pointers without duplicating artifacts.',
      b: 'Policy',
    },
    {
      t: 'Chain of Custody',
      d: 'Storage paths, timestamps, registry entries, and signature envelopes form an auditable custody trail.',
      b: 'Audit',
    },
    {
      t: 'Public Boundary',
      d: 'This site is an institutional boundary. Governance execution occurs through the Authority Gateway and internal OS lanes.',
      b: 'Separation',
    },
    {
      t: 'AXIOM Sidecar',
      d: 'Intelligence runs as a read-only sidecar on evidence. Only at seal time is a snapshot embedded into the archive render.',
      b: 'Non-blocking',
    },
  ];

  return (
    <InstitutionalFrame active='/trust'>
      {/* HERO */}
      <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-12'>
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,214,128,.12),transparent_62%)] blur-2xl' />
        </div>

        <div className='relative'>
          <div className='text-[11px] tracking-widemax text-white/65'>TRUST LANE</div>
          <h1 className='mt-4 text-3xl tracking-wideplus'>TRUST & VERIFICATION</h1>

          <p className='mt-6 max-w-3xl text-white/65 leading-relaxed'>
            Trust is established through verifiable mechanisms: deterministic archive renders,
            cryptographic hashes, signed envelopes, and resolvable certificates.
            Oasis does not ask for trust — it provides proof.
          </p>

          {/* AUTHORITY ACTIONS */}
          <div className='mt-10 flex flex-wrap gap-4'>
            <AuthorityButton
              href='https://sign.oasisintlholdings.com/verify.html'
              label='Verify a record'
              primary
            />
            <AuthorityButton
              href='https://sign.oasisintlholdings.com/certificate.html'
              label='View certificate'
            />
          </div>
        </div>
      </div>

      {/* PANELS */}
      <div className='mt-10 grid gap-4 md:grid-cols-2'>
        {items.map((i) => (
          <Panel key={i.t} title={i.t} body={i.d} badge={i.b} />
        ))}
      </div>

      {/* FOOTNOTE */}
      <div className='mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-8'>
        <div className='text-[11px] tracking-widemax text-white/70'>OPERATOR NOTE</div>
        <p className='mt-3 text-sm text-white/60 leading-relaxed'>
          Verification and certificate flows are intentionally isolated on the Sign domain.
          This preserves stability, shareability, and institutional clarity.
          The Authority Gateway acts only as an airlock — never as a proof surface.
        </p>
      </div>
    </InstitutionalFrame>
  );
}
