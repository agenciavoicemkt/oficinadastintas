import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Oficina das Tintas - Sua cor personalizada na hora",
  description: "Linha completa Coral e Qualyvinil com o melhor preço e fácil localização em Interlagos, São Paulo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} font-sans scroll-smooth`}
    >
      <body className="min-h-screen bg-[#f8fafc] text-[#0f172a] flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
