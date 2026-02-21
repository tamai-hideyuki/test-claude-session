export interface GourmetItem {
  name: string
  emoji: string
  area: string
  category: GourmetCategory
  tags: string[]
  desc: string
}

export type GourmetCategory =
  | "麺"
  | "ごはん"
  | "粉もの"
  | "海鮮"
  | "スイーツ"
  | "その他"

export interface EkibenItem {
  station: string
  name: string
  maker: string
  emoji: string
  price: string
  tags: string[]
  desc: string
}

export type Station =
  | "新横浜"
  | "名古屋"
  | "京都"
  | "新大阪"
  | "新神戸"
  | "岡山"
  | "広島"
