import { useState, useMemo } from "react"
import { RouteMap } from "@/components/molecules/RouteMap"
import { EkibenCard } from "@/components/molecules/EkibenCard"
import { FilterGroup } from "@/components/molecules/FilterGroup"
import { stations, ekibenItems } from "@/data/ekiben"

const TAG_OPTIONS = [
  { label: "すべて", value: "all" },
  { label: "🥩 肉", value: "肉" },
  { label: "🐟 魚介", value: "魚介" },
  { label: "⭐ 定番", value: "定番" },
  { label: "📍 ご当地", value: "ご当地" },
]

export function EkibenSelector() {
  const [station, setStation] = useState("all")
  const [tag, setTag] = useState("all")

  const filteredItems = useMemo(() => {
    let items = [...ekibenItems]
    if (station !== "all") {
      items = items.filter((e) => e.station === station)
    }
    if (tag !== "all") {
      items = items.filter((e) => e.tags.includes(tag))
    }
    return items
  }, [station, tag])

  return (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <h2 className="text-lg font-bold">駅弁セレクター</h2>
        <p className="text-sm text-muted-foreground">新横浜〜広島の途中駅で買える名物駅弁を紹介！</p>
      </div>

      {/* Route map */}
      <RouteMap
        stations={stations}
        selectedStation={station}
        onSelectStation={setStation}
      />

      {/* Tag filter */}
      <FilterGroup
        label="好みで絞り込み："
        options={TAG_OPTIONS}
        value={tag}
        onChange={setTag}
      />

      {/* Ekiben list */}
      <div className="flex flex-col gap-3">
        {filteredItems.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground text-sm">
            該当する駅弁がありません。<br />
            フィルターを変えてみてください 🍱
          </div>
        ) : (
          filteredItems.map((item, i) => (
            <EkibenCard key={`${item.station}-${item.name}`} item={item} index={i} />
          ))
        )}
      </div>
    </div>
  )
}
