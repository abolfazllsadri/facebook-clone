import "@/app/globals.css";

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="overflow-hidden font-sans antialiased">
      <body>{children}</body>
    </html>
  );
}
