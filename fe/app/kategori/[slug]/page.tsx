import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Filter } from "lucide-react"
import { categories, shops, products } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    notFound()
  }

  const categoryShops = shops.filter((s) => s.category === category.name)
  const categoryProducts = products.filter((p) => p.category === category.name)

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className={`bg-${category.color.split(" ")[0].replace("bg-", "")} py-12 px-4`}>
        <div className="container mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
          <div className="flex items-center gap-4">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-white shadow-sm text-${category.color.split(" ")[1].replace("text-", "")}`}
            >
              <category.icon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{category.name}</h1>
              <p className="text-slate-600 mt-1">{category.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters (Visual only for now) */}
          <div className="w-full md:w-64 shrink-0 space-y-6">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 font-bold text-slate-900 mb-4">
                <Filter className="w-4 h-4" />
                Filter
              </div>
              <div className="space-y-3">
                <div className="text-sm font-medium text-slate-700">Lokasi</div>
                <div className="space-y-2">
                  {["Jakarta", "Bandung", "Yogyakarta", "Surabaya", "Bali"].map((loc) => (
                    <label key={loc} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                      />
                      {loc}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Mitra {category.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryShops.map((shop) => (
                  <Link key={shop.id} href={`/toko/${shop.id}`} className="group block">
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all h-full flex flex-col">
                      <div className="relative h-32 bg-slate-100">
                        <Image src={shop.image || "/placeholder.svg"} alt={shop.name} fill className="object-cover" />
                      </div>
                      <div className="p-4 flex-1">
                        <h3 className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                          {shop.name}
                        </h3>
                        <p className="text-xs text-slate-500 mb-2">{shop.location}</p>
                        <div className="flex flex-wrap gap-1">
                          {shop.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-[10px] h-5 px-1.5">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Produk {category.name}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {categoryProducts.map((product) => (
                  <Link key={product.id} href={`/produk/${product.id}`} className="group block">
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all h-full flex flex-col">
                      <div className="aspect-square relative bg-slate-100">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3 flex-1 flex flex-col">
                        <h3 className="font-medium text-slate-900 text-sm line-clamp-2 mb-1 group-hover:text-purple-600 transition-colors">
                          {product.name}
                        </h3>
                        <div className="mt-auto">
                          <p className="font-bold text-orange-600 text-sm">
                            Rp {product.price.toLocaleString("id-ID")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
