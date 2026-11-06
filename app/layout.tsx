import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vishal Reddy | VISHAL.X",
  description: "Portfolio of Vishal Reddy — Full-Stack Developer and AI & ML student.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
