"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { LayoutDashboard, ShoppingBag, Users, Settings, ShoppingCart, CreditCard } from "lucide-react"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const sidebarItems = [
  { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { title: "Produk", href: "/dashboard/products", icon: ShoppingBag },
  { title: "Pelanggan", href: "/dashboard/customers", icon: Users },
  { title: "Pesanan", href: "/dashboard/orders", icon: ShoppingCart },
  { title: "Langganan", href: "/dashboard/subscription", icon: CreditCard },
  { title: "Pengaturan", href: "/dashboard/settings", icon: Settings },
]

export function MobileSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="absolute top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md">
          <Menu className="w-5 h-5 text-slate-700" />
        </SheetTrigger>

        <SheetContent side="left" className="p-0 w-64">
          <div className="p-4 border-b">
            <SheetTitle className="text-lg font-semibold text-slate-800">
              Menu Dashboard
            </SheetTitle>
          </div>

          <nav className="px-3 py-4 flex flex-col gap-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)} // << AUTO CLOSE
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition",
                  pathname === item.href
                    ? "bg-purple-50 text-purple-600"
                    : "text-slate-600 hover:bg-slate-100"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
