import type { Metadata } from "next";
import { Poppins, Cinzel } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

const cinzel = Cinzel({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-wordmark",
});

export const metadata: Metadata = {
  title: "I-Run Goa Marathon — Running Group",
  description:
    "I-Run Goa Marathon is a community running group in Goa. Group runs every week, all paces welcome — join us on the road.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${cinzel.variable}`}>
        {children}
      </body>
    </html>
  );
}
