import type { Metadata, Viewport } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexic Technologies — Software that ships",
  description:
    "An independent software studio building web platforms, mobile apps, and AI products for teams that need to move fast without breaking what matters.",
  keywords: [
    "software house",
    "product studio",
    "web development",
    "mobile apps",
    "AI engineering",
  ],
  openGraph: {
    title: "Nexic Technologies — Software that ships",
    description:
      "An independent software studio building web platforms, mobile apps, and AI products.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      {/* Browser extensions (Grammarly, ColorZilla, password managers) inject
          attributes into <body> before React hydrates, which React reports as
          a mismatch. This suppresses the warning for body's own attributes
          only — descendants are still checked normally. */}
      <body suppressHydrationWarning>
        {/* The scroll reveals inline-style opacity:0 into the SSR HTML, so
            without JavaScript everything below the hero would never appear.
            !important is required to beat those inline styles. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
