import { EmojiIcon } from "@/components/atoms/EmojiIcon"

interface RouletteItemProps {
  emoji: string
  name: string
}

export function RouletteItem({ emoji, name }: RouletteItemProps) {
  return (
    <div className="h-16 flex items-center gap-3 px-5 shrink-0">
      <EmojiIcon emoji={emoji} size="md" />
      <span className="text-base font-bold">{name}</span>
    </div>
  )
}
