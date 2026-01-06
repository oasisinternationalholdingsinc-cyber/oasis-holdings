import InstitutionalFrame from '@/components/InstitutionalFrame';

function Emblem() {
  return (
    <svg
      aria-hidden='true'
      viewBox='0 0 600 600'
      className='pointer-events-none absolute -right-14 -top-20 h-[380px] w-[380px] opacity-[0.14] blur-[0.2px]'
    >
      <defs>
        <radialGradient id='g' cx='50%' cy='50%' r='60%'>
          <stop offset='0%' stopColor='rgba(255,214,128,.55)' />
          <stop offset='60%' stopColor='rgba(255,214,128,.22)' />
          <stop offset='100%' stopColor='rgba(255,214,128,0)' />
        </radialGradient>
        <linearGradient id='s' x1='0' x2='1'>
          <stop offset='0%' stopColor='rgba(255,214,128,.65)' />
          <stop offset='100%' stopColor='rgba(255,214,128,.12)' />
        </linearGradient>
      </defs>

      <circle cx='300' cy='300' r='250' fill='url(#g)' />
      <circle cx='300' cy='300' r='210' fill='none' stroke='url(#s)' strokeWidth='2' />
      <circle cx='300' cy='300' r='170' fill='none' stroke='rgba(255,214,128,.22)' strokeWidth='2' />
      <circle cx='300' cy='300' r='130' fill='none' stroke='rgba(255,214,128,.14)' strokeWidth='2' />

      {Array.from({ length: 48 }).map((_, i) => {
        const a = (i / 48) * Math.PI * 2;
        const x1 = 300 + Math.cos(a) * 180;
        const y1 = 300 + Math.sin(a) * 180;
        const x2 = 300 + Math.cos(a) * 198;
        const y2 = 300 + Math.sin(a) * 198;
        const major = i % 6 === 0;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={major ? 'rgba(255,214,128,.28)' : 'rgba(255,214,128,.14)'}
            strokeWidth={major ? 2 : 1}
            strokeLinecap='round'
          />
        );
      })}

      <path
        d='M300 196c42 0 76 34 76 76v56c0 42-34 76-76 76s-76-34-76-76v-56c0-42 34-76 76-76Z'
        fill='rgba(255,214,128,.06)'
        stroke='rgba(255,214,128,.22)'
        strokeWidth='2'
      />
      <path
        d='M260 284h80M260 316h80'
        stroke='rgba(255,214,128,.34)'
        strokeWidth='3'
        strokeLinecap='round'
      />
    </svg>
  );
}

function Badge({ children }: { children: string }) {
  return (
    <div className='rounded-full border border-[rgba(255,214,128,.22)] bg-[rgba(255,214,128,.06)] px-3 py-1 text-[10px] tracking-wideplus text-[rgba(255,214,128,.9)]'>
      {children.toUpperCase()}
    </div>
  );
}

function AxiomLight({ state }: { state: 'GREEN' | 'YELLOW' | 'RED' }) {
  const label = state === 'GREEN' ? 'STABLE' : state === 'YELLOW' ? 'REVIEW' : 'ATTENTION';
  const dot = state === 'GREEN' ? '🟢' : state === 'YELLOW' ? '🟡' : '🔴';

  return (
    <div className='flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3'>
      <div className='text-[10px] tracking-wideplus text-white/60'>AXIOM STATE</div>
      <div className='h-4 w-px bg-white/10' />
      <div className='flex items-center gap-2 text-[11px] tracking-widemax text-white/70'>
        <span className='text-base leading-none'>{dot}</span>
        {label}
      </div>
    </div>
  );
}

function Card({ title, tag, body }: { title: string; tag: string; body: string }) {
  return (
    <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8'>
      <div className='pointer-events-none absolute inset-0 opacity-[0.55]'>
        <div className='absolute -top-24 left-10 h-56 w-56 rounded-full bg-[rgba(255,214,128,.08)] blur-3xl' />
        <div className='absolute -bottom-24 right-8 h-56 w-56 rounded-full bg-white/[0.06] blur-3xl' />
      </div>

      <div className='relative'>
        <div className='flex items-start justify-between gap-6'>
          <div className='text-[11px] tracking-widemax text-white/70'>{title.toUpperCase()}</div>
          <Badge>{tag}</Badge>
        </div>
        <div className='mt-4 text-sm text-white/60 leading-relaxed'>{body}</div>
      </div>
    </div>
  );
}

function LaneRow({ k, v }: { k: string; v: string }) {
  return (
    <div className='flex items-start justify-between gap-6 border-t border-white/10 py-4 first:border-t-0 first:pt-0 last:pb-0'>
      <div className='text-[11px] tracking-widemax text-white/70'>{k.toUpperCase()}</div>
      <div className='text-sm text-white/60 text-right leading-relaxed'>{v}</div>
    </div>
  );
}

export default function DigitalParliament() {
  const axiomState: 'GREEN' | 'YELLOW' | 'RED' = 'GREEN';

  return (
    <InstitutionalFrame active='/digital-parliament'>
      <section className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-12'>
        <Emblem />
        <div className='pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(900px_200px_at_50%_0%,rgba(255,214,128,0.10),transparent_62%)]' />

        <div className='relative'>
          <div className='flex flex-wrap items-start justify-between gap-6'>
            <div>
              <div className='text-[11px] tracking-widemax text-white/65'>OASIS DIGITAL PARLIAMENT</div>

              <h1 className='mt-4 text-3xl tracking-wideplus'>
                Governance infrastructure — <span className='text-[rgba(255,214,128,.95)]'>you can verify</span>.
              </h1>

              <p className='mt-6 max-w-3xl text-white/65 leading-relaxed'>
                A disciplined lifecycle for institutional decisions: drafting, authority approval,
                signature execution, deterministic archiving, and public verification. Calm by design.
                Auditable by default.
              </p>
            </div>

            <div className='flex flex-col gap-3'>
              <div className='relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3'>
                <div className='pointer-events-none absolute inset-0'>
                  <div className='oasis-ledger-tick absolute left-[-20%] top-0 h-full w-[40%] bg-[linear-gradient(90deg,transparent,rgba(255,214,128,.18),transparent)]' />
                </div>
                <div className='relative flex items-center justify-between gap-6'>
                  <div>
                    <div className='text-[10px] tracking-wideplus text-white/55'>LEDGER TICK</div>
                    <div className='mt-1 text-[11px] tracking-widemax text-white/70'>
                      SYSTEM HEARTBEAT • DISCIPLINE • CLOCKED
                    </div>
                  </div>
                  <div className='h-8 w-8 rounded-full border border-[rgba(255,214,128,.22)] bg-[rgba(255,214,128,.06)]' />
                </div>
              </div>

              <AxiomLight state={axiomState} />
            </div>
          </div>

          <div className='mt-10 flex flex-wrap gap-3'>
            <Badge>Draft → Council → Forge → Archive</Badge>
            <Badge>Deterministic Hashing</Badge>
            <Badge>Verified Registry</Badge>
            <Badge>Evidence Discipline</Badge>
          </div>
        </div>
      </section>

      <section className='mt-10 grid gap-4 md:grid-cols-2'>
        <Card
          title='Authority & Approvals'
          tag='Council'
          body='Decisions move through a formal approval gate. Approval determines execution mode — signature-required or direct archive — without bypassing artifact discipline.'
        />
        <Card
          title='Signature Execution'
          tag='Forge'
          body='Signature-required records enter a controlled envelope flow. Completion yields archive-grade artifacts and verification receipts.'
        />
        <Card
          title='Deterministic Archive'
          tag='Archive'
          body='Archive artifacts are rendered deterministically before hashing. Once sealed, records are treated as immutable — repairs reconcile pointers without duplication.'
        />
        <Card
          title='Public Verification'
          tag='Proof'
          body='Public proof resolves by hash, envelope ID, or ledger ID and returns authoritative pointers — designed to feel official, printable, and retainable.'
        />
      </section>

      <section className='mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-10'>
        <div className='flex flex-wrap items-start justify-between gap-6'>
          <div>
            <div className='text-[11px] tracking-widemax text-white/70'>LIFECYCLE MODEL</div>
            <div className='mt-3 text-2xl tracking-wideplus'>
              One coherent chain — <span className='text-[rgba(255,214,128,.95)]'>no ambiguity</span>.
            </div>
            <p className='mt-4 max-w-3xl text-sm text-white/60 leading-relaxed'>
              Public vocabulary should be descriptive, not salesy. Draft, approve, execute, archive,
              verify — these are lifecycle states. Credibility comes from proof surfaces and custody discipline.
            </p>
          </div>

          <div className='rounded-2xl border border-[rgba(255,214,128,.18)] bg-[rgba(255,214,128,.05)] px-4 py-3'>
            <div className='text-[10px] tracking-wideplus text-[rgba(255,214,128,.9)]'>
              ENTERPRISE PRINCIPLE
            </div>
            <div className='mt-1 text-[11px] text-white/55'>
              Evidence over claims • Separation of duties • Idempotent repair
            </div>
          </div>
        </div>

        <div className='mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8'>
          <LaneRow k='Draft' v='Structured authoring and controlled promotion (no direct ledger writes).' />
          <LaneRow k='Council' v='Authority approval gate determines execution mode.' />
          <LaneRow k='Forge' v='Signature-only execution for required records.' />
          <LaneRow k='Archive' v='Deterministic render + hash + registry pointers.' />
          <LaneRow k='Verify' v='Public proof resolves as data and pointers — not opinion.' />
        </div>
      </section>
    </InstitutionalFrame>
  );
}
