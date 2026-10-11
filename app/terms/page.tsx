
export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-800">
      <a href="/" className="text-green-700 hover:underline">
        ← Back to BazarDor
      </a>

      <h1 className="mt-6 text-3xl font-bold">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-gray-500">
        Last updated: October 11, 2026
      </p>

      <p className="mt-6">
        Welcome to BazarDor. By accessing or using this
        website, you agree to these Terms of Service. If you
        do not agree, please do not use the service.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        1. About BazarDor
      </h2>
      <p className="mt-3">
        BazarDor is a website designed to help users explore
        everyday product prices in Bangladesh. Available
        features may change as the project develops.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        2. Price Information
      </h2>
      <p className="mt-3">
        Prices and product information are provided for
        general information only. They may be estimated,
        delayed, incomplete, or different from prices at
        individual shops and markets. Please verify prices
        with the seller before making a purchase. BazarDor
        does not guarantee that every listed price is current
        or accurate.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        3. User Accounts
      </h2>
      <p className="mt-3">
        You are responsible for using your account appropriately
        and keeping your sign-in methods secure. You must not
        attempt to access another person’s account or interfere
        with the operation or security of the website.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        4. Acceptable Use
      </h2>
      <p className="mt-3">
        You agree not to misuse the service, disrupt its
        operation, attempt unauthorized access, or use the
        website for unlawful activities.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        5. Third-Party Services
      </h2>
      <p className="mt-3">
        Sign-in may be provided by third-party services such
        as Google. Your use of those services is also subject
        to their applicable terms and policies.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        6. Availability and Changes
      </h2>
      <p className="mt-3">
        We may update, modify, suspend, or discontinue parts
        of BazarDor as the project evolves. We do not guarantee
        uninterrupted availability or error-free operation.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        7. Disclaimer
      </h2>
      <p className="mt-3">
        To the extent permitted by applicable law, BazarDor is
        provided on an “as is” and “as available” basis without
        guarantees that all information will be complete,
        accurate, or continuously available.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        8. Changes to These Terms
      </h2>
      <p className="mt-3">
        We may revise these terms as the service changes.
        Updates will be published on this page with a revised
        date. Continued use after an update means you accept
        the revised terms, to the extent permitted by law.
      </p>

      <h2 className="mt-8 text-xl font-semibold">9. Contact</h2>
      <p className="mt-3">
        For questions about these terms, contact:
        {" "}
        <a
          className="text-green-700 underline"
          href="mailto:nowsin.edu@gmail.com"
        >
          nowsin.edu@gmail.com
        </a>
      </p>
    </main>
  );
}
