export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="text-center px-6 py-20 bg-gray-50">
        <h1 className="text-5xl font-bold mb-4">True Cleanup</h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Fast, affordable junk removal in Central Iowa. 
          We handle the heavy lifting so you don’t have to.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="tel:5155095282"
            className="bg-black text-white px-6 py-3 rounded-xl font-semibold"
          >
            Call Now
          </a>

          <a
            href="#quote"
            className="bg-gray-200 px-6 py-3 rounded-xl font-semibold"
          >
            Get Free Quote
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Serving Des Moines & surrounding areas
        </p>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Garage Cleanouts",
            "Furniture Removal",
            "Appliance Disposal",
            "Yard Waste Removal",
            "Construction Debris",
            "General Junk Hauling"
          ].map((service, i) => (
            <div key={i} className="p-6 border rounded-xl text-center">
              <p className="font-semibold">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          <div>
            <h3 className="font-semibold text-lg mb-2">Same Day Service</h3>
            <p className="text-gray-600">Quick response and fast turnaround times.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Upfront Pricing</h3>
            <p className="text-gray-600">No surprises. You know the cost before we start.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Locally Owned</h3>
            <p className="text-gray-600">Proudly serving Central Iowa residents.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 py-16 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Simple Pricing</h2>

        <p className="text-gray-600 mb-8">
          Minimum job size: <span className="font-semibold">$200</span>
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["Small Load", "$200+"],
            ["Half Load", "$400+"],
            ["3/4 Load", "$600+"],
            ["Full Load", "$800+"]
          ].map(([title, price], i) => (
            <div key={i} className="border p-6 rounded-xl">
              <p className="font-semibold mb-2">{title}</p>
              <p className="text-2xl font-bold">{price}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Final price depends on volume and material type. Heavy items may cost more.
        </p>
      </section>

      {/* QUOTE */}
      <section id="quote" className="bg-black text-white px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Get a Free Quote</h2>

        <p className="mb-6 text-gray-300">
          Call or text us for a fast, no-obligation quote.
        </p>

        <a
          href="tel:5155095282"
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
        >
          Call or Text Now
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} True Cleanup. All rights reserved.
      </footer>

    </main>
  )
}