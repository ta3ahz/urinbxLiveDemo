import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const SITE = "https://uribx.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "uriBX — Non-invasive urine cancer screening for pets",
    template: "%s · uriBX",
  },
  description:
    "The uriBX URB-1000 is a benchtop veterinary analyzer that screens for cancer from a urine sample — non-invasively, in the clinic, in minutes. Powered by epigenetic biomarker detection.",
  keywords: [
    "veterinary cancer screening",
    "non-invasive",
    "urine biomarker",
    "epigenetic biomarker",
    "uriBX",
    "URB-1000",
  ],
  openGraph: {
    title: "uriBX — Screen early. Treat sooner. Save lives.",
    description:
      "Non-invasive, in-clinic cancer screening for pets from a urine sample. Try the live device demo.",
    url: SITE,
    siteName: "uriBX",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
