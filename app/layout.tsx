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
  title: "I-Run Goa Marathon — Running Club",
  description:
    "I-Run Goa Marathon is a community running club in Goa. Group runs every week, all paces welcome — where runners meet, motivate, and move forward.",
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
