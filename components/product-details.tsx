import type { Product } from "@/types";
import { money, changeLabel, bn, unitBn } from "@/lib/utils";

type MarketData = {
  name: string;
  division: string;
  min: number;
  max: number;
  avg: number;
};

function readValue(
  market: unknown,
  keys: string[]
): unknown {
  if (!market || typeof market !== "object") return undefined;

  const data = market as Record<string, unknown>;

  for (const key of keys) {
    const value = data[key];

    if (value !== undefined && value !== null && value !== "") {
      return value;
    }
  }

  return undefined;
}

function toNumber(value: unknown): number | undefined {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : undefined;
  }

  if (typeof value !== "string") return undefined;

  const englishDigits = value
    .replace(/[০-৯]/g, (digit) =>
      String("০১২৩৪৫৬৭৮৯".indexOf(digit))
    )
    .replace(/,/g, "")
    .match(/-?\d+(?:\.\d+)?/)?.[0];

  if (!englishDigits) return undefined;

  const result = Number(englishDigits);
  return Number.isFinite(result) ? result : undefined;
}

function normalizeMarkets(markets: unknown[]): MarketData[] {
  return markets.map((item, index) => {
    const nameValue = readValue(item, [
      "name",
      "nameBn",
      "marketName",
      "marketNameBn",
      "market",
      "marketBn",
      "bazarName",
      "bazaarName",
    ]);

    const divisionValue = readValue(item, [
      "division",
      "divisionBn",
      "divisionName",
      "district",
      "districtName",
      "location",
    ]);

    const minValue = toNumber(
      readValue(item, [
        "min",
        "minPrice",
        "minimum",
        "minimumPrice",
        "lowestPrice",
        "low",
      ])
    );

    const maxValue = toNumber(
      readValue(item, [
        "max",
        "maxPrice",
        "maximum",
        "maximumPrice",
        "highestPrice",
        "high",
      ])
    );

    const avgValue = toNumber(
      readValue(item, [
        "avg",
        "average",
        "avgPrice",
        "averagePrice",
        "mean",
      ])
    );

    const min = minValue ?? maxValue ?? avgValue ?? 0;
    const max = maxValue ?? minValue ?? avgValue ?? min;
    const avg =
      avgValue ?? (minValue !== undefined && maxValue !== undefined
        ? (min + max) / 2
        : min);

    return {
      name:
        typeof nameValue === "string" && nameValue.trim()
          ? nameValue
          : `বাজার ${bn(index + 1)}`,
      division:
        typeof divisionValue === "string" && divisionValue.trim()
          ? divisionValue
          : "তথ্য পাওয়া যায়নি",
      min,
      max,
      avg,
    };
  });
}

export function ProductDetails({ p }: { p: Product }) {
  const markets = normalizeMarkets(
    Array.isArray(p.markets) ? p.markets : []
  );

  const validMarkets = markets.filter(
    (market) =>
      Number.isFinite(market.min) &&
      Number.isFinite(market.max) &&
      Number.isFinite(market.avg)
  );

  const min = validMarkets.length
    ? Math.min(...validMarkets.map((market) => market.min))
    : p.today;

  const max = validMarkets.length
    ? Math.max(...validMarkets.map((market) => market.max))
    : p.today;

  const avg = validMarkets.length
    ? validMarkets.reduce((sum, market) => sum + market.avg, 0) /
      validMarkets.length
    : p.today;

  const changeText =
    p.change.dir === "up"
      ? "গতকালের তুলনায় আজ দাম বেড়েছে"
      : p.change.dir === "down"
        ? "গতকালের তুলনায় আজ দাম কমেছে"
        : "গতকালের তুলনায় আজ দাম অপরিবর্তিত";

  return (
    <main className="py-7 md:py-10">
      <div className="container-bd">
        <div className="mb-5 text-sm text-[#66736b]">
          <a href="/">হোম</a>
          <span className="mx-2">›</span>
          <a href={`/category/${p.category}`}>{p.categoryNameBn}</a>
          <span className="mx-2">›</span>
          <span>{p.nameBn}</span>
        </div>

        <section className="glass flex flex-col justify-between gap-5 rounded-2xl p-5 md:flex-row md:items-center md:p-6">
          <div className="flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center rounded-xl bg-[#f0f5f1] text-3xl">
              {p.image}
            </span>

            <div>
              <h1 className="text-3xl font-extrabold">{p.nameBn}</h1>
              <p className="text-sm text-[#758078]">
                প্রতি {unitBn(p.unit)} · {p.categoryNameBn}
              </p>
              <p className="mt-1 text-sm">
                {changeText} {bn(p.change.pct)}%
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#f0f5f1] px-7 py-4 text-center">
            <p className="text-sm text-[#6f7a72]">আজকের দাম</p>
            <strong className="block text-3xl">{bn(p.today)}</strong>
            <span>টাকা / {unitBn(p.unit)}</span>
            <div
              className={
                p.change.dir === "up"
                  ? "text-red-500"
                  : p.change.dir === "down"
                    ? "text-[#078d44]"
                    : "text-gray-500"
              }
            >
              {changeLabel(p.change.dir, p.change.pct)}
            </div>
          </div>
        </section>

        <section className="glass mt-5 rounded-2xl p-5 md:p-6">
          <h2 className="text-2xl font-extrabold">দামের সারসংক্ষেপ</h2>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-[#dce5de] p-5">
              <p className="text-sm text-[#6e7a72]">সর্বনিম্ন দাম</p>
              <strong className="mt-1 block text-2xl text-[#079447]">
                {money(min)}
              </strong>
              <p className="text-xs text-[#839087]">
                সবচেয়ে কম দামের বাজার
              </p>
            </div>

            <div className="rounded-xl border border-[#dce5de] p-5">
              <p className="text-sm text-[#6e7a72]">সর্বাধিক দাম</p>
              <strong className="mt-1 block text-2xl text-red-500">
                {money(max)}
              </strong>
              <p className="text-xs text-[#839087]">
                সবচেয়ে বেশি দামের বাজার
              </p>
            </div>

            <div className="rounded-xl border border-[#dce5de] p-5">
              <p className="text-sm text-[#6e7a72]">গড় দাম</p>
              <strong className="mt-1 block text-2xl text-[#079447]">
                {money(Math.round(avg * 100) / 100)}
              </strong>
              <p className="text-xs text-[#839087]">
                প্রতি {unitBn(p.unit)}-এর হিসাবে
              </p>
            </div>
          </div>

          <h2 className="mt-6 text-2xl font-extrabold">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="mt-3 overflow-x-auto rounded-xl border border-[#dce5de]">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b bg-white text-left text-[#6d7870]">
                  <th className="px-3 py-3">বাজার</th>
                  <th className="px-3 py-3">বিভাগ</th>
                  <th className="px-3 py-3">সর্বনিম্ন</th>
                  <th className="px-3 py-3">সর্বাধিক</th>
                  <th className="px-3 py-3">গড়</th>
                </tr>
              </thead>

              <tbody>
                {validMarkets.length > 0 ? (
                  validMarkets.map((market, index) => (
                    <tr
                      key={`${market.name}-${market.division}-${index}`}
                      className="border-b last:border-0 odd:bg-white even:bg-[#eef3ef]"
                    >
                      <td className="px-3 py-3">{market.name}</td>
                      <td className="px-3 py-3">{market.division}</td>
                      <td className="px-3 py-3">{money(market.min)}</td>
                      <td className="px-3 py-3">{money(market.max)}</td>
                      <td className="px-3 py-3 font-semibold">
                        {money(Math.round(market.avg * 100) / 100)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-3 py-8 text-center text-[#758078]"
                    >
                      বাজারের দামের তথ্য পাওয়া যায়নি।
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}