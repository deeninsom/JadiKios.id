"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, ShoppingBag, Users, Settings, LogOut, Store, ShoppingCart, CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Produk",
    href: "/dashboard/products",
    icon: ShoppingBag,
  },
  {
    title: "Pelanggan",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Pesanan",
    href: "/dashboard/orders",
    icon: ShoppingCart,
  },
  {
    title: "Langganan",
    href: "/dashboard/subscription",
    icon: CreditCard,
  },
  // </CHANGE>
  {
    title: "Pengaturan",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex w-64 flex-col bg-white border-r min-h-screen">
      <div className="p-6 border-b">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-linear-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
            K
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">jadikios</span>
        </Link>
      </div>

      <div className="flex-1 py-6 flex flex-col gap-1 px-4">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
              pathname === item.href
                ? "bg-purple-50 text-purple-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.title}
          </Link>
        ))}
      </div>

      <div className="p-4 border-t space-y-2">
        <Link
          href="/demo-store"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
        >
          <Store className="w-5 h-5" />
          Lihat Toko
        </Link>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
          <LogOut className="w-5 h-5" />
          Keluar
        </button>
      </div>
    </div>
  )
}
