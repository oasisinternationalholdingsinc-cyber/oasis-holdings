import InstitutionalFrame from '@/components/InstitutionalFrame';

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className='flex items-start justify-between gap-6 border-t border-white/10 py-4 first:border-t-0 first:pt-0 last:pb-0'>
      <div className='text-[11px] tracking-widemax text-white/70'>{k.toUpperCase()}</div>
      <div className='text-sm text-white/60 text-right leading-relaxed'>{v}</div>
    </div>
  );
}

function Emblem() {
  return (
    <div className='pointer-events-none absolute inset-0 overflow-hidden rounded-3xl'>
      {/* soft gold halo */}
      <div className='absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,214,128,.12),transparent_60%)] blur-[2px]' />
      {/* emblem mark */}
      <svg
        className='absolute -top-10 left-1/2 h-[260px] w-[260px] -translate-x-1/2 opacity-[0.10]'
        viewBox='0 0 200 200'
        fill='none'
        aria-hidden='true'
      >
        <circle cx='100' cy='100' r='72' stroke='rgba(255,214,128,.95)' strokeWidth='2' />
        <circle cx='100' cy='100' r='54' stroke='rgba(255,214,128,.65)' strokeWidth='1.5' />
        <path
          d='M100 34 L114 68 L150 68 L121 90 L132 126 L100 105 L68 126 L79 90 L50 68 L86 68 Z'
          stroke='rgba(255,214,128,.9)'
          strokeWidth='1.5'
        />
        <path
          d='M40 120 C62 152, 138 152, 160 120'
          stroke='rgba(255,214,128,.55)'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      </svg>
    </div>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <div className='inline-flex items-center gap-2 rounded-full border border-[rgba(255,214,128,.20)] bg-[rgba(255,214,128,.06)] px-3 py-1.5'>
      <span className='h-1.5 w-1.5 rounded-full bg-[rgba(255,214,128,.9)]' />
      <span className='text-[10px] tracking-wideplus text-[rgba(255,214,128,.9)]'>
        {label.toUpperCase()}
      </span>
    </div>
  );
}

export default function Contact() {
  return (
    <InstitutionalFrame active='/contact'>
      <div className='relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10'>
        <Emblem />

        <div className='relative'>
          <div className='flex items-start justify-between gap-8'>
            <div>
              <div className='mb-4'>
                <Chip label='Institutional intake' />
              </div>

              <h1 className='text-3xl tracking-wideplus'>CONTACT</h1>

              <p className='mt-6 max-w-3xl text-white/65 leading-relaxed'>
                Institutional inquiries only. This is not a marketing channel. If your intent is
                <span className='text-white/80'> signing</span>,{' '}
                <span className='text-white/80'>verification</span>, or{' '}
                <span className='text-white/80'>certificate resolution</span>, use the Authority
                Gateway so your request is resolvable and auditable.
              </p>
            </div>

            <div className='hidden md:block rounded-2xl border border-[rgba(255,214,128,.18)] bg-[rgba(255,214,128,.05)] px-4 py-3'>
              <div className='text-[10px] tracking-wideplus text-[rgba(255,214,128,.9)]'>
                RESPONSE STANDARD
              </div>
              <div className='mt-1 text-[11px] text-white/55'>
                Scoped • Documented • Evidence-forward
              </div>
            </div>
          </div>

          <div className='mt-10 grid gap-4 md:grid-cols-2'>
            {/* Channels */}
            <div className='rounded-3xl border border-white/10 bg-white/[0.02] p-8'>
              <div className='flex items-center justify-between gap-4'>
                <div className='text-[11px] tracking-widemax text-[rgba(255,214,128,.92)]'>
                  CHANNELS
                </div>
                <div className='text-[10px] tracking-wideplus text-white/45'>
                  PUBLIC BOUNDARY
                </div>
              </div>

              <div className='mt-6'>
                <Row k='Email' v='contact@oasisintlholdings.com' />
                <Row k='Location' v='Windsor, Ontario — Canada' />
                <Row
                  k='Scope'
                  v='Governance infrastructure • Verification systems • Institutional onboarding'
                />
              </div>

              <div className='mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-5'>
                <div className='text-[10px] tracking-wideplus text-white/65'>SLA POSTURE</div>
                <div className='mt-2 text-sm text-white/55 leading-relaxed'>
                  We respond to complete, scoped requests. Unscoped requests may be redirected to
                  the Portal or returned for clarification.
                </div>
              </div>
            </div>

            {/* Intake */}
            <div className='rounded-3xl border border-white/10 bg-white/[0.02] p-8'>
              <div className='flex items-center justify-between gap-4'>
                <div className='text-[11px] tracking-widemax text-[rgba(255,214,128,.92)]'>
                  INTAKE DISCIPLINE
                </div>
                <div className='text-[10px] tracking-wideplus text-white/45'>
                  RESOLVABLE REQUESTS
                </div>
              </div>

              <p className='mt-4 text-sm text-white/60 leading-relaxed'>
                Include your organization name, jurisdiction, and intent (sign / verify / onboard).
                If referencing a record, provide a hash, envelope ID, or ledger ID so the request
                can be resolved as data.
              </p>

              <div className='mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5'>
                <div className='text-[10px] tracking-wideplus text-white/65'>MINIMUM FIELDS</div>
                <ul className='mt-3 space-y-2 text-sm text-white/55'>
                  <li>• Organization + jurisdiction</li>
                  <li>• Intent (sign / verify / certificate / onboarding)</li>
                  <li>• Reference (hash / envelope_id / ledger_id), if available</li>
                  <li>• Deadline constraints (if any)</li>
                </ul>
              </div>

              <div className='mt-6 rounded-2xl border border-[rgba(255,214,128,.14)] bg-[rgba(255,214,128,.05)] p-5'>
                <div className='text-[10px] tracking-wideplus text-[rgba(255,214,128,.9)]'>
                  GOVERNANCE NOTE
                </div>
                <div className='mt-2 text-sm text-white/55 leading-relaxed'>
                  Language used publicly (draft / council / execution / archive) is intentional:
                  it describes lifecycle states, not marketing claims. The system is built to
                  produce proof.
                </div>
              </div>
            </div>
          </div>

          <div className='mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-8'>
            <div className='flex items-center justify-between gap-6'>
              <div className='text-[11px] tracking-widemax text-white/70'>NOTE</div>
              <div className='text-[10px] tracking-wideplus text-white/45'>
                EXECUTION OCCURS IN THE PORTAL / OS
              </div>
            </div>
            <div className='mt-3 text-sm text-white/60 leading-relaxed'>
              Oasis operates with a public boundary. This site establishes institutional posture and
              vocabulary. Signing, verification, and certificate flows are handled through the
              Authority Gateway.
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
}
