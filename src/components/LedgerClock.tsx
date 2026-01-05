'use client';
import { useEffect, useState } from 'react';

export default function LedgerClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className='flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2'>
      <span className='h-2 w-2 rounded-full bg-[rgba(255,214,128,.9)] shadow-[0_0_16px_rgba(255,214,128,.4)]' />
      <span className='text-[11px] tracking-widemax text-[rgba(255,214,128,.95)]'>
        {now.toUTCString().slice(17, 25)} UTC
      </span>
    </div>
  );
}