"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Mail, Phone, MapPin, ShoppingBag } from "lucide-react"

// Dummy customer data
const customersData = [
  {
    id: 1,
    name: "Ahmad Fauzi",
    email: "ahmad.fauzi@email.com",
    phone: "0812-3456-7890",
    location: "Jakarta Selatan",
    totalOrders: 12,
    totalSpent: 2450000,
    lastOrder: "2 hari lalu",
    status: "active",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    email: "siti.nur@email.com",
    phone: "0813-4567-8901",
    location: "Bandung",
    totalOrders: 8,
    totalSpent: 1230000,
    lastOrder: "5 hari lalu",
    status: "active",
  },
  {
    id: 3,
    name: "Budi Santoso",
    email: "budi.santoso@email.com",
    phone: "0821-5678-9012",
    location: "Surabaya",
    totalOrders: 15,
    totalSpent: 3100000,
    lastOrder: "1 hari lalu",
    status: "active",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    email: "dewi.lestari@email.com",
    phone: "0856-7890-1234",
    location: "Yogyakarta",
    totalOrders: 5,
    totalSpent: 890000,
    lastOrder: "1 minggu lalu",
    status: "inactive",
  },
  {
    id: 5,
    name: "Eko Prasetyo",
    email: "eko.prasetyo@email.com",
    phone: "0877-8901-2345",
    location: "Semarang",
    totalOrders: 20,
    totalSpent: 4500000,
    lastOrder: "Hari ini",
    status: "active",
  },
]

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCustomers = customersData.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone.includes(searchQuery),
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Pelanggan</h1>
        <p className="text-slate-600 mt-1">Kelola data pelanggan yang pernah memesan produk Anda</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Pelanggan</CardDescription>
            <CardTitle className="text-3xl">{customersData.length}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              <span className="text-green-600 font-medium">+3</span> pelanggan baru bulan ini
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Pelanggan Aktif</CardDescription>
            <CardTitle className="text-3xl">{customersData.filter((c) => c.status === "active").length}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Pernah memesan dalam 30 hari terakhir</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Rata-rata Pembelian</CardDescription>
            <CardTitle className="text-3xl">
              Rp {Math.round(customersData.reduce((sum, c) => sum + c.totalSpent, 0) / customersData.length / 1000)}
              rb
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Per pelanggan</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Daftar Pelanggan</CardTitle>
              <CardDescription>Semua pelanggan yang pernah memesan dari toko Anda</CardDescription>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Cari nama, email, atau telepon..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredCustomers.map((customer) => (
              <div
                key={customer.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-purple-600">
                      {customer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900">{customer.name}</h3>
                      {customer.status === "active" && (
                        <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                          Aktif
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5" />
                        {customer.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5" />
                        {customer.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {customer.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-slate-600">
                        <ShoppingBag className="w-3.5 h-3.5 inline mr-1" />
                        {customer.totalOrders} pesanan
                      </span>
                      <span className="text-slate-600">
                        Total:{" "}
                        <span className="font-medium text-slate-900">Rp {customer.totalSpent.toLocaleString()}</span>
                      </span>
                      <span className="text-slate-500">Terakhir: {customer.lastOrder}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Lihat Detail
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-green-600 hover:text-green-700 hover:bg-green-50 bg-transparent"
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
