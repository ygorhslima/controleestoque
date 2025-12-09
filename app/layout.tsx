import "./globals.css";
import Header from './(components)/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div className="container-principal">
          <div id="grid-1">
            <Header />
          </div>
          <main className="mainApp" id="grid-2">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
