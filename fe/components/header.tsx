"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Store } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <Store className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">jadikios</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#fitur"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Fitur
            </Link>
            <Link
              href="/demo-store"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contoh Toko
            </Link>
            <Link
              href="#harga"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Harga
            </Link>
            <Link
              href="#testimoni"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimoni
            </Link>
            <Link
              href="#tentang"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Tentang
            </Link>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost" size="sm">
              Masuk
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Coba Gratis
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link href="#fitur" className="text-sm font-medium text-muted-foreground">
                Fitur
              </Link>
              <Link href="/demo-store" className="text-sm font-medium text-muted-foreground">
                Contoh Toko
              </Link>
              <Link href="#harga" className="text-sm font-medium text-muted-foreground">
                Harga
              </Link>
              <Link href="#testimoni" className="text-sm font-medium text-muted-foreground">
                Testimoni
              </Link>
              <Link href="#tentang" className="text-sm font-medium text-muted-foreground">
                Tentang
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" size="sm">
                  Masuk
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Coba Gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
