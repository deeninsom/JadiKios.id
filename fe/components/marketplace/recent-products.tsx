"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { products, shops } from "@/lib/data"
import { motion } from "framer-motion"

export function RecentProducts() {
  const recentProducts = products.slice(0, 6)

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Produk Terbaru</h2>
        <Link href="/kategori" className="text-sm font-medium text-purple-600 hover:text-purple-700">
          Lihat Semua &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {recentProducts.map((product, index) => {
          const shop = shops.find((s) => s.id === product.shopId)

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/produk/${product.id}`}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all block h-full"
              >
                <div className="aspect-square relative bg-slate-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-slate-900 hover:bg-purple-600 hover:text-white transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-200">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-slate-900 text-sm line-clamp-2 mb-1 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-2">{shop?.name || "UMKM Lokal"}</p>
                  <p className="font-bold text-orange-600 text-sm">Rp {product.price.toLocaleString("id-ID")}</p>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
