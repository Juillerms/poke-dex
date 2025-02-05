import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

/*Nexttheme - Light and Dark Mode (user interaction)*/ 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="flex min-h-screen flex-col items-center p-20">
          <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
            <Link href="/"><h2 className="text-2x1 text-bold">PokeDex</h2></Link>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
