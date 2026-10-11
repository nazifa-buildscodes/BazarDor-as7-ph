
export function Footer() {
  return (
    <footer className="mt-16 border-t border-[#dbe5dd] bg-white/80 py-7">
      <div className="container-bd flex flex-col gap-3 text-sm text-[#69746d] md:flex-row md:items-center md:justify-between">
        <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>

        <p>
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/privacy"
            className="underline hover:text-green-700"
          >
            Privacy Policy
          </a>

          <a
            href="/terms"
            className="underline hover:text-green-700"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
