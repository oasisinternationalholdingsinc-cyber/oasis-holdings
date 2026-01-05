import Link from 'next/link';
import InstitutionalFrame from '@/components/InstitutionalFrame';

export default function HomePage() {
  return (
    <InstitutionalFrame active='/'>
      {/* HERO */}
      <section className='relative'>
        {/* Gold emblem backdrop */}
        <div
          aria-hidden
          className='pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full
                     bg-[radial-gradient(circle,rgba(255,214,128,.14),transparent_65%)] blur-3xl'
        />

        <div className='relative'>
          <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(255,214,128,.25)] bg-[rgba(255,214,128,.06)] px-4 py-1.5 text-[10px] tracking-widemax text-[rgba(255,214,128,.9)]'>
            OASIS DIGITAL PARLIAMENT · INSTITUTIONAL BOUNDARY
          </div>

          <h1 className='mt-6 text-4xl md:text-5xl leading-tight tracking-wideplus'>
            Silence and structure —
            <br />
            <span className='text-[rgba(255,214,128,.95)]'>
              governance you can verify.
            </span>
          </h1>

          <p className='mt-8 max-w-3xl text-white/65 leading-relaxed'>
            Oasis International Holdings builds institutional governance infrastructure
            where approvals, signatures, archives, and verification resolve into a single,
            coherent system — calm, auditable, and enterprise-grade.
          </p>

          <div className='mt-10 flex flex-wrap gap-4'>
            <a
              href='https://portal.oasisintlholdings.com'
              target='_blank'
              rel='noreferrer'
              className='rounded-xl border border-[rgba(255,214,128,.35)]
                         bg-[rgba(255,214,128,.10)]
                         px-6 py-3 text-[11px] tracking-wideplus
                         text-[rgba(255,214,128,.95)]
                         hover:bg-[rgba(255,214,128,.16)]'
            >
              ENTER PUBLIC AUTHORITY GATEWAY →
            </a>

            <Link
              href='/digital-parliament'
              className='rounded-xl border border-white/15 px-6 py-3
                         text-[11px] tracking-wideplus text-white/70
                         hover:bg-white/[0.04]'
            >
              EXPLORE DIGITAL PARLIAMENT
            </Link>
          </div>
        </div>
      </section>

      {/* META STRIP */}
      <section className='mt-16 grid gap-4 md:grid-cols-3'>
        <MetaCard k='MODE' v='Institutional · Readable · Verifiable' />
        <MetaCard k='JURISDICTION' v='Ontario, Canada' />
        <MetaCard k='PRINCIPLE' v='Evidence over claims' />
      </section>

      {/* CAPABILITIES */}
      <section className='mt-14 grid gap-6 md:grid-cols-4'>
        <Capability
          title='Verification'
          tag='Public'
          desc='Public verify and certificate flows designed to feel official — not “crypto”.'
        />
        <Capability
          title='Auditability'
          tag='System of Record'
          desc='Deterministic archives, hashes, and evidence pointers — no ambiguity.'
        />
        <Capability
          title='Execution'
          tag='Governance'
          desc='Draft → Council → Signature → Archive, with clean lifecycle states.'
        />
        <Capability
          title='Gateway'
          tag='Access'
          desc='Sign, verify, certificates, and onboarding — one public door.'
        />
      </section>

      {/* GATEWAY PANEL */}
      <section className='mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-12'>
        <div className='grid gap-10 md:grid-cols-2'>
          <div>
            <div className='text-[11px] tracking-widemax text-[rgba(255,214,128,.9)]'>
              PUBLIC AUTHORITY GATEWAY
            </div>

            <h2 className='mt-4 text-2xl tracking-wideplus'>
              One door. <span className='text-[rgba(255,214,128,.95)]'>Deliberate access.</span>
            </h2>

            <p className='mt-6 text-white/65 leading-relaxed'>
              A public launchpad for external clients and stakeholders.
              Verification and certificate access remain simple.
              Organization onboarding remains deliberate. No noise.
            </p>

            <div className='mt-8 flex gap-4'>
              <a
                href='https://portal.oasisintlholdings.com'
                target='_blank'
                rel='noreferrer'
                className='rounded-xl border border-[rgba(255,214,128,.35)]
                           bg-[rgba(255,214,128,.10)]
                           px-5 py-3 text-[11px] tracking-wideplus
                           text-[rgba(255,214,128,.95)]
                           hover:bg-[rgba(255,214,128,.16)]'
              >
                OPEN GATEWAY →
              </a>

              <Link
                href='/trust'
                className='rounded-xl border border-white/15 px-5 py-3
                           text-[11px] tracking-wideplus text-white/70
                           hover:bg-white/[0.04]'
              >
                TRUST & DISCIPLINE
              </Link>
            </div>
          </div>

          <div className='rounded-2xl border border-white/10 bg-white/[0.02] p-6'>
            <OutlineItem title='VERIFY' desc='Validate records by hash, envelope id, or ledger id.' />
            <OutlineItem title='CERTIFICATE' desc='Official view designed for printing and retention.' />
            <OutlineItem title='SIGN' desc='Authority-scoped signing with verification receipts.' />
            <OutlineItem title='ONBOARD' desc='Create an organization and assign authority — optional.' />
          </div>
        </div>
      </section>
    </InstitutionalFrame>
  );
}

/* ───────────────────────── helpers ───────────────────────── */

function MetaCard({ k, v }: { k: string; v: string }) {
  return (
    <div className='rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-4'>
      <div className='text-[10px] tracking-widemax text-white/55'>{k}</div>
      <div className='mt-1 text-sm text-white/70'>{v}</div>
    </div>
  );
}

function Capability({
  title,
  desc,
  tag,
}: {
  title: string;
  desc: string;
  tag: string;
}) {
  return (
    <div className='rounded-2xl border border-white/10 bg-white/[0.02] p-6'>
      <div className='flex items-center justify-between'>
        <div className='text-sm tracking-wideplus'>{title}</div>
        <div className='rounded-full border border-white/15 px-2 py-0.5 text-[9px] text-white/55'>
          {tag}
        </div>
      </div>
      <p className='mt-4 text-sm text-white/60 leading-relaxed'>{desc}</p>
    </div>
  );
}

function OutlineItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className='flex gap-3 border-t border-white/10 py-4 first:border-t-0 first:pt-0'>
      <div className='mt-1 h-2 w-2 rounded-full bg-[rgba(255,214,128,.9)]' />
      <div>
        <div className='text-[11px] tracking-widemax text-white/75'>{title}</div>
        <div className='mt-1 text-sm text-white/60 leading-relaxed'>{desc}</div>
      </div>
    </div>
  );
}
