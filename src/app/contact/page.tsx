import InstitutionalFrame from '@/components/InstitutionalFrame';

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className='flex items-start justify-between gap-6 border-t border-white/10 py-4 first:border-t-0 first:pt-0 last:pb-0'>
      <div className='text-[11px] tracking-widemax text-white/70'>
        {k.toUpperCase()}
      </div>
      <div className='text-sm text-white/60 text-right leading-relaxed'>
        {v}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <InstitutionalFrame active='/contact'>
      {/* Shield watermark */}
      <div className='pointer-events-none absolute inset-0 flex justify-center'>
        <svg
          className='mt-24 h-[520px] w-[520px] opacity-[0.035]'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M12 2L20 5V11C20 15.4183 16.4183 18.9999 12 22C7.5817 18.9999 4 15.4183 4 11V5L12 2Z'
            stroke='rgba(255,214,128,0.9)'
            strokeWidth='1.2'
            fill='rgba(255,214,128,0.08)'
          />
        </svg>
      </div>

      <div className='relative'>
        <div className='flex items-start justify-between gap-8'>
          <div>
            <h1 className='text-3xl tracking-wideplus'>CONTACT</h1>
            <p className='mt-6 max-w-2xl text-white/65 leading-relaxed'>
              Institutional inquiries only. This platform is not a marketing channel.
              If you are looking for signing, verification, or certificate resolution,
              use the Authority Gateway.
            </p>
          </div>

          <div className='hidden md:block rounded-2xl border border-[rgba(255,214,128,.18)] bg-[rgba(255,214,128,.05)] px-4 py-3'>
            <div className='text-[10px] tracking-wideplus text-[rgba(255,214,128,.9)]'>
              RESPONSE STANDARD
            </div>
            <div className='mt-1 text-[11px] text-white/55'>
              Clear scope • Documented requests • Verifiable outcomes
            </div>
          </div>
        </div>

        <div className='mt-10 grid gap-4 md:grid-cols-2'>
          <div className='rounded-3xl border border-white/10 bg-white/[0.02] p-8'>
            <div className='text-[11px] tracking-widemax text-[rgba(255,214,128,.92)]'>
              CHANNELS
            </div>
            <div className='mt-6'>
              <Row k='Email' v='contact@oasisintlholdings.com' />
              <Row k='Location' v='Windsor, Ontario — Canada' />
              <Row
                k='Scope'
                v='Governance infrastructure • Verification systems • Institutional onboarding'
              />
            </div>
          </div>

          <div className='rounded-3xl border border-white/10 bg-white/[0.02] p-8'>
            <div className='text-[11px] tracking-widemax text-[rgba(255,214,128,.92)]'>
              INTAKE
            </div>
            <p className='mt-4 text-sm text-white/60 leading-relaxed'>
              Include your organization name, jurisdiction, and intent
              (sign / verify / onboard). If referencing a record, provide a
              hash, envelope ID, or ledger ID so the request is resolvable.
            </p>

            <div className='mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5'>
              <div className='text-[10px] tracking-wideplus text-white/65'>
                MINIMUM FIELDS
              </div>
              <ul className='mt-3 space-y-2 text-sm text-white/55'>
                <li>• Organization + jurisdiction</li>
                <li>• Request type (sign / verify / certificate / onboarding)</li>
                <li>• Reference (hash / envelope_id / ledger_id), if available</li>
                <li>• Any deadline constraints</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-8'>
          <div className='text-[11px] tracking-widemax text-white/70'>
            NOTE
          </div>
          <div className='mt-3 text-sm text-white/60 leading-relaxed'>
            Oasis operates with a public boundary. This site describes institutional
            posture and vocabulary. Execution and verification occur through the Portal.
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
}
