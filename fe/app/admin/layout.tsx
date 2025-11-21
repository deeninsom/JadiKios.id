import type React from "react"
import Link from "next/link"
import { LayoutDashboard, Users, Store, CreditCard, LogOut, Settings } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Admin Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-slate-900 text-slate-300 min-h-screen">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
              A
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Admin Panel</span>
          </div>
        </div>

        <div className="flex-1 py-6 flex flex-col gap-1 px-4">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium bg-purple-600 text-white transition-colors"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            <Users className="w-5 h-5" />
            Users
          </Link>
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            <Store className="w-5 h-5" />
            Stores
          </Link>
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            <CreditCard className="w-5 h-5" />
            Payments
          </Link>
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </div>

        <div className="p-4 border-t border-slate-800">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-slate-800 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}
