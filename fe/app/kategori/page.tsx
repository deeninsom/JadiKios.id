import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { categories } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function KategoriPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-orange-50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">Jelajahi Kategori</h1>
            <p className="text-lg text-slate-600 max-w-2xl text-pretty">
              Temukan produk dan layanan yang Anda butuhkan dari berbagai kategori UMKM lokal.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <Link key={category.slug} href={`/kategori/${category.slug}`}>
                    <Card className="hover:shadow-lg transition-all hover:-translate-y-1 group cursor-pointer">
                      <CardContent className="p-8 text-center">
                        <div
                          className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-2">{category.name}</h3>
                        <p className="text-sm text-slate-600 text-pretty">{category.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
