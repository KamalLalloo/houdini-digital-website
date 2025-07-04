import "./globals.css";
import { Syne, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata = {
  title: "Houdini Digital",
  description: "Creative Digital Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.className} ${syne.className}`}>
      <body>{children}</body>
    </html>
  );
}
