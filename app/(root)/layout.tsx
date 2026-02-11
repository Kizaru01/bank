
export default function RootLayout({ children } : Readonly<{
  children: React.ReactNode;}>) {
  return (
    <main>  
        Navbar
        SIDEBAR
        {children}
        section
        Leftbar
        footer
    </main>
  );
}
