"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Store, User } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [userType, setUserType] = useState<"mitra" | "customer">("mitra")
  // </CHANGE>

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect to dashboard
    if (userType === "mitra") {
      router.push("/dashboard")
    } else {
      router.push("/")
    }
    // </CHANGE>
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-white">
        <div className="w-full max-w-md mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-slate-500 hover:text-purple-600 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
            <h1 className="text-3xl font-bold text-slate-900">Selamat Datang Kembali</h1>
            <p className="text-slate-600">
              {userType === "mitra"
                ? "Masuk untuk mengelola toko UMKM Anda."
                : "Masuk untuk mulai berbelanja di toko favorit Anda."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => setUserType("mitra")}
              className={`flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-md transition-all ${
                userType === "mitra" ? "bg-white text-purple-600 shadow-sm" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Store className="w-4 h-4" />
              Mitra UMKM
            </button>
            <button
              onClick={() => setUserType("customer")}
              className={`flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-md transition-all ${
                userType === "customer" ? "bg-white text-orange-600 shadow-sm" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <User className="w-4 h-4" />
              Pelanggan
            </button>
          </div>
          {/* </CHANGE> */}

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {userType === "mitra" ? (
              // Mitra Login Form
              <>
                <div className="space-y-2">
                  <Label htmlFor="identifier">Email atau Nomor HP</Label>
                  <Input id="identifier" placeholder="nama@toko.com atau 0812..." required className="h-11" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="#" className="text-sm font-medium text-purple-600 hover:underline">
                      Lupa password?
                    </Link>
                  </div>
                  <Input id="password" type="password" required className="h-11" />
                </div>
              </>
            ) : (
              // Customer Login Form (Simplified)
              <div className="space-y-2">
                <Label htmlFor="phone">Nomor WhatsApp</Label>
                <Input id="phone" type="tel" placeholder="0812-3456-7890" required className="h-11" />
                <p className="text-xs text-slate-500">Kami akan mengirimkan kode OTP ke nomor ini.</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full h-11 text-white font-medium rounded-lg transition-all hover:shadow-lg ${
                userType === "mitra"
                  ? "bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 hover:shadow-purple-500/25"
                  : "bg-orange-500 hover:bg-orange-600 hover:shadow-orange-500/25"
              }`}
            >
              {isLoading ? "Memproses..." : userType === "mitra" ? "Masuk ke Dashboard" : "Kirim Kode OTP"}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500">Atau masuk dengan</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-11 bg-transparent">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" className="h-11 bg-transparent">
              <Store className="mr-2 h-4 w-4" />
              Demo Toko
            </Button>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-slate-600">
            Belum punya akun?{" "}
            <Link href="/register" className="font-medium text-purple-600 hover:underline">
              Daftar sekarang
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:flex relative bg-slate-900 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 p-12 text-white max-w-lg">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-purple-500/20">
            <span className="text-3xl font-bold">K</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            {userType === "mitra"
              ? "Kelola Bisnis UMKM Anda dalam Satu Genggaman"
              : "Temukan Produk Lokal Terbaik di Sekitar Anda"}
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            {userType === "mitra"
              ? "Bergabunglah dengan ribuan pengusaha lokal lainnya. Buat katalog online, atur pesanan, dan jangkau pelanggan lebih luas dengan jadikios."
              : "Dukung UMKM lokal dengan berbelanja di jadikios. Temukan makanan enak, fashion unik, dan jasa terpercaya dengan mudah."}
          </p>

          {/* Testimonial Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                <img src="/placeholder.svg?height=100&width=100" alt="User" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-semibold">{userType === "mitra" ? "Bu Siti Aminah" : "Rina Wulandari"}</div>
                <div className="text-sm text-slate-400">
                  {userType === "mitra" ? "Pemilik Dapur Bu Sinta" : "Pelanggan Setia"}
                </div>
              </div>
            </div>
            <p className="text-slate-200 italic">
              {userType === "mitra"
                ? '"Sejak pakai jadikios, pesanan jadi lebih rapi dan pelanggan senang bisa lihat menu lengkap lewat HP."'
                : '"Suka banget belanja di sini, gampang cari jajanan pasar yang enak-enak dan langsung terhubung ke penjualnya."'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
