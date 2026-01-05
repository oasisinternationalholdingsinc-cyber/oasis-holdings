import '@/styles/globals.css';

export const metadata = {
  title: 'Oasis International Holdings',
  description: 'Institutional stewardship of governance infrastructure.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}