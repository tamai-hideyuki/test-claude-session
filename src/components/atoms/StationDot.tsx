import { cn } from "@/lib/utils"

interface StationDotProps {
  name: string
  active: boolean
  onClick: () => void
}

export function StationDot({ name, active, onClick }: StationDotProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 z-10 transition-transform hover:scale-110 cursor-pointer",
      )}
    >
      <span
        className={cn(
          "text-[0.65rem] font-bold whitespace-nowrap transition-colors",
          active ? "text-primary" : "text-muted-foreground"
        )}
      >
        {name}
      </span>
      <span
        className={cn(
          "w-4 h-4 rounded-full border-[3px] transition-all",
          active
            ? "bg-primary border-primary shadow-[0_0_0_4px_rgba(var(--primary),0.25)]"
            : "bg-background border-primary/50"
        )}
      />
    </button>
  )
}
