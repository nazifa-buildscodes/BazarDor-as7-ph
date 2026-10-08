import type { Category, Product } from "@/types";
const BASE = process.env.NEXT_PUBLIC_BAZAR_API || "https://api.api-store.workers.dev/api/bazardor";
async function get<T>(path: string): Promise<T> { const res = await fetch(`${BASE}${path}`, { next: { revalidate: 300 } }); if (!res.ok) throw new Error(`API request failed: ${res.status}`); return res.json(); }
export async function getProducts(category?: string) { return get<Product[]>(category ? `/products?category=${encodeURIComponent(category)}` : "/products"); }
export async function getProduct(slug: string) { const all = await getProducts(); const p = all.find(x => x.slug === slug || x.id === slug); if (!p) throw new Error("Product not found"); return p; }
export async function getCategories() { return get<Category[]>("/categories"); }
export async function getCategory(slug: string) { const data = await get<Category[]>(`/categories/${encodeURIComponent(slug)}`); return data; }
