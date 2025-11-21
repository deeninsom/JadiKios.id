"use client"

import { useState } from "react"
import { StoreHeader } from "@/components/store/store-header"
import { ProductGrid } from "@/components/store/product-grid"
import { CategoryFilter } from "@/components/store/category-filter"
import { StoreFooter } from "@/components/store/store-footer"
import { CartSheet } from "@/components/store/cart-sheet"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

// Mock Data
const PRODUCTS = [
  {
    id: "1",
    name: "Kopi Arabica Premium",
    category: "Minuman",
    price: 85000,
    image: "/steaming-coffee-cup.png",
    description: "Biji kopi pilihan dari dataran tinggi Gayo, diroasting medium dark.",
  },
  {
    id: "2",
    name: "Keripik Singkong Pedas",
    category: "Makanan Ringan",
    price: 25000,
    image: "/crispy-potato-chips.png",
    description: "Keripik singkong renyah dengan bumbu balado rahasia keluarga.",
  },
  {
    id: "3",
    name: "Batik Tulis Jogja",
    category: "Fashion",
    price: 450000,
    image: "/batik-fabric.png",
    description: "Kain batik tulis asli dengan motif parang rusak, bahan katun primisima.",
  },
  {
    id: "4",
    name: "Tas Rajut Handmade",
    category: "Kerajinan",
    price: 175000,
    image: "/bag.jpg",
    description: "Tas rajut tangan dengan benang nilon berkualitas, kuat dan modis.",
  },
  {
    id: "5",
    name: "Sambal Bawang Bu Rudy",
    category: "Makanan",
    price: 35000,
    image: "/bowl-of-chili.png",
    description: "Sambal bawang pedas nampol, cocok untuk teman makan nasi hangat.",
  },
  {
    id: "6",
    name: "Kaos Polos Cotton Combed",
    category: "Fashion",
    price: 65000,
    image: "/plain-white-tshirt.png",
    description: "Kaos polos bahan cotton combed 30s, adem dan menyerap keringat.",
  },
]

const CATEGORIES = ["Semua", "Makanan", "Minuman", "Fashion", "Kerajinan", "Makanan Ringan"]

export type CartItem = {
  product: (typeof PRODUCTS)[0]
  quantity: number
}

export default function DemoStorePage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [searchQuery, setSearchQuery] = useState("")
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === "Semua" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const addToCart = (product: (typeof PRODUCTS)[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) => (item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { product, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            return { ...item, quantity: Math.max(0, item.quantity + delta) }
          }
          return item
        })
        .filter((item) => item.quantity > 0),
    )
  }

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="pb-20">
      <StoreHeader
        storeName="Toko Berkah Jaya"
        onSearch={setSearchQuery}
        cartCount={totalItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="container mx-auto px-4 py-6">
        <CategoryFilter categories={CATEGORIES} selected={selectedCategory} onSelect={setSelectedCategory} />

        <div className="mt-6">
          <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
        </div>
      </main>

      <StoreFooter />

      <CartSheet
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
      />

      {/* Floating Cart Button for Mobile */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          <Button
            size="lg"
            className="rounded-full shadow-lg h-14 w-14 p-0 bg-primary text-primary-foreground"
            onClick={() => setIsCartOpen(true)}
          >
            <div className="relative">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            </div>
          </Button>
        </div>
      )}
    </div>
  )
}
