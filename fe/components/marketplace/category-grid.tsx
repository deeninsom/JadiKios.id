"use client"

import Link from "next/link"
import { categories } from "@/lib/data"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function CategoryGrid() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Kategori Pilihan</h2>
        <Link href="/kategori" className="text-sm font-medium text-purple-600 hover:text-purple-700">
          Lihat Semua &rarr;
        </Link>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
      >
        {categories.map((category) => (
          <motion.div key={category.name} variants={item}>
            <Link
              href={`/kategori/${category.slug}`}
              className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 bg-white hover:border-purple-100 hover:shadow-md transition-all duration-200 group h-full"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${category.color} group-hover:scale-110 transition-transform duration-200`}
              >
                <category.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 text-center">
                {category.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
