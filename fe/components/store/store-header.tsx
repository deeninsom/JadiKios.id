"use client"

import { Search, ShoppingCart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface StoreHeaderProps {
  storeName: string
  onSearch: (query: string) => void
  cartCount: number
  onOpenCart: () => void
  isOpen?: boolean
}

export function StoreHeader({ storeName, onSearch, cartCount, onOpenCart, isOpen = true }: StoreHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
            {storeName.charAt(0)}
          </div>
          <h1 className="font-bold text-lg truncate hidden sm:block">{storeName}</h1>
          <Badge
            variant={isOpen ? "default" : "destructive"}
            className={isOpen ? "bg-green-600 hover:bg-green-700" : ""}
          >
            {isOpen ? "Buka" : "Tutup"}
          </Badge>
        </div>

        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Cari produk..."
              className="w-full pl-9 bg-muted/50"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>

        <Button variant="ghost" size="icon" className="relative" onClick={onOpenCart}>
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 hover:bg-red-600">
              {cartCount}
            </Badge>
          )}
        </Button>
      </div>
    </header>
  )
}
