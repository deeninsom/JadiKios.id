import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { shops, products } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>
}) {
   const { q } = await searchParams
  const query = q?.toLowerCase() || ""

  const filteredShops = shops.filter(
    (shop) =>
      shop.name.toLowerCase().includes(query) ||
      shop.category.toLowerCase().includes(query) ||
      shop.tags.some((tag) => tag.toLowerCase().includes(query)),
  )

  const filteredProducts = products.filter(
    (product) => product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query),
  )

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Hasil Pencarian</h1>
          <p className="text-slate-600 mb-8">
            Menampilkan hasil untuk <span className="font-semibold">"{q}"</span>
          </p>

          {filteredShops.length === 0 && filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-slate-500">Tidak ditemukan hasil yang cocok.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Shops Results */}
              {filteredShops.length > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Toko & Mitra</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredShops.map((shop) => (
                      <Link key={shop.id} href={`/toko/${shop.id}`}>
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                          <div className="relative h-48 bg-slate-100">
                            <Image
                              src={shop.image || "/placeholder.svg"}
                              alt={shop.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
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
                </section>
              )}

              {/* Products Results */}
              {filteredProducts.length > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Produk</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {filteredProducts.map((product) => {
                      const shop = shops.find((s) => s.id === product.shopId)
                      return (
                        <Link
                          key={product.id}
                          href={`/produk/${product.id}`}
                          className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all block"
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
                            <p className="font-bold text-orange-600 text-sm">
                              Rp {product.price.toLocaleString("id-ID")}
                            </p>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </section>
              )}
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
