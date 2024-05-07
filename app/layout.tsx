import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./(dashboard)/_components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SLIATE HNDIT Galle - Learning Management System",
  description: "LMS for SLIATE-Galle-HNDIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>

        <body className={inter.className}>{children}</body>
      </AuthProvider>


    </html>
  );
}
