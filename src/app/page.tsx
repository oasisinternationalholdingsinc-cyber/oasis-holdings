import InstitutionalFrame from '@/components/InstitutionalFrame';
import Link from 'next/link';

export default function Home() {
  return (
    <InstitutionalFrame active='/'>
      {/* HERO */}
      <section className='relative'>
        {/* Gold emblem */}
        <div className='pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 opacity-[0.06]'>
          <svg width='220' height='220' viewBox='0 0 200 200'>
            <circle
              cx='100'
              cy='100'
              r='90'
              fill='none'
              stroke='rgba(255,214,128,.6)'
              strokeWidth='2'
            />
            <circle
              cx='100'
              cy='100'
              r='64'
              fill='none'
              stroke='rgba(255,214,128,.4)'
              strokeWidth='1'
            />
          </svg>
        </div>

        <div className='relative'>
          <div className='inline-flex items-center gap-2 rounded-full border border-[rgba(255,214,128,.25)] bg-[rgba(255,214,128,.08)] px-4 py-2 text-[10px] tracking-wideplus text-[rgba(255,214,128,.95)]'>
            OASIS DIGITAL PARLIAMENT • INSTITUTIONAL BOUNDARY
          </div>

          <h1 className='mt-8 text-[42px] leading-tight tracking-wideplus'>
            Silence and structure —
            <br />
            <span className='text-[rgba(255,214,128,.95)]'>
              governance you can verify.
            </span>
          </h1>

          <p className='mt-6 max-w-2xl text-white/65 leading-relaxed'>
            Oasis International Holdings builds institutional governance
            infrastructure where approvals, signatures, archives, and
            verification resolve into a single coherent system — calm,
            auditable, and enterprise-grade.
          </p>

          <div className='mt-10 flex flex-wrap gap-4'>
            <Link
              href='/authority'
              className='rounded-xl border border-[rgba(255,214,128,.35)] bg-[rgba(255,214,128,.12)] px-6 py-3 text-[11px] tracking-wideplus text-[rgba(255,214,128,.95)] hover:bg-[rgba(255,214,128,.18)]'
            >
              ENTER PUBLIC AUTHORITY GATEWAY →
            </Link>

            <Link
              href='/digital-parliament'
              className='rounded-xl border border-white/15 px-6 py-3 text-[11px] tracking-wideplus text-white/70 hover:text-white hover:bg-white/[0.04]'
            >
              EXPLORE DIGITAL PARLIAMENT
            </Link>
          </div>
        </div>
      </section>

      {/* POSTURE GRID */}
      <section className='mt-20 grid gap-6 md:grid-cols-3'>
        {[
          {
            k: 'MODE',
            v: 'Institutional • readable • verifiable',
          },
          {
            k: 'JURISDICTION',
            v: 'Ontario, Canada',
          },
          {
            k: 'PRINCIPLE',
            v: 'Evidence over claims',
          },
        ].map((i) => (
          <div
            key={i.k}
            className='rounded-2xl border border-white/10 bg-white/[0.02] p-6'
          >
            <div className='text-[10px] tracking-widemax text-white/60'>
              {i.k}
            </div>
            <div className='mt-2 text-sm text-white/70'>{i.v}</div>
          </div>
        ))}
      </section>

      {/* SYSTEM CARDS */}
      <section className='mt-16 grid gap-6 md:grid-cols-4'>
        {[
          {
            title: 'Verification',
            tag: 'Public',
            body:
              'Public verify and certificate flows designed to feel official — not speculative.',
          },
          {
            title: 'Auditability',
            tag: 'System of Record',
            body:
              'Deterministic archives, hashes, and evidence pointers. No ambiguity.',
          },
          {
            title: 'Execution',
            tag: 'Governance',
            body:
              'Draft → Council → Signature → Archive, with clean lifecycle states.',
          },
          {
            title: 'Gateway',
            tag: 'Access',
            body:
              'Sign, verify, certificates, and onboarding — one public door.',
          },
        ].map((c) => (
          <div
            key={c.title}
            className='rounded-2xl border border-white/10 bg-white/[0.02] p-6'
          >
            <div className='flex items-center justify-between'>
              <div className='text-sm text-white/80'>{c.title}</div>
              <div className='rounded-full border border-white/15 px-2 py-[2px] text-[9px] text-white/55'>
                {c.tag}
              </div>
            </div>

            <p className='mt-4 text-sm text-white/60 leading-relaxed'>
              {c.body}
            </p>

            <div className='mt-4 text-[10px] text-white/40'>
              Evidence-grade posture. No noise.
            </div>
          </div>
        ))}
      </section>

      {/* FOOTNOTE */}
      <section className='mt-24 text-center'>
        <p className='text-[11px] tracking-wideplus text-white/45'>
          Built for clarity. Designed for calm. Verified by evidence.
        </p>
      </section>
    </InstitutionalFrame>
  );
}
