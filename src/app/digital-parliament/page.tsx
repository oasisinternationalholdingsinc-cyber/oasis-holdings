import InstitutionalFrame from '@/components/InstitutionalFrame';

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className='rounded-3xl border border-white/10 bg-white/[0.02] p-8'>
      <div className='text-[11px] tracking-widemax text-[rgba(255,214,128,.9)]'>{title.toUpperCase()}</div>
      <div className='mt-4 text-sm leading-relaxed text-white/65'>{children}</div>
    </section>
  );
}

export default function DigitalParliament() {
  return (
    <InstitutionalFrame active='/digital-parliament'>
      <div className='flex items-start justify-between gap-8'>
        <div>
          <h1 className='text-3xl tracking-wideplus'>DIGITAL PARLIAMENT LEDGER</h1>
          <p className='mt-6 max-w-2xl text-white/65 leading-relaxed'>
            A constitutional governance system: drafted with discipline, approved by authority,
            executed with signatures when required, and archived with verifiable artifacts.
          </p>
        </div>

        <div className='hidden md:block rounded-2xl border border-[rgba(255,214,128,.18)] bg-[rgba(255,214,128,.05)] px-4 py-3'>
          <div className='text-[10px] tracking-wideplus text-[rgba(255,214,128,.9)]'>PUBLIC BOUNDARY</div>
          <div className='mt-1 text-[11px] text-white/55'>
            This site explains the system — execution happens inside the OS.
          </div>
        </div>
      </div>

      <div className='mt-10 grid gap-4 md:grid-cols-2'>
        <Panel title='Lifecycle'>
          Draft (AI-assisted) → Council approval → Signature-required execution (Forge) or direct archival →
          immutable seal + verified registry. Archive quality is identical across paths.
        </Panel>
        <Panel title='Verifiability'>
          Every sealed artifact is hashed and resolvable. Verification returns the registry record and the
          public render pointer — proof over claims.
        </Panel>
        <Panel title='Evidence Discipline'>
          Uploads remain pristine. AXIOM runs side-car intelligence without touching the file. Only at seal time
          is a snapshot embedded into the deterministic archive render.
        </Panel>
        <Panel title='Authority Gateway'>
          The public door (Portal) handles sign / verify / certificate / onboard. Internal OS handles governance
          creation and execution. One boundary, one truth lane.
        </Panel>
      </div>

      <div className='mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-8'>
        <div className='text-[11px] tracking-widemax text-white/70'>NEXT</div>
        <div className='mt-3 text-sm text-white/60 leading-relaxed'>
          We wire “AUTHORITY GATEWAY” to the Portal domain (later), then add the Trust page with
          registry vocabulary: verified documents, minute book, hashes, and public certificate receipts.
        </div>
      </div>
    </InstitutionalFrame>
  );
}