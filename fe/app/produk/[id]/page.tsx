import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ShoppingCart, Share2, Heart, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { products, shops } from "@/lib/data"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  const shop = shops.find((s) => s.id === product.shopId)

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square relative bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-6">
              <Badge className="mb-3 bg-purple-100 text-purple-700 hover:bg-purple-200 border-0">
                {product.category}
              </Badge>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{product.name}</h1>
              <p className="text-3xl font-bold text-orange-600">
                Rp {product.price.toLocaleString("id-ID")}
                {product.unit && <span className="text-lg text-slate-500 font-normal">/{product.unit}</span>}
              </p>
            </div>

            <div className="prose prose-slate mb-8">
              <p className="text-slate-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="flex gap-3 mb-8">
              <Button size="lg" className="flex-1 bg-green-600 hover:bg-green-700 text-white gap-2">
                <ShoppingCart className="w-5 h-5" />
                Pesan via WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="w-12 px-0 bg-transparent">
                <Heart className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-12 px-0 bg-transparent">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Shop Card */}
            {shop && (
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden bg-slate-100">
                    <Image src={shop.image || "/placeholder.svg"} alt={shop.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{shop.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="w-3 h-3" />
                      {shop.location}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto bg-transparent" asChild>
                    <Link href={`/toko/${shop.id}`}>Kunjungi Toko</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-sm border-t border-slate-100 pt-4">
                  <div>
                    <div className="font-bold text-slate-900">{shop.rating}</div>
                    <div className="text-slate-500 text-xs">Rating</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{shop.reviews}</div>
                    <div className="text-slate-500 text-xs">Ulasan</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{shop.verified ? "Ya" : "Tidak"}</div>
                    <div className="text-slate-500 text-xs">Terverifikasi</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
