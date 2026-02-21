import { StationDot } from "@/components/atoms/StationDot"

interface RouteMapProps {
  stations: string[]
  selectedStation: string
  onSelectStation: (station: string) => void
}

export function RouteMap({ stations, selectedStation, onSelectStation }: RouteMapProps) {
  const allStations = [
    { name: "全駅", key: "all" },
    ...stations.map((s) => ({ name: s, key: s })),
  ]

  return (
    <div className="relative py-6 overflow-x-auto">
      <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-primary to-primary/70 rounded-full -translate-y-1/2" />
      <div className="flex justify-between relative min-w-full px-4">
        {allStations.map((s) => (
          <StationDot
            key={s.key}
            name={s.name}
            active={selectedStation === s.key}
            onClick={() => onSelectStation(s.key)}
          />
        ))}
      </div>
    </div>
  )
}
