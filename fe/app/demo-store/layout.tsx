import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Toko Berkah Jaya - jadikios",
  description: "Katalog produk Toko Berkah Jaya",
}

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gray-50">{children}</div>
}
