import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FilterChipProps {
  label: string
  active: boolean
  onClick: () => void
  className?: string
}

export function FilterChip({ label, active, onClick, className }: FilterChipProps) {
  return (
    <Button
      variant={active ? "default" : "outline"}
      size="sm"
      onClick={onClick}
      className={cn("rounded-full text-xs", className)}
    >
      {label}
    </Button>
  )
}
