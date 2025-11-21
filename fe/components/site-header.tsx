"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Search } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-linier-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
            K
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">jadikios</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/kategori" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">
            Kategori
          </Link>
          <Link href="/mitra" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">
            Mitra UMKM
          </Link>
          <Link href="/tentang" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">
            Tentang Kami
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="/register" className="hidden md:block text-sm font-medium cursor-pointer text-slate-600 hover:text-slate-900">
            Gabung Mitra
          </Link>
          <div className="h-6 w-px bg-slate-200 hidden md:block"></div>
          <Link href="/login">
            <Button size="sm" className="bg-slate-900 text-white cursor-pointer hover:bg-slate-800 rounded-full px-6">
              Masuk
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-slate-700 hover:bg-slate-100"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="p-0">
              {/* Sheet Header */}
              <div className="p-4 border-b">
                <SheetTitle className="text-lg font-semibold text-slate-700">
                  Menu Navigasi
                </SheetTitle>
                <SheetDescription className="text-sm text-slate-500">
                  Jelajahi halaman dalam aplikasi
                </SheetDescription>
              </div>

              {/* Navigation items */}
              <nav className="flex flex-col px-4 py-4 gap-3">

                <Link
                  href="/kategori"
                  className="text-base font-medium text-slate-700 hover:text-purple-600 hover:bg-slate-100 px-3 py-2 rounded-md transition"
                >
                  Kategori
                </Link>

                <Link
                  href="/mitra"
                  className="text-base font-medium text-slate-700 hover:text-purple-600 hover:bg-slate-100 px-3 py-2 rounded-md transition"
                >
                  Mitra UMKM
                </Link>

                <Link
                  href="/tentang"
                  className="text-base font-medium text-slate-700 hover:text-purple-600 hover:bg-slate-100 px-3 py-2 rounded-md transition"
                >
                  Tentang Kami
                </Link>

                <hr className="my-3 border-slate-200" />

                <Link
                  href="/register"
                  className="text-base font-semibold text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-md transition"
                >
                  Gabung Sebagai Mitra
                </Link>

              </nav>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  )
}
