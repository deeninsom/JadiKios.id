import { Button } from "@/components/ui/button"
import { Bell, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardHeader() {
  return (
    <header className="h-16 border-b bg-white px-6 flex items-center justify-between">

      <div className="flex items-center gap-4 justify-between w-full">
        <Button variant="ghost" size="icon" className="text-slate-500">
          <Bell className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-3 pl-4 border-l">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-medium text-slate-900">Budi Santoso</div>
            <div className="text-xs text-slate-500">Kopi Senja</div>
          </div>
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>BS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
