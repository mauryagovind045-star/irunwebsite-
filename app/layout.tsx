import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const archivo = Archivo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "I-Run Goa Marathon — Run for a Cause, Run for Goa",
  description:
    "The heartbeat of Goa's running community. Annual marathon by I-Help Foundation Goa with 32K, 21K, 10K, 5K, and 2K charity races at Goa University, Taleigao.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${archivo.variable}`}>
        {children}
      </body>
    </html>
  );
}
