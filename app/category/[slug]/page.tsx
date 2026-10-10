import { notFound } from "next/navigation";
import { getProducts } from "@/lib/api";
import { CategoryClient } from "@/components/category-client";
import { FloatingAssistant } from "@/components/floating-assistant";

const categoryMap: Record<string, string> = {
  "চাল": "chal",
  "ডাল": "dal",
  "তেল": "tel",
  "সবজি": "sobji",
  "মাছ": "mach",
  "মাংস": "mangsho",
  "ডিম-দুধ": "dim-dudh",
  "মসলা": "mosla",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const categoryName = decodeURIComponent(slug);
  const categorySlug = categoryMap[categoryName];

  let allProducts;

  try {
    // সব product একবারে আনা হবে
    allProducts = await getProducts();
  } catch {
    notFound();
  }

  // বাংলা category name অথবা API category slug দিয়ে filter
  const products = allProducts.filter(
    (product) =>
      product.categoryNameBn === categoryName ||
      product.category === categorySlug ||
      product.category === categoryName
  );

  if (!products.length) {
    return (
      <main className="container-bd py-24 text-center">
        <h1 className="text-3xl font-bold">
          এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি
        </h1>

        <a
          href="/"
          className="btn-green mt-5 inline-block"
        >
          হোম পেজে ফিরে যান
        </a>
      </main>
    );
  }

  const categoryIcon = products[0].categoryIcon;
  const categoryTitle = products[0].categoryNameBn;

  return (
    <main className="py-8 md:py-10">
      <div className="container-bd">

        {/* Category Header */}
        <section className="glass rounded-2xl p-7 md:p-9">
          <div className="flex items-center gap-4">
            <span className="text-5xl">
              {categoryIcon}
            </span>

            <div>
              <h1 className="text-3xl font-extrabold md:text-4xl">
                {categoryTitle}
              </h1>

              <p className="text-[#6f7b73]">
                {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="mt-7">
          <CategoryClient products={products} />
        </section>

      </div>

      <FloatingAssistant />
    </main>
  );
}