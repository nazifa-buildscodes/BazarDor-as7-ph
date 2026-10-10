
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { changeLabel, money, unitBn } from "@/lib/utils";
import type { Product } from "@/types";

const cats = [
  ["চাল", "চাল", "🍚"],
  ["ডাল", "ডাল", "🫘"],
  ["তেল", "তেল", "🫙"],
  ["সবজি", "সবজি", "🥬"],
  ["মাছ", "মাছ", "🐟"],
  ["মাংস", "মাংস", "🍗"],
  ["ডিম-দুধ", "ডিম-দুধ", "🥛"],
  ["মসলা", "মসলা", "🌶️"],
];

export function Header({ ticker = [] }: { ticker?: Product[] }) {
  const path = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const logged = !!session?.user;

  const signout = async () => {
    setAccountMenuOpen(false);
    setOpen(false);

    try {
      await authClient.signOut();
      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <>
      <header className="relative z-40 bg-white/95">
        {/* Main Navbar */}
        <div className="container-bd flex min-h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-[#078f45] text-xl text-white">
              🛒
            </span>

            <span>
              <b className="block text-[21px] leading-5">
                বাজার দর
              </b>

              <small className="text-xs text-[#879188]">
                বৃহস্পতিবার, ৮ অক্টোবর, ২০২৬
              </small>
            </span>
          </Link>

          {/* Desktop Auth */}
          <div className="hidden items-center gap-3 md:flex">
            {logged ? (
              <div className="relative">
                {/* Name + Avatar + Dropdown Arrow */}
                <button
                  type="button"
                  onClick={() =>
                    setAccountMenuOpen((previous) => !previous)
                  }
                  aria-expanded={accountMenuOpen}
                  aria-haspopup="menu"
                  className="flex items-center gap-2 rounded-full px-2 py-2 transition hover:bg-[#f0f5f1]"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#079447] text-sm font-bold text-white">
                    {session?.user.name?.charAt(0).toUpperCase() || "N"}
                  </span>

                  <span className="max-w-32 truncate text-sm font-semibold">
                    {session?.user.name || "User"}
                  </span>

                  <span className="text-xs text-[#66736b]">
                    {accountMenuOpen ? "⌃" : "⌄"}
                  </span>
                </button>

                {/* Account Dropdown */}
                {accountMenuOpen && (
                  <>
                    {/* Click outside to close */}
                    <button
                      type="button"
                      aria-label="Close account menu"
                      className="fixed inset-0 z-40 cursor-default"
                      onClick={() => setAccountMenuOpen(false)}
                    />

                    <div
                      role="menu"
                      className="absolute right-0 top-full z-50 mt-3 w-68 rounded-2xl border border-[#e1e8e2] bg-white p-3 shadow-xl"
                    >
                      {/* User information */}
                      <div className="border-b border-[#e8eee9] px-3 pb-3">
                        <p className="truncate font-semibold text-[#26352b]">
                          {session?.user.name || "User"}
                        </p>

                        <p className="truncate text-sm text-[#89938c]">
                          {session?.user.email}
                        </p>
                      </div>

                      {/* My Profile */}
                      <Link
                        href="/profile"
                        role="menuitem"
                        onClick={() => setAccountMenuOpen(false)}
                        className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-[#26352b] transition hover:bg-[#f0f5f1]"
                      >
                        <span>👤</span>
                        <span>আমার প্রোফাইল</span>
                      </Link>

                      {/* Sign Out */}
                      <button
                        type="button"
                        role="menuitem"
                        onClick={signout}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-red-500 transition hover:bg-red-50"
                      >
                        <span>↩</span>
                        <span>সাইন আউট</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="rounded-lg px-3 py-2 font-semibold"
                >
                  সাইন ইন
                </Link>

                <Link
                  href="/signup"
                  className="btn-green ml-1"
                >
                  সাইন আপ
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-2xl md:hidden"
            onClick={() => setOpen((previous) => !previous)}
            aria-label="মেনু"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Categories */}
        <nav className="border-t border-[#eef2ef]">
          <div className="container-bd hide-scrollbar flex gap-5 overflow-x-auto py-3 text-sm font-semibold">
            {cats.map(([label, slug, icon]) => (
              <Link
                key={slug}
                href={`/category/${slug}`}
                className={`shrink-0 rounded-lg px-3 py-1.5 ${
                  path === `/category/${slug}`
                    ? "bg-[#078f45] text-white"
                    : ""
                }`}
              >
                {icon} {label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="border-t border-[#eef2ef] bg-white p-4 md:hidden">
            <div className="container-bd flex flex-col gap-3">
              {logged ? (
                <>
                  <div className="border-b border-[#e8eee9] pb-3">
                    <p className="font-semibold">
                      {session?.user.name || "User"}
                    </p>
                    <p className="truncate text-sm text-[#89938c]">
                      {session?.user.email}
                    </p>
                  </div>

                  <Link
                    href="/profile"
                    onClick={() => setOpen(false)}
                    className="rounded-lg py-2"
                  >
                    👤 আমার প্রোফাইল
                  </Link>

                  <button
                    type="button"
                    className="text-left text-red-600"
                    onClick={signout}
                  >
                    ↩ সাইন আউট
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/signin"
                    onClick={() => setOpen(false)}
                  >
                    সাইন ইন
                  </Link>

                  <Link
                    href="/signup"
                    onClick={() => setOpen(false)}
                  >
                    সাইন আপ
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Price Ticker */}
      <div className="ticker">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((p, i) => (
            <span
              key={`${p.id}-${i}`}
              className="border-r border-[#e7ece8] px-5 py-2 text-sm"
            >
              <span className="mr-2">{p.image}</span>
              {p.nameBn} {money(p.today)}/{unitBn(p.unit)}{" "}

              <span
                className={
                  p.change.dir === "down"
                    ? "text-[#079447]"
                    : p.change.dir === "up"
                    ? "text-red-500"
                    : "text-gray-500"
                }
              >
                {changeLabel(p.change.dir, p.change.pct)}
              </span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
