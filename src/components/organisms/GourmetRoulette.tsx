import { useState, useRef, useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { RouletteItem } from "@/components/molecules/RouletteItem"
import { ResultCard } from "@/components/molecules/ResultCard"
import { FilterGroup } from "@/components/molecules/FilterGroup"
import { gourmetItems } from "@/data/gourmet"
import type { GourmetItem } from "@/data/types"

const CATEGORY_OPTIONS = [
  { label: "すべて", value: "all" },
  { label: "🍜 麺", value: "麺" },
  { label: "🍚 ごはん", value: "ごはん" },
  { label: "🥞 粉もの", value: "粉もの" },
  { label: "🦪 海鮮", value: "海鮮" },
  { label: "🍰 スイーツ", value: "スイーツ" },
  { label: "🍛 その他", value: "その他" },
]

const ITEM_HEIGHT = 64
const REPEAT_COUNT = 8

export function GourmetRoulette() {
  const [category, setCategory] = useState("all")
  const [isSpinning, setIsSpinning] = useState(false)
  const [result, setResult] = useState<GourmetItem | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [hasSpun, setHasSpun] = useState(false)
  const stripRef = useRef<HTMLDivElement>(null)

  const filtered = useMemo(() => {
    const items = category === "all"
      ? gourmetItems
      : gourmetItems.filter((g) => g.category === category)
    return items.length > 0 ? items : gourmetItems
  }, [category])

  const repeatedItems = useMemo(() => {
    const arr: GourmetItem[] = []
    for (let i = 0; i < REPEAT_COUNT; i++) {
      arr.push(...filtered)
    }
    return arr
  }, [filtered])

  const spin = useCallback(() => {
    if (isSpinning || filtered.length === 0) return
    setIsSpinning(true)
    setShowResult(false)
    setHasSpun(true)

    const strip = stripRef.current
    if (!strip) return

    const totalItems = filtered.length
    const spins = 3 + Math.floor(Math.random() * 4)
    const targetIndex = Math.floor(Math.random() * totalItems)
    const targetItem = filtered[targetIndex]
    const centerOffset = 68
    const totalDistance = spins * totalItems * ITEM_HEIGHT + targetIndex * ITEM_HEIGHT - centerOffset

    strip.style.transition = "none"
    strip.style.transform = "translateY(0)"
    strip.offsetHeight // force reflow

    const duration = 2500 + spins * 400
    strip.style.transition = `transform ${duration}ms cubic-bezier(0.15, 0.8, 0.3, 1)`
    strip.style.transform = `translateY(-${totalDistance}px)`

    setTimeout(() => {
      setResult(targetItem)
      setShowResult(true)
      setIsSpinning(false)
    }, duration + 200)
  }, [isSpinning, filtered])

  const handleCategoryChange = useCallback((value: string) => {
    setCategory(value)
    setShowResult(false)
    // Reset strip position
    if (stripRef.current) {
      stripRef.current.style.transition = "none"
      stripRef.current.style.transform = "translateY(0)"
    }
  }, [])

  return (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <h2 className="text-lg font-bold">広島ご当地グルメルーレット</h2>
        <p className="text-sm text-muted-foreground">広島で何を食べるか迷ったら、ルーレットにおまかせ！</p>
      </div>

      <div className="flex flex-col items-center gap-5">
        {/* Roulette window */}
        <div className="w-full max-w-[360px] h-[200px] overflow-hidden relative rounded-xl bg-card shadow-lg border-2 border-border">
          {/* Highlight bar */}
          <div className="absolute top-1/2 left-0 right-0 h-16 -translate-y-1/2 border-t-[2.5px] border-b-[2.5px] border-primary bg-primary/5 z-20 pointer-events-none" />
          {/* Fade top */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-card to-transparent z-10 pointer-events-none" />
          {/* Fade bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent z-10 pointer-events-none" />
          {/* Strip */}
          <div ref={stripRef} className="flex flex-col transition-transform duration-100 ease-linear">
            {repeatedItems.map((item, i) => (
              <RouletteItem key={`${item.name}-${i}`} emoji={item.emoji} name={item.name} />
            ))}
          </div>
        </div>

        {/* Spin button */}
        <Button
          onClick={spin}
          disabled={isSpinning}
          size="lg"
          className="w-44 h-13 rounded-full text-base font-bold shadow-lg"
        >
          {isSpinning ? "🎲 まわし中…" : hasSpun ? "もう一回！" : "まわす！"}
        </Button>
      </div>

      {/* Result */}
      <ResultCard item={result} visible={showResult} />

      {/* Category filter */}
      <FilterGroup
        label="カテゴリで絞り込み："
        options={CATEGORY_OPTIONS}
        value={category}
        onChange={handleCategoryChange}
      />
    </div>
  )
}
