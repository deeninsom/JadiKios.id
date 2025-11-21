"use client"

import type React from "react"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export function MarketplaceHero() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="relative bg-slate-900 py-20 lg:py-32 overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative mx-auto px-4 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Temukan UMKM Terbaik <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
              Di Sekitar Anda
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Dukung ekonomi lokal dengan berbelanja di warung, toko, dan penyedia jasa tetangga Anda.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
          <form onSubmit={handleSearch} className="relative flex items-center bg-white rounded-full p-2 shadow-2xl">
            <Search className="w-6 h-6 text-slate-400 ml-4" />
            <Input
              type="text"
              placeholder="Cari 'Nasi Goreng', 'Laundry', atau 'Kopi'..."
              className="border-0 shadow-none focus-visible:ring-0 text-lg py-6 px-4 flex-1 text-slate-800 placeholder:text-slate-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              size="lg"
              className="rounded-full px-8 bg-slate-900 hover:bg-slate-800 text-white font-medium"
            >
              Cari
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-400"
        >
          <span>Pencarian Populer:</span>
          {["Katering", "Cuci Sepatu", "Frozen Food", "Hampers"].map((term) => (
            <button
              key={term}
              onClick={() => {
                setSearchQuery(term)
                router.push(`/search?q=${encodeURIComponent(term)}`)
              }}
              className="hover:text-white transition-colors underline decoration-slate-600 hover:decoration-white"
            >
              {term}
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
