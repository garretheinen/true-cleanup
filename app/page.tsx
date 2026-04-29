"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
      setForm({ name: "", phone: "", message: "" });
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="px-6 py-24 bg-gray-50 text-center">
        <p className="text-green-600 font-semibold mb-3">Serving Des Moines & Surrounding Areas</p>
        <h1 className="text-5xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight mb-6">
          Fast Junk Removal in Central Iowa
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Professional junk removal for homes, rentals, garages, and businesses across Des Moines and surrounding areas. Send us photos or request a quote now. Quick response times and affordable haul-away service.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="sms:5155095282" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold">
            Get Free Quote
          </a>
          <a href="tel:5155095282" className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold">
            Call Now
          </a>
        </div>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">
        {[
          "Same-Day Availability",
          "Locally Owned",
          "Upfront Pricing",
          "Fast Response",
        ].map((item) => (
          <div key={item} className="border rounded-xl p-6 font-semibold">{item}</div>
        ))}
      </section>

      <section className="px-6 py-20 bg-white max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What We Remove</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Furniture",
            "Appliances",
            "Garage Cleanouts",
            "Yard Waste",
            "Rental Property Junk",
            "Office & Business Items",
          ].map((item) => (
            <div key={item} className="border rounded-xl p-6 text-center">{item}</div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20" id="quote">
        <div className="max-w-2xl mx-auto bg-white border rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-4">Get a Free Quote</h2>
          <p className="text-center text-gray-600 mb-8">Fill this out and we’ll contact you fast.</p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Quote Submitted!</h3>
              <p className="text-gray-600">We received your request and will contact you shortly.</p>
            </div>
          ) : (
          <div className="space-y-4">
            <input className="w-full border p-3 rounded-lg" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input className="w-full border p-3 rounded-lg" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <textarea className="w-full border p-3 rounded-lg" rows={4} placeholder="What needs removed?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <button onClick={handleSubmit} disabled={loading} className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold">
              {loading ? "Sending..." : "Send Quote Request"}
            </button>
          </div>
          )}
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} True Cleanout. All rights reserved.
      </footer>
    </main>
  );
}