import type { Category, Product } from "@/types";
import {
  fallbackCategories,
  fallbackProducts,
} from "@/lib/fallback-data";

const BASE =
  process.env.NEXT_PUBLIC_BAZAR_API ||
  "https://openapi.programming-hero.com/api/bazardor";

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`API request failed: ${res.status}`);
  }

  const json = await res.json();

  // Support both a raw response and a response wrapped in "data".
  return (json?.data ?? json) as T;
}

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

export async function getProducts(
  category?: string
): Promise<Product[]> {
  const slug = normalizeCategorySlug(category);

  try {
    const products = await get<Product[]>(
      slug
        ? `/products?category=${encodeURIComponent(slug)}`
        : "/products"
    );

    if (Array.isArray(products) && products.length > 0) {
      return products;
    }
  } catch (error) {
    console.error("Products API unavailable; using fallback data.", error);
  }

  return slug
    ? fallbackProducts.filter(
        (product) =>
          product.category === slug ||
          product.categoryNameBn === category
      )
    : fallbackProducts;
}

export async function getProduct(slug: string): Promise<Product> {
  try {
    const products = await getProducts();
    const product = products.find(
      (item) => item.slug === slug || item.id === slug
    );

    if (product) return product;
  } catch (error) {
    console.error("Could not load product.", error);
  }

  const product = fallbackProducts.find(
    (item) => item.slug === slug || item.id === slug
  );

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
}

export async function getCategories(): Promise<Category[]> {
  try {
    const categories = await get<Category[]>("/categories");

    if (Array.isArray(categories) && categories.length > 0) {
      return categories;
    }
  } catch (error) {
    console.error("Categories API unavailable; using fallback data.", error);
  }

  return fallbackCategories;
}

export async function getCategory(slug: string): Promise<Category[]> {
  const normalizedSlug = normalizeCategorySlug(slug);

  try {
    const categories = await get<Category[]>(
      `/categories/${encodeURIComponent(normalizedSlug || slug)}`
    );

    if (Array.isArray(categories) && categories.length > 0) {
      return categories;
    }
  } catch (error) {
    console.error("Category API unavailable; using fallback data.", error);
  }

  return fallbackCategories.filter(
    (category) =>
      category.slug === normalizedSlug || category.nameBn === slug
  );
}