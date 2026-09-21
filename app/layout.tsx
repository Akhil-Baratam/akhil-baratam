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
 * Absolute base for Open Graph and canonical URLs.
 *
 * Set NEXT_PUBLIC_SITE_URL to your domain once you have one. Until then this
 * falls back to Vercel's own URLs so link previews resolve on preview builds.
 *
 * Every candidate is validated rather than trusted. An environment variable
 * that exists but is empty is a normal thing for a hosting dashboard to
 * produce, and `new URL("")` throws during the build rather than at request
 * time, which fails the whole deployment. Nullish coalescing does not help
 * here: an empty string is not nullish.
 */
function resolveSiteUrl(): string {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    // The stable production domain, preferred for canonical links.
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    // The per-deployment URL, so previews still get absolute links.
    process.env.VERCEL_URL,
  ];

  for (const candidate of candidates) {
    const value = candidate?.trim();
    if (!value) continue;
    // Vercel supplies bare hostnames; a hand-typed domain often lacks a scheme.
    const withScheme = /^https?:\/\//i.test(value) ? value : `https://${value}`;
    try {
      return new URL(withScheme).origin;
    } catch {
      // Ignore a malformed value and try the next candidate.
    }
  }

  return "http://localhost:3000";
}

const siteUrl = resolveSiteUrl();

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
