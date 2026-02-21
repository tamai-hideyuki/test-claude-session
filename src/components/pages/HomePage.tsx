import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { AppHeader } from "@/components/organisms/AppHeader"
import { GourmetRoulette } from "@/components/organisms/GourmetRoulette"
import { EkibenSelector } from "@/components/organisms/EkibenSelector"

export function HomePage() {
  return (
    <div className="min-h-dvh bg-background">
      <AppHeader />

      <Tabs defaultValue="roulette" className="w-full">
        <TabsList className="sticky top-0 z-50 rounded-none border-b bg-card h-12">
          <TabsTrigger value="roulette" className="gap-1.5">
            <span className="text-lg">🎰</span>
            <span>ご当地グルメルーレット</span>
          </TabsTrigger>
          <TabsTrigger value="ekiben" className="gap-1.5">
            <span className="text-lg">🍱</span>
            <span>駅弁セレクター</span>
          </TabsTrigger>
        </TabsList>

        <main className="max-w-[640px] mx-auto p-4">
          <TabsContent value="roulette">
            <GourmetRoulette />
          </TabsContent>
          <TabsContent value="ekiben">
            <EkibenSelector />
          </TabsContent>
        </main>
      </Tabs>

      <footer className="text-center py-6 text-xs text-muted-foreground border-t mt-8">
        新横浜→広島 新幹線の旅を楽しもう 🚅
      </footer>
    </div>
  )
}
