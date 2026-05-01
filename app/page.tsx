"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [files, setFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("phone", form.phone);
    formData.append("message", form.message);

    if (files) {
      Array.from(files).forEach((file) => {
        formData.append("photos", file);
      });
    }

    const res = await fetch("/api/quote", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
      setForm({ name: "", phone: "", message: "" });
      setFiles(null);
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900">

      {/* HERO */}
      <section className="px-6 py-20 bg-gradient-to-b from-lime-50 to-white text-center">
        <p className="text-lime-600 font-semibold mb-4">
          Serving Des Moines & Surrounding Areas
        </p>

        <div className="flex justify-center mb-8">
          <Image
            src="/Long Logo.png"
            alt="True Cleanout"
            width={900}
            height={220}
            className="w-full max-w-4xl h-auto"
          />
        </div>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
          Professional junk removal for homes, rentals, garages, and businesses.
          Send photos for faster quotes.
        </p>

        <p className="text-sm font-semibold text-gray-700 mb-8">
          Minimum pickup: $200
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#quote"
            className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-4 rounded-2xl font-semibold"
          >
            Get Free Quote
          </a>

          <a
            href="tel:5155095282"
            className="bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-2xl font-semibold"
          >
            Call (515) 509-5282
          </a>

          <a
            href="tel:5154507051"
            className="bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-2xl font-semibold"
          >
            Call (515) 450-7051
          </a>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="px-6 py-8 text-center border-y">
        <div className="flex flex-wrap justify-center gap-3 text-gray-700">
          ✔ Locally Owned • ✔ Upfront Pricing • ✔ Fast Response
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="px-6 py-16 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">
          Simple, Upfront Pricing
        </h2>

        <p className="text-xl font-semibold text-lime-600 mb-4">
          Starting at $200
        </p>

        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Every job is different, so pricing is based on how much space your items take up in the truck.
          We’ll give you a clear, upfront quote before any work begins — no surprises.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-gray-700 text-sm">
          <span>✔ Labor included</span>
          <span>✔ No hidden fees</span>
          <span>✔ Fast service</span>
        </div>

        <div className="mt-8">
          <a
            href="#quote"
            className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-3 rounded-xl font-semibold"
          >
            Get Exact Quote
          </a>
        </div>
      </section>

      {/* WHAT WE REMOVE */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What We Remove</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
          <div>🛋 Furniture</div>
          <div>🧊 Appliances</div>
          <div>🏠 Garage Cleanouts</div>
          <div>🌿 Yard Waste</div>
          <div>🏢 Office Junk</div>
          <div>🏚 Rental Cleanouts</div>
          <div>🧹 Job Site Cleanup</div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="px-6 py-20 bg-gray-50 flex-grow">
        <div className="max-w-2xl mx-auto bg-white border rounded-3xl p-8 shadow-sm">

          <h2 className="text-3xl font-bold text-center mb-4">
            Get a Free Quote
          </h2>

          <p className="text-center text-sm text-gray-500 mb-6">
            Minimum pickup: $200
          </p>

          {submitted ? (
            <div className="text-center text-lime-600 font-semibold">
              ✅ Quote submitted! We’ll contact you shortly.
            </div>
          ) : (
            <div className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border p-3 rounded-xl"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border p-3 rounded-xl"
              />

              <textarea
                placeholder="What needs removed?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full border p-3 rounded-xl"
              />

              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => setFiles(e.target.files)}
                className="w-full border p-3 rounded-xl"
              />

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-lime-500 hover:bg-lime-600 text-white py-3 rounded-xl font-semibold"
              >
                {loading ? "Sending..." : "Send Quote Request"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to be contacted via phone, text, or email. Message and data rates may apply.
              </p>

            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto border-t py-6 text-center text-sm text-gray-500 bg-white">
        <div className="mb-2">
          © {new Date().getFullYear()} True Cleanout. All rights reserved.
        </div>

        <div className="flex justify-center gap-4">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </footer>

    </main>
  );
}