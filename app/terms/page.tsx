import Image from "next/image";

export default function Terms() {
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
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="text-gray-500 mt-2">Effective Date: 4/29/2026</p>
      </section>

      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-6 py-12 text-gray-700 leading-relaxed">

        <h2 className="font-semibold mt-6 mb-2">Services</h2>
        <p className="mb-4">
          True Cleanout provides junk removal and cleanout services subject to availability.
        </p>

        <h2 className="font-semibold mt-6 mb-2">Quotes</h2>
        <p className="mb-4">
          Quotes are estimates and may change based on actual job conditions.
        </p>

        <h2 className="font-semibold mt-6 mb-2">Scheduling</h2>
        <p className="mb-4">
          Customers must provide accurate details and access to the property.
        </p>

        <h2 className="font-semibold mt-6 mb-2">Payment</h2>
        <p className="mb-4">
          Payment is due upon completion unless otherwise agreed.
        </p>

        <h2 className="font-semibold mt-6 mb-2">Liability</h2>
        <p className="mb-4">
          We are not responsible for pre-existing damage or indirect damages.
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