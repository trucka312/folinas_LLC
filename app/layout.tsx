export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className='leading-6 text-base overflow-x-hidden'>
          <main id="page-main" className="min-h-[300px]">{children}</main>
      </body>
    </html>
  );
}
