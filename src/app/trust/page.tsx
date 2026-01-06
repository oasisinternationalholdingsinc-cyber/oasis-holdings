import InstitutionalFrame from '@/components/InstitutionalFrame';
import Link from 'next/link';

function Emblem() {
  return (
    <svg
      aria-hidden
      viewBox='0 0 600 600'
      className='pointer-events-none absolute left-1/2 top-6 -z-10 h-[520px] w-[520px] -translate-x-1/2 opacity-[0.18] blur-[0.35px]'
    >
      <defs>
        <radialGradient id='tg' cx='50%' cy='35%' r='70%'>
          <stop offset='0%' stopColor='rgba(255,214,128,.18)' />
          <stop offset='55%' stopColor='rgba(255,214,128,.07)' />
          <stop offset='100%' stopColor='rgba(255,214,128,0)' />
        </radialGradient>
      </defs>

      <circle cx='300' cy='300' r='210' fill='url(#tg)' />
      <circle
        cx='300'
        cy='300'
        r='208'
        fill='none'
        stroke='rgba(255,214,128,.22)'
        strokeWidth='1.2'
      />
      <circle
        cx='300'
        cy='300'
        r='178'
        fill='none'
        stroke='rgba(255,214,128,.16)'
        strokeWidth='1'
        strokeDasharray='2 6'
      />
      <circle
        cx='300'
        cy='300'
        r='128'
        fill='none'
        stroke='rgba(255,214,128,.10)'
        strokeWidth='1'
      />
      {[
        [300, 70, 300, 98],
        [300, 502, 300, 530],
        [70, 300, 98, 300],
        [502, 300, 530, 300],
      ].map((d, i) => (
        <line
          key={i}
          x1={d[0]}
          y1={d[1]}
          x2={d[2]}
          y2={d[3]}
          stroke='rgba(255,214,128,.22)'
          strokeWidth='1'
        />
      ))}
      <path
        d='M210 335c18-78 64-125 90-125s72 47 90 125'
        fill='none'
        stroke='rgba(255,214,128,.18)'
        strokeWidth='1.4'
      />
      <path
        d='M230 360h140'
        fill='none'
        stroke='rgba(255,214,128,.12)'
        strokeWidth='1'
      />
    </svg>
  );
}

function GoldChip({ text }: { text: string }) {
  return (
    <div className='inline-flex items-center gap-2 rounded-full border border-[rgba(255,214,128,.22)] bg-[rgba(255,214,128,.06)] px-3 py-1'>
      <span aria-hidden className='h-2 w-2 rounded-full bg-[rgba(255,214,128,.85)]' />
      <span className='text-[9px] tracking-widemax text-[rgba(255,214,128,.92)]'>
        {text.toUpperCase()}
      </span>
    </div>
  );
}

function Panel({
  title,
  tag,
  body,
}: {
  title: string;
  tag: string;
  body: string;
}) {
  return (
    <div className='rounded-3xl border border-white/10 bg-white/[0.02] p-7'>
      <div className='flex items-center justify-between gap-4'>
        <div className='text-sm tracking-wideplus text-white/85'>{title}</div>
        <GoldChip text={tag} />
      </div>
      <p className='mt-4 text-sm text-white/60 leading-relaxed'>{body}</p>
    </div>
  );
}

function EvidenceRow({ k, v }: { k: string; v: string }) {
  return (
    <div className='flex items-start justify-between gap-6 border-t border-white/10 py-4 first:border-t-0 first:pt-0 last:pb-0'>
      <div className='text-[11px] tracking-widemax text-white/70'>{k.toUpperCase()}</div>
      <div className='text-sm text-white/60 text-right leading-relaxed'>{v}</div>
    </div>
  );
}

export default function Trust() {
  return (
    <InstitutionalFrame active='/trust'>
      <section className='relative'>
        <Emblem />

        <div className='flex flex-wrap items-center justify-between gap-3'>
          <div className='inline-flex items-center gap-2 rounded-full border border-[rgba(255,214,128,.20)] bg-[rgba(255,214,128,.06)] px-4 py-1.5 text-[10px] tracking-widemax text-[rgba(255,214,128,.92)]'>
            TRUST & VERIFICATION · EVIDENCE OVER CLAIMS
          </div>

          <div className='hidden md:block'>
            <GoldChip text='VERIFICATION PRIMITIVES' />
          </div>
        </div>

        <h1 className='mt-7 text-3xl md:text-4xl tracking-wideplus'>Trust & Verification</h1>

        <p className='mt-6 max-w-3xl text-white/65 leading-relaxed'>
          Trust is established through verifiable mechanisms: deterministic archive renders,
          cryptographic hashes, signed envelopes, and resolvable certificates. Oasis does not ask
          for trust — it provides proof.
        </p>

        <div className='mt-10 flex flex-wrap gap-3'>
          <a
            href='https://portal.oasisintlholdings.com'
            target='_blank'
            rel='noreferrer'
            className='rounded-xl border border-[rgba(255,214,128,.35)] bg-[rgba(255,214,128,.10)] px-5 py-3 text-[11px] tracking-wideplus text-[rgba(255,214,128,.95)] hover:bg-[rgba(255,214,128,.16)]'
          >
            OPEN AUTHORITY GATEWAY →
          </a>

          <Link
            href='/digital-parliament'
            className='rounded-xl border border-white/15 bg-white/[0.02] px-5 py-3 text-[11px] tracking-wideplus text-white/70 hover:bg-white/[0.04]'
          >
            DIGITAL PARLIAMENT LEDGER
          </Link>

          <Link
            href='/authority'
            className='rounded-xl border border-white/15 bg-white/[0.02] px-5 py-3 text-[11px] tracking-wideplus text-white/70 hover:bg-white/[0.04]'
          >
            PUBLIC BOUNDARY
          </Link>
        </div>
      </section>

      <section className='mt-14 grid gap-4 md:grid-cols-2'>
        <Panel
          title='Certificate Resolution'
          tag='Proof'
          body='Resolve by hash, envelope id, or ledger id. Proof returns as structured data and public pointers — not opinion.'
        />
        <Panel
          title='Deterministic Archive'
          tag='Archive'
          body='Sealed artifacts are rendered deterministically before hashing. The verified registry points to the authoritative object.'
        />
        <Panel
          title='Immutability Discipline'
          tag='Policy'
          body='Once sealed, a record is treated as immutable. Repair is idempotent: reconcile pointers without duplicating artifacts.'
        />
        <Panel
          title='Chain of Custody'
          tag='Custody'
          body='Storage paths, timestamps, registry entries, and signature envelopes form an auditable custody trail.'
        />
        <Panel
          title='Public Boundary'
          tag='Boundary'
          body='This site is institutional posture. Governance execution occurs through the Authority Portal and internal OS lanes.'
        />
        <Panel
          title='AXIOM Sidecar'
          tag='AXIOM'
          body='Intelligence runs as a read-only sidecar on evidence. Only at seal time is a snapshot embedded into the archive render.'
        />
      </section>

      <section className='mt-16 grid gap-4 md:grid-cols-2'>
        <div className='rounded-3xl border border-white/10 bg-white/[0.02] p-8'>
          <div className='flex items-center justify-between gap-4'>
            <div className='text-[11px] tracking-widemax text-[rgba(255,214,128,.92)]'>
              WHAT “VERIFIED” MEANS
            </div>
            <GoldChip text='System of record' />
          </div>

          <div className='mt-6'>
            <EvidenceRow k='Hash' v='Deterministic fingerprint of the archived artifact.' />
            <EvidenceRow k='Registry' v='Verified document row binds proof to storage pointers.' />
            <EvidenceRow k='Envelope' v='Signature context when execution is signature-required.' />
            <EvidenceRow k='Public Render' v='A controlled public pointer for reading/retention.' />
            <EvidenceRow k='Receipt' v='Certificate view designed for official retention.' />
          </div>
        </div>

        <div className='rounded-3xl border border-white/10 bg-white/[0.02] p-8'>
          <div className='flex items-center justify-between gap-4'>
            <div className='text-[11px] tracking-widemax text-[rgba(255,214,128,.92)]'>
              OPERATOR NOTE
            </div>
            <GoldChip text='Lifecycle' />
          </div>

          <p className='mt-5 text-sm text-white/60 leading-relaxed'>
            Production policy: <span className='text-white/75'>signed is not archived</span>. Archive is a
            distinct lifecycle state. The verified registry is the system of record for public proof.
          </p>

          <div className='mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6'>
            <div className='text-[10px] tracking-wideplus text-white/65'>GUIDING PRINCIPLE</div>
            <div className='mt-3 text-sm text-white/60 leading-relaxed'>
              Evidence over claims. The institution remains calm because the proof resolves.
            </div>
          </div>

          <div className='mt-6 flex flex-wrap gap-3'>
            <a
              href='https://portal.oasisintlholdings.com/verify'
              target='_blank'
              rel='noreferrer'
              className='rounded-xl border border-[rgba(255,214,128,.28)] bg-[rgba(255,214,128,.08)] px-4 py-3 text-[10px] tracking-wideplus text-[rgba(255,214,128,.92)] hover:bg-[rgba(255,214,128,.14)]'
            >
              VERIFY →
            </a>
            <a
              href='https://portal.oasisintlholdings.com/certificate'
              target='_blank'
              rel='noreferrer'
              className='rounded-xl border border-white/15 bg-white/[0.02] px-4 py-3 text-[10px] tracking-wideplus text-white/65 hover:bg-white/[0.04]'
            >
              CERTIFICATE →
            </a>
          </div>
        </div>
      </section>

      <section className='mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-8'>
        <div className='text-[11px] tracking-widemax text-white/70'>PUBLIC NOTE</div>
        <p className='mt-3 text-sm text-white/60 leading-relaxed'>
          This site describes institutional posture. Verification and certificate resolution occur through the
          Authority Gateway. Internal execution lanes remain controlled and authority-scoped.
        </p>
      </section>
    </InstitutionalFrame>
  );
}
