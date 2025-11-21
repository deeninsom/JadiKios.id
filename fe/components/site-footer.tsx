import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                K
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">jadikios</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Platform digital yang menghubungkan UMKM lokal dengan pelanggan di sekitar mereka. Dukung usaha lokal,
              majukan ekonomi bangsa.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-4">Kategori</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="#" className="hover:text-purple-600">
                  Kuliner
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-600">
                  Fashion Pria & Wanita
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-600">
                  Jasa Rumah Tangga
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-600">
                  Elektronik & Gadget
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="#" className="hover:text-purple-600">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-600">
                  Karir
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-600">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-4">Ikuti Kami</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
