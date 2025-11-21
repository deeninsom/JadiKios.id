import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { ProductTable } from "@/components/dashboard/product-table"

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Produk</h2>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <Plus className="mr-2 h-4 w-4" /> Tambah Produk
        </Button>
      </div>
      <ProductTable />
    </div>
  )
}
