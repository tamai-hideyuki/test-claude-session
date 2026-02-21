import { cn } from "@/lib/utils"

interface EmojiIconProps {
  emoji: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const sizeClasses = {
  sm: "text-lg w-7 text-center",
  md: "text-2xl w-10 text-center",
  lg: "text-3xl w-12 text-center",
  xl: "text-5xl",
} as const

export function EmojiIcon({ emoji, size = "md", className }: EmojiIconProps) {
  return (
    <span className={cn(sizeClasses[size], "leading-none shrink-0", className)}>
      {emoji}
    </span>
  )
}
