"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Clock, CheckCircle, XCircle, Eye } from "lucide-react"

// Dummy orders data
const ordersData = [
  {
    id: "ORD-001",
    customer: "Ahmad Fauzi",
    items: ["Nasi Goreng Spesial", "Es Teh Manis"],
    total: 45000,
    status: "pending",
    date: "2024-01-20 14:30",
    phone: "0812-3456-7890",
  },
  {
    id: "ORD-002",
    customer: "Siti Nurhaliza",
    items: ["Kopi Latte", "Croissant"],
    total: 55000,
    status: "processing",
    date: "2024-01-20 13:15",
    phone: "0813-4567-8901",
  },
  {
    id: "ORD-003",
    customer: "Budi Santoso",
    items: ["Paket Ayam Geprek", "Es Jeruk"],
    total: 38000,
    status: "completed",
    date: "2024-01-20 12:00",
    phone: "0821-5678-9012",
  },
  {
    id: "ORD-004",
    customer: "Dewi Lestari",
    items: ["Cappuccino", "Sandwich"],
    total: 48000,
    status: "completed",
    date: "2024-01-19 15:45",
    phone: "0856-7890-1234",
  },
  {
    id: "ORD-005",
    customer: "Eko Prasetyo",
    items: ["Nasi Uduk", "Teh Tarik"],
    total: 32000,
    status: "cancelled",
    date: "2024-01-19 11:20",
    phone: "0877-8901-2345",
  },
]

const statusConfig = {
  pending: { label: "Menunggu", color: "bg-yellow-100 text-yellow-700 border-yellow-200", icon: Clock },
  processing: { label: "Diproses", color: "bg-blue-100 text-blue-700 border-blue-200", icon: Package },
  completed: { label: "Selesai", color: "bg-green-100 text-green-700 border-green-200", icon: CheckCircle },
  cancelled: { label: "Dibatalkan", color: "bg-red-100 text-red-700 border-red-200", icon: XCircle },
}

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredOrders = activeTab === "all" ? ordersData : ordersData.filter((order) => order.status === activeTab)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Riwayat Pesanan</h1>
        <p className="text-slate-600 mt-1">Kelola dan pantau semua pesanan dari pelanggan</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Pesanan</CardDescription>
            <CardTitle className="text-3xl">{ordersData.length}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Sepanjang waktu</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Menunggu</CardDescription>
            <CardTitle className="text-3xl text-yellow-600">
              {ordersData.filter((o) => o.status === "pending").length}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Perlu ditindaklanjuti</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Diproses</CardDescription>
            <CardTitle className="text-3xl text-blue-600">
              {ordersData.filter((o) => o.status === "processing").length}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Sedang dikerjakan</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Selesai</CardDescription>
            <CardTitle className="text-3xl text-green-600">
              {ordersData.filter((o) => o.status === "completed").length}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Hari ini</p>
          </CardContent>
        </Card>
      </div>

      {/* Orders List */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Pesanan</CardTitle>
          <CardDescription>Lihat dan kelola pesanan berdasarkan status</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">Semua</TabsTrigger>
              <TabsTrigger value="pending">Menunggu</TabsTrigger>
              <TabsTrigger value="processing">Diproses</TabsTrigger>
              <TabsTrigger value="completed">Selesai</TabsTrigger>
              <TabsTrigger value="cancelled">Dibatalkan</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-6">
              <div className="space-y-4">
                {filteredOrders.map((order) => {
                  const StatusIcon = statusConfig[order.status].icon
                  return (
                    <div
                      key={order.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors gap-4"
                    >
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-semibold text-slate-900">{order.id}</span>
                          <Badge variant="secondary" className={statusConfig[order.status].color}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {statusConfig[order.status].label}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-slate-900">{order.customer}</p>
                          <p className="text-sm text-slate-600">{order.items.join(", ")}</p>
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <span>{order.date}</span>
                            <span>{order.phone}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-slate-600">Total</p>
                          <p className="text-lg font-bold text-slate-900">Rp {order.total.toLocaleString()}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          Detail
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
