import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PokeDex",
  description: "Uma Pokédex desenvolvida com Next.js e PokeAPI",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="flex min-h-screen flex-col items-center p-5">
          {/* Cabeçalho fixo com logo */}
          <header className="w-full bg-white shadow-md p-3 flex justify-center">
            <Link href="/">
              <Image
                src="/pokebola.png" // Caminho da imagem (adicione na pasta public/)
                alt="Pokédex Logo"
                width={150} // Ajuste o tamanho conforme necessário
                height={50}
                priority // Carrega a imagem com prioridade
              />
            </Link>
          </header>

          {/* Espaçamento para não sobrepor o conteúdo */}
          <div className="mt-16 w-full max-w-5xl">{children}</div>
        </main>
      </body>
    </html>
  );
}
