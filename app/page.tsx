"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    const res = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      alert("Quote request sent!");
      setForm({ name: "", phone: "", message: "" });
    } else {
      alert("Something went wrong.");
    }
  };

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
            href="sms:5155095282?body=Hi%20I%20need%20a%20junk%20removal%20quote"
            className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Text for Quote
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Serving Des Moines & surrounding areas
        </p>
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
            ["Full Load", "$800+"],
          ].map(([title, price], i) => (
            <div key={i} className="border p-6 rounded-xl">
              <p className="font-semibold mb-2">{title}</p>
              <p className="text-2xl font-bold">{price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL FORM */}
      <section className="bg-gray-50 px-6 py-20" id="quote">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Get a Free Quote
          </h2>

          <p className="text-center text-gray-600 mb-8">
            Fill this out and we’ll contact you fast.
          </p>

          <div className="space-y-4 bg-white p-6 rounded-xl border">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              placeholder="What needs removed?"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              rows={4}
              className="w-full border p-3 rounded-lg"
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold"
            >
              {loading ? "Sending..." : "Send Quote Request"}
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} True Cleanup. All rights reserved.
      </footer>

    </main>
  );
}