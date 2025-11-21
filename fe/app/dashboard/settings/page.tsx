"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Store, User, Bell, Lock, Clock, Crown } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Pengaturan</h1>
        <p className="text-slate-600 mt-1">Kelola informasi toko dan preferensi akun Anda</p>
      </div>

      {/* Store Status and Hours Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-600" />
            <CardTitle>Status & Jam Operasional</CardTitle>
          </div>
          <CardDescription>Atur kapan toko Anda buka dan tutup</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 border rounded-lg bg-slate-50">
            <div className="space-y-0.5">
              <Label className="text-base">Status Toko</Label>
              <p className="text-sm text-slate-500">Aktifkan untuk menerima pesanan. Matikan jika toko sedang tutup.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-600">Tutup</span>
              <Switch defaultChecked />
              <span className="text-sm font-medium text-green-600">Buka</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="openTime">Jam Buka</Label>
              <Input id="openTime" type="time" defaultValue="08:00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="closeTime">Jam Tutup</Label>
              <Input id="closeTime" type="time" defaultValue="20:00" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subscription Tier Section */}
      <Card className="border-purple-200 bg-purple-50/50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-orange-500" />
            <CardTitle>Langganan & Fitur</CardTitle>
          </div>
          <CardDescription>Status paket langganan toko Anda saat ini</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg text-slate-900">Paket Premium</h3>
              <p className="text-sm text-slate-600">Berlaku hingga 30 Oktober 2023</p>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-purple-200 hover:bg-purple-100 text-purple-700 bg-transparent"
            >
              <Link href="/dashboard/subscription">Kelola Langganan</Link>
            </Button>
          </div>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
              Verified Badge
            </span>
            <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
              Prioritas Pencarian
            </span>
            <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
              Analytics Pro
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Store Profile */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Store className="w-5 h-5 text-purple-600" />
            <CardTitle>Profil Toko</CardTitle>
          </div>
          <CardDescription>Informasi publik yang akan ditampilkan di halaman toko Anda</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="storeName">Nama Toko</Label>
              <Input id="storeName" defaultValue="Warung Makan Bu Siti" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Kategori</Label>
              <Input id="category" defaultValue="Kuliner" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Deskripsi Toko</Label>
            <Textarea
              id="description"
              rows={4}
              defaultValue="Warung makan tradisional dengan menu masakan rumahan yang lezat. Buka setiap hari dari jam 07:00 - 21:00 WIB."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="address">Alamat</Label>
              <Input id="address" defaultValue="Jl. Merdeka No. 123, Jakarta Selatan" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Nomor WhatsApp</Label>
              <Input id="phone" defaultValue="0812-3456-7890" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="storeLogo">Logo Toko (URL)</Label>
            <Input id="storeLogo" placeholder="https://example.com/logo.png" />
            <p className="text-xs text-slate-500">Upload logo toko Anda atau masukkan URL gambar</p>
          </div>

          <Button className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600">
            Simpan Perubahan
          </Button>
        </CardContent>
      </Card>

      {/* Account Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-purple-600" />
            <CardTitle>Informasi Akun</CardTitle>
          </div>
          <CardDescription>Kelola data pribadi dan informasi login Anda</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Nama Lengkap</Label>
              <Input id="fullName" defaultValue="Siti Aminah" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="siti.aminah@email.com" />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Ubah Password
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Password Saat Ini</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">Password Baru</Label>
                <Input id="newPassword" type="password" />
              </div>
            </div>
          </div>

          <Button className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600">
            Update Akun
          </Button>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-purple-600" />
            <CardTitle>Notifikasi</CardTitle>
          </div>
          <CardDescription>Atur preferensi notifikasi yang ingin Anda terima</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Notifikasi Pesanan Baru</Label>
              <p className="text-sm text-slate-500">Terima notifikasi saat ada pesanan masuk</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email Marketing</Label>
              <p className="text-sm text-slate-500">Terima tips dan update fitur baru</p>
            </div>
            <Switch />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Notifikasi WhatsApp</Label>
              <p className="text-sm text-slate-500">Terima notifikasi via WhatsApp</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-red-600">Zona Bahaya</CardTitle>
          <CardDescription>Tindakan permanen yang tidak bisa dibatalkan</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
            <div>
              <h3 className="font-semibold text-slate-900">Hapus Akun</h3>
              <p className="text-sm text-slate-600">Hapus akun dan semua data toko Anda secara permanen</p>
            </div>
            <Button variant="destructive">Hapus Akun</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
