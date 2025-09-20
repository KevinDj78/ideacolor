"use client"
import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

// Crea un componente separato per la logica che usa useSearchParams
function ClientContent({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()
  // Qui puoi usare searchParams se ti serve
  
  return <>{children}</>
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ClientContent>{children}</ClientContent>
      </Suspense>
      <Analytics />
    </>
  )
}