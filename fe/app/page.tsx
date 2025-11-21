import { MarketplaceHero } from "@/components/marketplace/marketplace-hero"
import { CategoryGrid } from "@/components/marketplace/category-grid"
import { FeaturedShops } from "@/components/marketplace/featured-shops"
import { RecentProducts } from "@/components/marketplace/recent-products"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <MarketplaceHero />
        <div className="container mx-auto px-4 py-12 space-y-16">
          <CategoryGrid />
          <FeaturedShops />
          <RecentProducts />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
