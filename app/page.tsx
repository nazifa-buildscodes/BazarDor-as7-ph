import { getProducts } from "@/lib/api";
import { HomeContent } from "@/components/home-content";
import { HomeSkeleton } from "@/components/home-skeleton";
import { FloatingAssistant } from "@/components/floating-assistant";

export default async function Home() {
  try {
    const products = await getProducts();

    console.log("Homepage products loaded:", products.length);

    return (
      <>
        <HomeContent products={products} />
        <FloatingAssistant />
      </>
    );
  } catch (error) {
    console.error("Homepage product loading failed:", error);

    return (
      <main className="container-bd py-20">
        <HomeSkeleton />
        <p className="mt-6 text-center text-red-500">
          পণ্যের তথ্য লোড করা যাচ্ছে না। কিছুক্ষণ পর আবার চেষ্টা করুন।
        </p>
      </main>
    );
  }
}