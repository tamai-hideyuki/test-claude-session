import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EmojiIcon } from "@/components/atoms/EmojiIcon"
import type { GourmetItem } from "@/data/types"
import { cn } from "@/lib/utils"

interface ResultCardProps {
  item: GourmetItem | null
  visible: boolean
}

export function ResultCard({ item, visible }: ResultCardProps) {
  if (!item || !visible) return null

  return (
    <Card className={cn("border-amber-400 animate-in zoom-in-90 duration-400")}>
      <CardContent className="text-center space-y-3">
        <EmojiIcon emoji={item.emoji} size="xl" className="mx-auto" />
        <h3 className="text-xl font-extrabold">{item.name}</h3>
        <p className="text-sm text-muted-foreground">📍 {item.area}</p>
        <p className="text-sm leading-7">{item.desc}</p>
        <div className="flex gap-1.5 justify-center flex-wrap">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-amber-50 text-amber-700 border-amber-200">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-base font-bold text-primary">次はこれ食べよう！</p>
      </CardContent>
    </Card>
  )
}
