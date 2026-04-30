import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900">

      {/* HEADER */}
      <section className="px-6 py-16 bg-gradient-to-b from-lime-50 to-white text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/Long Logo.png"
            alt="True Cleanout"
            width={600}
            height={150}
            className="w-full max-w-2xl h-auto"
          />
        </div>
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-gray-500 mt-2">Effective Date: 4/29/2026</p>
      </section>

      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-6 py-12 text-gray-700 leading-relaxed">
        <p className="mb-6">
          True Cleanout ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your information.
        </p>

        <h2 className="font-semibold mt-6 mb-2">Information We Collect</h2>
        <p className="mb-4">
          Name, phone number, email address, and details about your cleanout request.
        </p>

        <h2 className="font-semibold mt-6 mb-2">How We Use Your Information</h2>
        <p className="mb-4">
          To contact you, provide quotes, schedule services, and improve our services.
        </p>

        <h2 className="font-semibold mt-6 mb-2">Sharing of Information</h2>
        <p className="mb-4">
          We do not sell your data. We may use trusted tools such as email providers, automation tools, and spreadsheets to manage your request.
        </p>

        <h2 className="font-semibold mt-6 mb-2">Communication Consent</h2>
        <p className="mb-4">
          By submitting your information, you agree to be contacted via phone, text, or email.
        </p>

        <h2 className="font-semibold mt-6 mb-2">Contact</h2>
        <p>
          truecleanoutco@gmail.com<br />
          (515) 450-7051 or (515) 509-5282
        </p>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} True Cleanout
      </footer>

    </main>
  );
}