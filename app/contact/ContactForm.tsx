"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    data.access_key =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Your enquiry has been submitted successfully!");
        form.reset();
      } else {
        setStatus("Submission failed. Please try again.");
      }
    } catch {
      setStatus("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        name="name"
        type="text"
        placeholder="Full Name"
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-3"
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-3"
      />

      <input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-3"
      />

      <select
        name="subject"
        defaultValue=""
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-3"
      >
        <option value="" disabled>
          Select enquiry type
        </option>
        <option value="Contracting">Contracting</option>
        <option value="Supply">Supply</option>
        <option value="Project Enquiry">Project Enquiry</option>
        <option value="Other">Other</option>
      </select>

      <textarea
        name="message"
        rows={4}
        placeholder="Write your message..."
        required
        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 disabled:opacity-60"
      >
        <Send size={18} />
        {loading ? "Sending..." : "Send Enquiry"}
      </button>

      {status && (
        <p role="status" className="text-sm text-gray-700">
          {status}
        </p>
      )}
    </form>
  );
}