import type { Product, Category } from "@/types";

export const fallbackCategories: Category[] = [
  { slug: "chal", nameBn: "চাল", icon: "🍚", count: 2 },
  { slug: "dal", nameBn: "ডাল", icon: "🫘", count: 2 },
  { slug: "tel", nameBn: "তেল", icon: "🛢️", count: 1 },
  { slug: "sobji", nameBn: "সবজি", icon: "🥬", count: 1 },
  { slug: "mach", nameBn: "মাছ", icon: "🐟", count: 1 },
  { slug: "mangsho", nameBn: "মাংস", icon: "🍗", count: 1 },
  { slug: "dim-dudh", nameBn: "ডিম-দুধ", icon: "🥚", count: 1 },
  { slug: "mosla", nameBn: "মসলা", icon: "🌶️", count: 1 },
];

const makeProduct = (
  id: string,
  slug: string,
  nameBn: string,
  category: string,
  categoryNameBn: string,
  categoryIcon: string,
  unit: string,
  image: string,
  today: number,
  yesterday: number,
  lastWeek: number,
  lastMonth: number
): Product => {
  const pct = yesterday ? ((today - yesterday) / yesterday) * 100 : 0;

  return {
    id,
    slug,
    nameBn,
    category,
    categoryNameBn,
    categoryIcon,
    unit,
    image,
    today,
    yesterday,
    lastWeek,
    lastMonth,
    change: {
      dir: today > yesterday ? "up" : today < yesterday ? "down" : "flat",
      pct: Number(Math.abs(pct).toFixed(1)),
    },
    markets: [
      {
        name: "নমুনা বাজার",
        division: "ঢাকা",
        min: today - 5,
        max: today + 5,
        avg: today,
      },
    ],
  };
};

// এগুলো নমুনা ডেটা; বর্তমান যাচাইকৃত বাজারদর নয়।
export const fallbackProducts: Product[] = [
  makeProduct("sample-1", "miniket-rice", "মিনিকেট চাল", "chal", "চাল", "🍚", "কেজি", "/images/rice.jpg", 75, 73, 72, 70),
  makeProduct("sample-2", "nazirshail-rice", "নাজিরশাইল চাল", "chal", "চাল", "🍚", "কেজি", "/images/rice.jpg", 80, 82, 78, 76),
  makeProduct("sample-3", "masoor-dal", "মসুর ডাল", "dal", "ডাল", "🫘", "কেজি", "/images/dal.jpg", 120, 118, 115, 110),
  makeProduct("sample-4", "moong-dal", "মুগ ডাল", "dal", "ডাল", "🫘", "কেজি", "/images/dal.jpg", 150, 148, 145, 140),
  makeProduct("sample-5", "soybean-oil", "সয়াবিন তেল", "tel", "তেল", "🛢️", "লিটার", "/images/oil.jpg", 170, 168, 165, 160),
  makeProduct("sample-6", "potato", "আলু", "sobji", "সবজি", "🥔", "কেজি", "/images/potato.jpg", 35, 38, 40, 45),
  makeProduct("sample-7", "rohu-fish", "রুই মাছ", "mach", "মাছ", "🐟", "কেজি", "/images/fish.jpg", 350, 340, 330, 320),
  makeProduct("sample-8", "broiler-chicken", "ব্রয়লার মুরগি", "mangsho", "মাংস", "🍗", "কেজি", "/images/chicken.jpg", 190, 195, 200, 205),
  makeProduct("sample-9", "eggs", "মুরগির ডিম", "dim-dudh", "ডিম-দুধ", "🥚", "ডজন", "/images/eggs.jpg", 145, 140, 135, 130),
  makeProduct("sample-10", "turmeric", "হলুদ গুঁড়া", "mosla", "মসলা", "🌶️", "কেজি", "/images/turmeric.jpg", 280, 275, 270, 260),
];