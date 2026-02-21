import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EmojiIcon } from "@/components/atoms/EmojiIcon"
import type { EkibenItem } from "@/data/types"

interface EkibenCardProps {
  item: EkibenItem
  index: number
}

export function EkibenCard({ item, index }: EkibenCardProps) {
  return (
    <Card
      className="py-4 hover:border-primary/30 hover:-translate-y-0.5 transition-all animate-in fade-in slide-in-from-bottom-2"
      style={{ animationDelay: `${index * 50}ms`, animationFillMode: "both" }}
    >
      <CardContent className="flex gap-3 items-start">
        <EmojiIcon emoji={item.emoji} size="lg" className="pt-0.5" />
        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-sm font-bold">{item.name}</span>
            <Badge variant="secondary" className="text-[0.65rem] bg-blue-50 text-blue-600 border-blue-200">
              {item.station}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground">{item.maker}</p>
          <p className="text-xs leading-relaxed">{item.desc}</p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-primary">{item.price}</span>
            <div className="flex gap-1 flex-wrap">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-[0.6rem] px-1.5 py-0">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
