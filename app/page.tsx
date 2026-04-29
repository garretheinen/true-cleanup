"use client";

import { useState } from "react";
import Image from "next/image";

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
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="px-6 py-20 bg-gradient-to-b from-lime-50 to-white text-center">
        <p className="text-lime-600 font-semibold mb-4 tracking-wide">Serving Des Moines & Surrounding Areas</p>
        <div className="flex justify-center mb-8">
          <Image src="/Long Logo.png" alt="True Cleanout" width={900} height={220} className="w-full max-w-4xl h-auto" priority />
        </div>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Professional junk removal for homes, rentals, garages, and businesses across Des Moines and surrounding areas. Send us photos or request a quote now. Quick response times and affordable haul-away service.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#quote" className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-sm transition">Get Free Quote</a>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:5155095282" className="bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-2xl font-semibold shadow-sm transition">Call Garret</a>
            <a href="tel:5154507051" className="bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-2xl font-semibold shadow-sm transition">Call Chandler</a>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 text-center border-y bg-white">
        <div className="max-w-5xl mx-auto text-sm md:text-base font-medium text-gray-700 flex flex-wrap justify-center gap-3 md:gap-5">
          <span>✔ Same-Day Availability</span>
          <span>•</span>
          <span>✔ Locally Owned</span>
          <span>•</span>
          <span>✔ Upfront Pricing</span>
          <span>•</span>
          <span>✔ Fast Response</span>
        </div>
      </section>

      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What We Remove</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 text-center text-base md:text-lg text-gray-700">
          <div>🛋 Furniture</div>
          <div>🧊 Appliances</div>
          <div>🏠 Garage Cleanouts</div>
          <div>🌿 Yard Waste</div>
          <div>🏢 Office Junk</div>
          <div>🏚 Rental Cleanouts</div>
        </div>
      </section>

      <section id="quote" className="px-6 py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto bg-white border rounded-3xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-3">Get a Free Quote</h2>
          <p className="text-center text-gray-600 mb-8">Fill this out and we’ll contact you fast.</p>

          {submitted ? (
            <div className="bg-lime-50 border border-lime-200 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="text-xl font-bold text-lime-600 mb-2">Quote Submitted!</h3>
              <p className="text-gray-600">We received your request and will contact you shortly.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <input className="w-full border p-3 rounded-xl" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input className="w-full border p-3 rounded-xl" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <textarea className="w-full border p-3 rounded-xl" rows={4} placeholder="What needs removed?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <button onClick={handleSubmit} disabled={loading} className="w-full bg-lime-500 hover:bg-lime-600 text-white py-3 rounded-xl font-semibold transition">
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