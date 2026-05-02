"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "", // ✅ email state
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
    formData.append("email", form.email); // ✅ IMPORTANT (this is what sends it)
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
      setForm({ name: "", phone: "", email: "", message: "" });
      setFiles(null);
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900">

      {/* FORM SECTION ONLY SHOWN (rest unchanged) */}
      <section id="quote" className="px-6 py-20 bg-gray-50 flex-grow">
        <div className="max-w-2xl mx-auto bg-white border rounded-3xl p-8">

          <h2 className="text-3xl font-bold text-center mb-6">
            Get a Free Quote
          </h2>

          {submitted ? (
            <div className="text-center text-lime-600 font-semibold">
              ✅ Quote submitted! We’ll contact you shortly.
            </div>
          ) : (
            <div className="space-y-4">

              {/* NAME */}
              <input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border p-3 rounded-xl"
              />

              {/* PHONE */}
              <input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border p-3 rounded-xl"
              />

              {/* EMAIL (YOUR CODE - CORRECT) */}
              <input
                type="email"
                name="email"
                placeholder="Email (optional)"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border p-3 rounded-xl"
              />

              {/* MESSAGE */}
              <textarea
                placeholder="What needs removed?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border p-3 rounded-xl"
              />

              {/* FILE UPLOAD */}
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => setFiles(e.target.files)}
                className="w-full border p-3 rounded-xl"
              />

              {/* SUBMIT */}
              <button
                onClick={handleSubmit}
                className="w-full bg-lime-500 text-white py-3 rounded-xl"
              >
                {loading ? "Sending..." : "Get Quote"}
              </button>

            </div>
          )}
        </div>
      </section>

    </main>
  );
}