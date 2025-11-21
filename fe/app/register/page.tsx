"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, CheckCircle2, Store, User } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [userType, setUserType] = useState<"mitra" | "customer">("mitra")
  // </CHANGE>

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration process
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Redirect to login after successful registration
    router.push("/login")
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Visual */}
      <div className="hidden lg:flex relative bg-slate-900 items-center justify-center overflow-hidden order-2 lg:order-1">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/30 to-orange-500/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 p-12 text-white max-w-lg">
          <h2 className="text-4xl font-bold mb-8 leading-tight">
            {userType === "mitra" ? "Mulai Perjalanan Digital Bisnis Anda" : "Bergabung dengan Komunitas jadikios"}
          </h2>

          <div className="space-y-6">
            {userType === "mitra" ? (
              <>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                    <CheckCircle2 className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Katalog Online Gratis</h3>
                    <p className="text-slate-400">Buat toko online Anda sendiri dalam hitungan menit tanpa biaya.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 border border-orange-500/30">
                    <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Terhubung ke WhatsApp</h3>
                    <p className="text-slate-400">Pesanan masuk langsung ke WhatsApp Anda, mudah dan cepat.</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                    <CheckCircle2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Simpan Favorit</h3>
                    <p className="text-slate-400">Simpan toko dan produk favorit Anda agar mudah ditemukan kembali.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 border border-green-500/30">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Riwayat Pesanan</h3>
                    <p className="text-slate-400">Pantau semua pesanan Anda di satu tempat.</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-white order-1 lg:order-2">
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
            <h1 className="text-3xl font-bold text-slate-900">Daftar Akun Baru</h1>
            <p className="text-slate-600">
              {userType === "mitra"
                ? "Lengkapi data diri untuk mulai berjualan."
                : "Buat akun untuk pengalaman belanja yang lebih baik."}
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
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nama Depan</Label>
                <Input id="firstName" placeholder="Budi" required className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nama Belakang</Label>
                <Input id="lastName" placeholder="Santoso" required className="h-11" />
              </div>
            </div>

            {userType === "mitra" && (
              <div className="space-y-2">
                <Label htmlFor="businessName">Nama Usaha / Toko</Label>
                <Input id="businessName" placeholder="Contoh: Kopi Senja" required className="h-11" />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="phone">Nomor WhatsApp</Label>
              <Input id="phone" type="tel" placeholder="0812-3456-7890" required className="h-11" />
            </div>

            {userType === "mitra" && (
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="nama@toko.com" required className="h-11" />
              </div>
            )}

            {userType === "mitra" && (
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required className="h-11" />
                <p className="text-xs text-slate-500">Minimal 8 karakter dengan kombinasi huruf dan angka.</p>
              </div>
            )}

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 rounded border-slate-300 text-purple-600 focus:ring-purple-600"
                required
              />
              <Label htmlFor="terms" className="text-sm font-normal text-slate-600 leading-relaxed">
                Saya menyetujui{" "}
                <Link href="#" className="text-purple-600 hover:underline">
                  Syarat & Ketentuan
                </Link>{" "}
                serta{" "}
                <Link href="#" className="text-purple-600 hover:underline">
                  Kebijakan Privasi
                </Link>{" "}
                yang berlaku.
              </Label>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full h-11 text-white font-medium rounded-lg transition-all hover:shadow-lg ${
                userType === "mitra"
                  ? "bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 hover:shadow-purple-500/25"
                  : "bg-orange-500 hover:bg-orange-600 hover:shadow-orange-500/25"
              }`}
            >
              {isLoading ? "Memproses..." : "Buat Akun"}
            </Button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-slate-600">
            Sudah punya akun?{" "}
            <Link href="/login" className="font-medium text-purple-600 hover:underline">
              Masuk disini
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
