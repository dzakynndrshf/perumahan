// app/layout.js
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children} {/* Ini menggantikan Component dan pageProps */}
      </body>
    </html>
  );
}