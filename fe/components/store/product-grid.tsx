"use client"

import Image from "next/image"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  description: string
}

interface ProductGridProps {
  products: Product[]
  onAddToCart: (product: Product) => void
}

export function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">Produk tidak ditemukan</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <Card
          key={product.id}
          className="overflow-hidden flex flex-col h-full border-none shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="relative aspect-square bg-muted">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
          <CardContent className="p-3 flex-1">
            <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
            <h3 className="font-medium text-sm sm:text-base line-clamp-2 mb-1">{product.name}</h3>
            <p className="font-bold text-primary">
              {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(
                product.price,
              )}
            </p>
          </CardContent>
          <CardFooter className="p-3 pt-0">
            <Button className="w-full" size="sm" variant="secondary" onClick={() => onAddToCart(product)}>
              <Plus className="h-4 w-4 mr-1" /> Tambah
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
