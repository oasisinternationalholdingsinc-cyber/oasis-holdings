import InstitutionalFrame from '@/components/InstitutionalFrame';

function Panel({ title, body }: { title: string; body: string }) {
  return (
    <div className='rounded-3xl border border-white/10 bg-white/[0.02] p-7'>
      <div className='text-[11px] tracking-widemax text-[rgba(255,214,128,.92)]'>
        {title.toUpperCase()}
      </div>
      <div className='mt-3 text-sm text-white/60 leading-relaxed'>{body}</div>
    </div>
  );
}

export default function Trust() {
  const items: Array<[string, string]> = [
    [
      'Certificate Resolution',
      'Resolve by hash, envelope ID, or ledger ID. Proof is returned as structured data and public pointers — not opinion.',
    ],
    [
      'Deterministic Archive',
      'Sealed artifacts are rendered deterministically before hashing. The verified registry points to the authoritative object.',
    ],
    [
      'Immutability Discipline',
      'Once sealed, a record is treated as immutable. Repair is idempotent: it reconciles pointers without duplicating artifacts.',
    ],
    [
      'Chain of Custody',
      'Storage paths, timestamps, registry entries, and signature envelopes form an auditable custody trail.',
    ],
    [
      'Public Boundary',
      'This site is an institutional boundary. Governance execution happens through the Authority Portal and internal OS lanes.',
    ],
    [
      'AXIOM Sidecar',
      'Intelligence runs as a read-only sidecar on evidence. Only at seal time is a snapshot embedded into the archive render.',
    ],
  ];

  return (
    <InstitutionalFrame active='/trust'>
      <div className='flex items-start justify-between gap-8'>
        <div>
          <h1 className='text-3xl tracking-wideplus'>TRUST & VERIFICATION</h1>
          <p className='mt-6 max-w-3xl text-white/65 leading-relaxed'>
            Trust is established through verifiable mechanisms: deterministic archive renders,
            cryptographic hashes, signed envelopes, and resolvable certificates. Oasis does not
            ask for trust — it provides proof.
          </p>
        </div>

        <div className='hidden md:block rounded-2xl border border-[rgba(255,214,128,.18)] bg-[rgba(255,214,128,.05)] px-4 py-3'>
          <div className='text-[10px] tracking-wideplus text-[rgba(255,214,128,.9)]'>
            VERIFICATION PRIMITIVES
          </div>
          <div className='mt-1 text-[11px] text-white/55'>
            Hash • Registry • Public Render • Certificate Receipt
          </div>
        </div>
      </div>

      <div className='mt-10 grid gap-4 md:grid-cols-2'>
        {items.map(([t, d]) => (
          <Panel key={t} title={t} body={d} />
        ))}
      </div>

      <div className='mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-8'>
        <div className='text-[11px] tracking-widemax text-white/70'>OPERATOR NOTE</div>
        <div className='mt-3 text-sm text-white/60 leading-relaxed'>
          Production policy: signed is not archived. Archive is a separate lifecycle state.
          The verified registry is the system of record for public proof.
        </div>
      </div>
    </InstitutionalFrame>
  );
}