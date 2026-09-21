import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { person } from "@/lib/content";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

/**
 * Absolute base for Open Graph and canonical URLs. Set NEXT_PUBLIC_SITE_URL to
 * your domain once you have one; until then Vercel's per-deployment URL is
 * used, so link previews resolve on preview builds too.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${person.name}, ${person.role}`,
  description: person.intro,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${person.name}, ${person.role}`,
    description: person.intro,
    url: "/",
    siteName: person.name,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b1512" },
    { media: "(prefers-color-scheme: light)", color: "#e7eae4" },
  ],
};

/**
 * Applies the stored theme before first paint. Without this the page flashes
 * the system theme for a frame before hydration corrects it.
 */
const noFlashTheme = `
try {
  var t = localStorage.getItem('theme');
  if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t;
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashTheme }} />
      </head>
      <body className={`${sans.variable} ${mono.variable}`}>
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
