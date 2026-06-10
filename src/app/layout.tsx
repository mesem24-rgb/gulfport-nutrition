import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gulfport Nutrition | Healthy Shakes & Loaded Teas in Gulfport, MS",
  description:
    "Visit Gulfport Nutrition for protein shakes, loaded energy teas, wellness challenges, and local nutrition support in Gulfport, Mississippi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Gulfport Nutrition",
              address: {
                "@type": "PostalAddress",
                streetAddress: "15456 Dedeaux Rd",
                addressLocality: "Gulfport",
                addressRegion: "MS",
                postalCode: "39503",
                addressCountry: "US",
              },
              url: "https://gulfport-nutrition.vercel.app",
              sameAs: ["https://www.facebook.com/gulfportnutrition/"],
              openingHours: ["Mo-Fr 06:30-17:30", "Sa 10:00-14:00"],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
