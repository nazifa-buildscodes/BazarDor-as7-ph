import type { Category, Product } from "@/types";

const BASE =
  process.env.NEXT_PUBLIC_BAZAR_API ||
  "https://api.api-store.workers.dev/api/bazardor";

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`API request failed: ${res.status}`);
  }

  return res.json();
}

// Bengali category name → API category slug
const categorySlugMap: Record<string, string> = {
  "চাল": "chal",
  "ডাল": "dal",
  "তেল": "tel",
  "সবজি": "sobji",
  "মাছ": "mach",
  "মাংস": "mangsho",
  "ডিম-দুধ": "dim-dudh",
  "মসলা": "mosla",
};

function normalizeCategorySlug(category?: string) {
  if (!category) return undefined;

  return categorySlugMap[category] || category;
}

export async function getProducts(category?: string) {
  const slug = normalizeCategorySlug(category);

  return get<Product[]>(
    slug
      ? `/products?category=${encodeURIComponent(slug)}`
      : "/products"
  );
}

export async function getProduct(slug: string) {
  const all = await getProducts();

  const product = all.find(
    (item) => item.slug === slug || item.id === slug
  );

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
}

export async function getCategories() {
  return get<Category[]>("/categories");
}

export async function getCategory(slug: string) {
  const normalizedSlug = normalizeCategorySlug(slug);

  return get<Category[]>(
    `/categories/${encodeURIComponent(normalizedSlug || slug)}`
  );
}