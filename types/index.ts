export type Change = { dir: "up" | "down" | "flat"; pct: number };
export type Market = { name: string; division: string; min: number; max: number; avg: number };
export type Product = { id: string; slug: string; nameBn: string; category: string; categoryNameBn: string; categoryIcon: string; unit: string; image: string; today: number; yesterday: number; lastWeek: number; lastMonth: number; change: Change; markets: Market[] };
export type Category = { slug: string; nameBn: string; icon: string; count?: number };
