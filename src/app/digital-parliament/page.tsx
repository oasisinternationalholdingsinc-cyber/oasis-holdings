import InstitutionalFrame from '@/components/InstitutionalFrame';
import Link from 'next/link';

function Emblem() {
  // Subtle, seal-like emblem. Not “logo”, not “crypto”. Just institutional signal.
  return (
    <svg
      aria-hidden
      viewBox='0 0 600 600'
      className='pointer-events-none absolute left-1/2 top-2 -z-10 h-[520px] w-[520px] -translate-x-1/2 opacity-[0.22] blur-[0.3px]'
    >
      <defs>
        <radialGradient id='g' cx='50%' cy='35%' r='70%'>
          <stop offset='0%' stopColor='rgba(255,214,128,.20)' />
          <stop offset='55%' stopColor='rgba(255,214,128,.08)' />
          <stop offset='100%' stopColor='rgba(255,214,128,0)' />
        </radialGradient>
      </defs>

      <circle cx='300' cy='300' r='210' fill='url(#g)' />
      <circle
        cx='300'
        cy='300'
        r='208'
        fill='none'
        stroke='rgba(255,214,128,.25)'
        strokeWidth='1.2'
      />
      <circle
        cx='300'
        cy='300'
        r='178'
        fill='none'
        stroke='rgba(255,214,128,.18)'
        strokeWidth='1'
        strokeDasharray='2 6'
      />
      <circle
        cx='300'
        cy='300'
        r='128'
        fill='none'
        stroke='rgba(255,214,128,.12)'
        strokeWidth='1'
      />

      {/* subtle cardinal ticks */}
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
          stroke='rgba(255,214,128,.25)'
          strokeWidth='1'
        />
      ))}

      {/* inner monogram geometry */}
      <path
        d='M210 335c18-78 64-125 90-125s72 47 90 125'
        fill='none'
        stroke='rgba(255,214,128,.20)'
        strokeWidth='1.4'
      />
      <path
        d='M230 360h140'
        fill='none'
        stroke='rgba(255,214,128,.14)'
        strokeWidth='1'
      />
    </svg>
  );
}

function AxiomStateLight({
  state,
}: {
  state: 'GREEN' | 'YELLOW' | 'RED';
}) {
  const map = {
    GREEN: { dot: '🟢', label: 'AXIOM: CLEAR' },
    YELLOW: { dot: '🟡', label: 'AXIOM: REVIEW' },
    RED: { dot: '🔴', label: 'AXIOM: ELEVATED' },
  } as const;

  const x = map[state];

  return (
    <div className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5'>
      <span className='text-[12px]' aria-hidden>
        {x.dot}
      </span>
      <span className='text-[10px] tracking-wideplus text-white/70'>
        {x.label}
      </span>
    </div>
  );
}

function LedgerTick() {
  // Cosmetic tick — purely visual, does not touch time. It “feels alive”.
  return (
    <div className='mt-7 flex items-center gap-3'>
      <div className='relative h-[10px] w-[10px]'>
        <span className='absolute inset-0 rounded-full bg-[rgba(255,214,128,.55)] opacity-70 animate-[pulse_1.6s_ease-in-out_infinite]' />
        <span className='absolute inset-[2px] rounded-full bg-[rgba(255,214,128,.85)]' />
      </div>
      <div className='text-[10px] tracking-wideplus text-white/55'>
        LEDGER SIGNAL · STRUCTURE IS ACTIVE
      </div>
    </div>
  );
}

function Pill({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className='rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4'>
      <div className='text-[10px] tracking-widemax text-white/55'>
        {label.toUpperCase()}
      </div>
      <div className='mt-1 text-sm text-white/70'>{value}</div>
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
    <div className='rounded-3xl border border-white/10 bg-white/[0.02] p-7'>
      <div className='flex items-center justify-between gap-4'>
        <div className='text-sm tracking-wideplus text-white/85'>
          {title}
        </div>

        {/* Gold emblem-chip */}
        <div className='inline-flex items-center gap-2 rounded-full border border-[rgba(255,214,128,.22)] bg-[rgba(255,214,128,.06)] px-3 py-1'>
          <span
            aria-hidden
            className='h-2 w-2 rounded-full bg-[rgba(255,214,128,.85)]'
          />
          <span className='text-[9px] tracking-widemax text-[rgba(255,214,128,.92)]'>
            {tag.toUpperCase()}
          </span>
        </div>
      </div>

      <p className='mt-4 text-sm text-white/60 leading-relaxed'>{desc}</p>
    </div>
  );
}

function Step({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className='flex gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-7'>
      <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-[rgba(255,214,128,.25)] bg-[rgba(255,214,128,.06)] text-[11px] tracking-widemax text-[rgba(255,214,128,.95)]'>
        {n}
      </div>
      <div>
        <div className='text-[11px] tracking-widemax text-white/75'>
          {title.toUpperCase()}
        </div>
        <div className='mt-2 text-sm text-white/60 leading-relaxed'>
          {desc}
        </div>
      </div>
    </div>
  );
}

export default function DigitalParliament() {
  // Demo-safe AXIOM state: keep it GREEN on the public shell.
  // Later, if you want, we can read this from a public endpoint — but not today.
  const axiomState: 'GREEN' | 'YELLOW' | 'RED' = 'GREEN';

  return (
    <InstitutionalFrame active='/digital-parliament'>
      {/* HERO */}
      <section className='relative'>
        <Emblem />

        <div className='flex flex-wrap items-center justify-between gap-3'>
          <div className='inline-flex items-center gap-2 rounded-full border border-[rgba(255,214,128,.20)] bg-[rgba(255,214,128,.06)] px-4 py-1.5 text-[10px] tracking-widemax text-[rgba(255,214,128,.92)]'>
            DIGITAL PARLIAMENT LEDGER · GOVERNANCE INFRASTRUCTURE
          </div>

          <AxiomStateLight state={axiomState} />
        </div>

        <h1 className='mt-7 text-3xl md:text-4xl tracking-wideplus'>
          Digital Parliament Ledger
        </h1>

        <p className='mt-6 max-w-3xl text-white/65 leading-relaxed'>
          A governance system of record: drafting, authority review, execution by
          signature, deterministic archiving, and public verification — aligned as a
          coherent lifecycle. No noise. No ambiguity.
        </p>

        <LedgerTick />

        <div className='mt-10 flex flex-wrap gap-3'>
          <a
            href='https://portal.oasisintlholdings.com'
            target='_blank'
            rel='noreferrer'
            className='rounded-xl border border-[rgba(255,214,128,.35)] bg-[rgba(255,214,128,.10)] px-5 py-3 text-[11px] tracking-wideplus text-[rgba(255,214,128,.95)] hover:bg-[rgba(255,214,128,.16)]'
          >
            ENTER AUTHORITY GATEWAY →
          </a>

          <Link
            href='/trust'
            className='rounded-xl border border-white/15 bg-white/[0.02] px-5 py-3 text-[11px] tracking-wideplus text-white/70 hover:bg-white/[0.04]'
          >
            TRUST & VERIFICATION
          </Link>

          <Link
            href='/authority'
            className='rounded-xl border border-white/15 bg-white/[0.02] px-5 py-3 text-[11px] tracking-wideplus text-white/70 hover:bg-white/[0.04]'
          >
            PUBLIC BOUNDARY
          </Link>
        </div>
      </section>

      {/* PILL STRIP */}
      <section className='mt-14 grid gap-4 md:grid-cols-3'>
        <Pill label='Lifecycle' value='Draft → Council → Execution → Archive' />
        <Pill label='Proof Primitive' value='Hash + Registry + Certificate Receipt' />
        <Pill label='Position' value='Institutional · Calm · Verifiable' />
      </section>

      {/* CAPABILITIES */}
      <section className='mt-14 grid gap-4 md:grid-cols-2'>
        <Card
          title='Deterministic Archive'
          tag='Archive'
          desc='Records are rendered deterministically before hashing. Archive artifacts resolve into a verified registry and public pointer.'
        />
        <Card
          title='Signature Discipline'
          tag='Execution'
          desc='Signature-required execution produces envelope-bound artifacts. Signed is not archived; archive is a separate lifecycle state.'
        />
        <Card
          title='Verification by Resolution'
          tag='Proof'
          desc='Verification resolves by hash, envelope id, or ledger id — returning structured proof, not opinion.'
        />
        <Card
          title='AXIOM Sidecar Intelligence'
          tag='AXIOM'
          desc='Intelligence runs as a read-only sidecar on evidence. Only at seal time is a snapshot embedded into the archive render.'
        />
      </section>

      {/* LIFECYCLE STEPS */}
      <section className='mt-16'>
        <div className='flex items-end justify-between gap-6'>
          <div>
            <div className='text-[11px] tracking-widemax text-[rgba(255,214,128,.92)]'>
              GOVERNANCE LIFECYCLE
            </div>
            <h2 className='mt-3 text-2xl tracking-wideplus'>
              A sequence designed for authority.
            </h2>
          </div>

          <div className='hidden md:block rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3'>
            <div className='text-[10px] tracking-wideplus text-white/60'>
              PUBLIC LANE
            </div>
            <div className='mt-1 text-[11px] text-white/50'>
              This page describes posture — execution occurs in the Portal / OS.
            </div>
          </div>
        </div>

        <div className='mt-8 grid gap-4 md:grid-cols-2'>
          <Step
            n='01'
            title='Draft'
            desc='A resolution is drafted with clean structure and context. No premature execution; drafting remains reversible.'
          />
          <Step
            n='02'
            title='Council'
            desc='Authority reviews and approves. The Council is the gate that determines execution mode and legitimacy.'
          />
          <Step
            n='03'
            title='Execution'
            desc='Signature-required execution proceeds through controlled signing flows. Authority remains explicit.'
          />
          <Step
            n='04'
            title='Archive'
            desc='Sealing produces deterministic archive artifacts and registry pointers. Verification becomes public and resolvable.'
          />
        </div>
      </section>

      {/* NOTE PANEL */}
      <section className='mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-8'>
        <div className='text-[11px] tracking-widemax text-white/70'>
          INSTITUTIONAL NOTE
        </div>
        <p className='mt-3 text-sm text-white/60 leading-relaxed'>
          This site is an institutional boundary. It describes vocabulary and posture.
          Public actions (sign / verify / certificate / onboarding) occur through the Authority
          Gateway. Internal execution lanes operate under controlled authority.
        </p>
      </section>
    </InstitutionalFrame>
  );
}
