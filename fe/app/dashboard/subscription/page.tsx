"use client"

import { Check, CreditCard, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SubscriptionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Langganan & Pembayaran</h1>
        <p className="text-slate-600 mt-1">Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
        {/* Standard Plan */}
        <Card className="relative">
          <CardHeader>
            <CardTitle className="text-2xl">Standard</CardTitle>
            <CardDescription>Untuk UMKM yang baru memulai</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">Gratis</span>
              <span className="text-slate-500">/selamanya</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Katalog Produk Terbatas (Max 10)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Link WhatsApp Checkout</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Dashboard Dasar</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full bg-transparent" disabled>
              Paket Saat Ini
            </Button>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card className="relative border-purple-500 shadow-lg">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <Badge className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 border-0 px-4 py-1">
              Paling Populer
            </Badge>
          </div>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              Premium <Crown className="w-5 h-5 text-orange-500 fill-orange-500" />
            </CardTitle>
            <CardDescription>Untuk bisnis yang ingin berkembang</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">Rp 99.000</span>
              <span className="text-slate-500">/bulan</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Katalog Produk Unlimited</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Badge "Terverifikasi"</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Prioritas di Hasil Pencarian</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Laporan Penjualan Lengkap</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Support Prioritas 24/7</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600">
              Upgrade Sekarang
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Payment History */}
      <Card className="mt-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-purple-600" />
            <CardTitle>Riwayat Pembayaran</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 font-medium">
                <tr>
                  <th className="p-4">Tanggal</th>
                  <th className="p-4">Keterangan</th>
                  <th className="p-4">Jumlah</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Invoice</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4">1 Okt 2023</td>
                  <td className="p-4">Paket Premium (Bulanan)</td>
                  <td className="p-4">Rp 99.000</td>
                  <td className="p-4">
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Lunas</Badge>
                  </td>
                  <td className="p-4 text-right">
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="p-4">1 Sep 2023</td>
                  <td className="p-4">Paket Premium (Bulanan)</td>
                  <td className="p-4">Rp 99.000</td>
                  <td className="p-4">
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Lunas</Badge>
                  </td>
                  <td className="p-4 text-right">
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
