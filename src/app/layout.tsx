import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Churrasco do Rafael",
  description: "Site churrasco do Rafael",
  openGraph: {
    title: "Churrasco do Rafael",
    description: "Qualidade e satisfação é minha maior prioridade",
    url: "https://rafachurrasco.vercel.app/",
    images: [
      {
        url: "../../public/background.png.png", // precisa ser URL absoluta
        width: 1200,
        height: 630,
        alt: "Imagem de destaque do site",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
