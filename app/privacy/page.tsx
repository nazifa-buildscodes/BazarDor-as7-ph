
export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-800">
      <a href="/" className="text-green-700 hover:underline">
        ← Back to BazarDor
      </a>

      <h1 className="mt-6 text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">
        Last updated: October 11, 2026
      </p>

      <p className="mt-6">
        This Privacy Policy explains how BazarDor collects, uses,
        and protects information when you use our website.
        BazarDor helps users explore and compare everyday
        product prices in Bangladesh.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        1. Information We Collect
      </h2>
      <p className="mt-3">
        When you sign in with Google, we receive basic profile
        information that Google shares with your permission,
        such as your name, email address, and profile picture
        when available. If you create an account using email
        and password, we process the account information needed
        to provide authentication.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        2. How We Use Information
      </h2>
      <p className="mt-3">
        We use account information to create and manage your
        account, authenticate your identity, maintain your
        signed-in session, and provide BazarDor features.
        We do not use Google account data for advertising.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        3. Storage and Security
      </h2>
      <p className="mt-3">
        Account information is processed and stored using the
        services configured for BazarDor, including its
        authentication system and database. We take reasonable
        measures to protect information, but no online service
        can guarantee absolute security.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        4. Sharing of Information
      </h2>
      <p className="mt-3">
        We do not sell personal information or Google user data.
        Information may be processed by infrastructure providers
        that help operate the website, such as hosting,
        authentication, and database providers, as necessary
        to provide the service.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        5. Retention and Your Choices
      </h2>
      <p className="mt-3">
        We retain account information as needed to operate
        your account and the service. To ask questions or
        request account-data removal, contact us using the
        email address below. We will review the request and
        handle it subject to applicable requirements and
        technical limitations.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        6. Third-Party Services
      </h2>
      <p className="mt-3">
        Google sign-in is subject to Google’s own terms and
        privacy policy. BazarDor does not receive your Google
        password when you sign in with Google.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        7. Changes to This Policy
      </h2>
      <p className="mt-3">
        We may update this policy when our service or data
        practices change. The latest version will be published
        on this page with its updated date.
      </p>

      <h2 className="mt-8 text-xl font-semibold">8. Contact</h2>
      <p className="mt-3">
        For privacy questions, contact:
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
