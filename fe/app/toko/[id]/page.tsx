import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MapPin, Star, BadgeCheck, Phone, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { shops, products } from "@/lib/data"

export default async  function ShopPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const shop = shops.find((s) => s.id === id)

  if (!shop) {
    notFound()
  }

  const shopProducts = products.filter((p) => p.shopId === shop.id)

  // In a real app, this would be more robust. Here we use the static isOpen flag from data.
  const isShopOpen = shop.isOpen
  // </CHANGE>

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Note: StoreHeader is a client component, but we are in a server component. 
          Ideally, we should use it in a layout or wrap this page. 
          For now, I'll just add the badge to the hero section since StoreHeader is usually global.
          Wait, the user asked for "di toko / product nya diberi identitas di lagi buka atau tidak".
          I'll add it to the hero section for better visibility.
      */}
      {/* </CHANGE> */}

      {/* Header Image */}
      <div className="relative h-64 md:h-80 bg-slate-900">
        <Image src={shop.image || "/placeholder.svg"} alt={shop.name} fill className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />

        <div className="absolute top-6 left-4 md:left-8">
          <Link href="/" className="inline-flex items-center text-white hover:text-purple-300 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-purple-600 hover:bg-purple-700">{shop.category}</Badge>
                <Badge
                  variant={isShopOpen ? "default" : "destructive"}
                  className={isShopOpen ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {isShopOpen ? "Buka" : "Tutup"}
                </Badge>
                {/* </CHANGE> */}
                {shop.verified && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    <BadgeCheck className="w-3 h-3 mr-1" /> Terverifikasi
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{shop.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-slate-200 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {shop.location}
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-medium">{shop.rating}</span>
                  <span className="text-slate-400">({shop.reviews} ulasan)</span>
                </div>
              </div>
            </div>
            <Button
              size="lg"
              className={`${isShopOpen ? "bg-green-600 hover:bg-green-700" : "bg-slate-500 hover:bg-slate-600"} text-white gap-2`}
              disabled={!isShopOpen}
            >
              <Phone className="w-4 h-4" />
              {isShopOpen ? "Hubungi Penjual" : "Toko Tutup"}
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Shop Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Tentang Toko</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{shop.description}</p>
              <div className="flex flex-wrap gap-2">
                {shop.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Products */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Produk ({shopProducts.length})</h2>

            {shopProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {shopProducts.map((product) => (
                  <Link key={product.id} href={`/produk/${product.id}`} className="group">
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all flex h-full">
                      <div className="w-1/3 relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-4 flex flex-col justify-between">
                        <div>
                          <h3 className="font-medium text-slate-900 group-hover:text-purple-600 transition-colors line-clamp-2 mb-1">
                            {product.name}
                          </h3>
                          <p className="text-sm text-slate-500 line-clamp-2 mb-2">{product.description}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-bold text-orange-600">
                            Rp {product.price.toLocaleString("id-ID")}
                            {product.unit ? `/${product.unit}` : ""}
                          </span>
                          <Button size="sm" variant="outline" className="h-8 text-xs bg-transparent">
                            Detail
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-slate-200 border-dashed">
                <p className="text-slate-500">Belum ada produk yang ditampilkan.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
