import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"
import { Footer } from "@/components/footer"
import Header from "@/components/header"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ideacolor - Trasforma la tua casa con il colore",
  description:
    "Esperti in vernici e soluzioni per interni ed esterni. Scopri la nostra gamma di prodotti per dare vita ai tuoi spazi.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
     <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>
      <Header/>
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  )
}
