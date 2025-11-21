import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { shops, categories } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function MitraPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-orange-50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">Mitra UMKM Kami</h1>
            <p className="text-lg text-slate-600 max-w-2xl text-pretty">
              Temukan berbagai usaha lokal terpercaya yang siap melayani kebutuhan Anda.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b bg-white sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <Button variant="default" size="sm" className="rounded-full whitespace-nowrap">
                Semua
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.slug}
                  variant="outline"
                  size="sm"
                  className="rounded-full whitespace-nowrap hover:bg-purple-50 bg-transparent"
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Shops Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shops.map((shop) => (
                <Link key={shop.id} href={`/toko/${shop.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative h-48 bg-slate-100">
                      <Image
                        src={shop.image || "/placeholder.svg"}
                        alt={shop.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {shop.verified && (
                        <div className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-md">
                          <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        </div>
                      )}
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-lg text-slate-900 group-hover:text-purple-600 transition-colors">
                          {shop.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-600 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{shop.location}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-sm">{shop.rating}</span>
                        </div>
                        <span className="text-sm text-slate-500">({shop.reviews} ulasan)</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {shop.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
