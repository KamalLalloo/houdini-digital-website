import "./globals.css";
import { Syne, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
export const syne = Syne({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

// Apply Montserrat globally (as already done), Syne is used only in the Marquee component

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
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
