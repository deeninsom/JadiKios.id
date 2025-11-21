"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, MapPin, BadgeCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { shops } from "@/lib/data"
import { motion } from "framer-motion"

export function FeaturedShops() {
  const featuredShops = shops.slice(0, 4)

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Mitra UMKM Populer</h2>
          <p className="text-slate-500 mt-1">Toko paling banyak dikunjungi minggu ini</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/mitra">Lihat Semua Mitra</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredShops.map((shop, index) => (
          <motion.div
            key={shop.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/toko/${shop.id}`} className="group block h-full">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <Image
                    src={shop.image || "/placeholder.svg"}
                    alt={shop.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/90 text-slate-900 hover:bg-white backdrop-blur-sm border-0">
                      {shop.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-purple-600 transition-colors flex items-center gap-1">
                      {shop.name}
                      {shop.verified && <BadgeCheck className="w-4 h-4 text-blue-500" />}
                    </h3>
                    <div className="flex items-center gap-1 text-amber-500 text-sm font-medium">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{shop.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{shop.location}</span>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                    {shop.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-slate-50 text-slate-600 rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
