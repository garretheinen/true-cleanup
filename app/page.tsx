export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gray-50">
        <h1 className="text-5xl font-bold mb-4">
          True Cleanup
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          Fast, affordable junk removal and cleanouts in Central Iowa.
          We haul it, you relax.
        </p>

        <div className="flex gap-4">
          <a
            href="tel:5551234567"
            className="bg-black text-white px-6 py-3 rounded-xl font-semibold"
          >
            Call Now
          </a>

          <a
            href="sms:515-509-5282 or 515-450-7051"
            className="bg-gray-200 px-6 py-3 rounded-xl font-semibold"
          >
            Text for Quote
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Available same-day & weekend jobs
        </p>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-2">Junk Removal</h3>
            <p className="text-gray-600">
              Furniture, appliances, garage cleanouts, and general junk hauling.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-2">Cleanouts</h3>
            <p className="text-gray-600">
              Full property cleanouts for homes, rentals, and garages.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-2">Heavy Hauling</h3>
            <p className="text-gray-600">
              Construction debris, yard waste, and bulky items.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Simple Pricing</h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-bold text-xl">$150+</h3>
              <p className="text-gray-600 mt-2">Small loads / single items</p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-bold text-xl">$300+</h3>
              <p className="text-gray-600 mt-2">Garage or room cleanouts</p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-bold text-xl">$500+</h3>
              <p className="text-gray-600 mt-2">Full property cleanouts</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Why True Cleanup
        </h2>

        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Fast response times (same-day when available)</li>
          <li>✔ Local Central Iowa team</li>
          <li>✔ Fair, upfront pricing</li>
          <li>✔ We do all the heavy lifting</li>
        </ul>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-black text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to clear your space?
        </h2>

        <p className="mb-6 text-gray-300">
          Call or text now for a fast quote.
        </p>

        <a
          <a
  href="tel:5155095282"
  className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
>
  Call True Cleanup
</a>
        >
          Call True Cleanup
        </a>

        <p className="text-sm text-gray-400 mt-6">
          Serving Des Moines & surrounding areas
        </p>
      </section>

    </main>
  )
}