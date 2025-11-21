import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Users, Target, Heart, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-orange-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
              Membangun Ekonomi Lokal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                Bersama UMKM Indonesia
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
              jadikios adalah platform yang menghubungkan pelanggan dengan UMKM lokal terbaik di sekitar mereka. Kami
              percaya bahwa setiap usaha kecil memiliki cerita dan produk luar biasa yang layak dikenal lebih luas.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 border-purple-100">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Misi Kami</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Memberdayakan UMKM Indonesia dengan teknologi digital yang mudah digunakan, sehingga mereka dapat
                    menjangkau lebih banyak pelanggan dan mengembangkan bisnis mereka.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Visi Kami</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Menjadi platform terdepan yang menghubungkan jutaan pelanggan dengan UMKM lokal, menciptakan
                    ekosistem ekonomi yang berkelanjutan dan inklusif.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-slate-400">Mitra UMKM</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">10K+</div>
                <div className="text-slate-400">Produk</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">50K+</div>
                <div className="text-slate-400">Pelanggan</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">25+</div>
                <div className="text-slate-400">Kota</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Nilai-Nilai Kami</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Komunitas</h3>
                <p className="text-slate-600 text-pretty">
                  Membangun ekosistem yang saling mendukung antara UMKM dan pelanggan lokal.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Kepercayaan</h3>
                <p className="text-slate-600 text-pretty">
                  Menjaga kualitas dan transparansi dalam setiap transaksi untuk kepuasan semua pihak.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Pertumbuhan</h3>
                <p className="text-slate-600 text-pretty">
                  Mendorong pertumbuhan berkelanjutan bagi UMKM melalui teknologi dan edukasi.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
