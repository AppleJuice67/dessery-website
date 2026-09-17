import { useState } from "react"
import { CONTACT_INFO, SOCIAL_LINKS } from "../../data/siteData"
import type { ContactFormData } from "../../types"

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    service: "",
    message: "",
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: "", email: "", service: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 bg-[#fff8f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-pink-100 text-pink-500 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#3d1810]">
            Let&apos;s Make Something{" "}
            <span style={{ fontFamily: "var(--font-display)" }} className="text-pink-500">
              Sweet
            </span>{" "}
            Together 💌
          </h2>
          <p className="text-[#a0738a] font-medium mt-2 max-w-sm mx-auto text-sm">
            Ready to order or have questions? We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-5">
            <h3 className="font-black text-[#3d1810] text-lg mb-4">Find Us</h3>
            {CONTACT_INFO.map(({ icon, label, value, sub }) => (
              <div key={label} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-pink-100">
                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-lg flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-[#a0738a] uppercase tracking-wider">{label}</p>
                  <p className="font-black text-[#3d1810] text-sm mt-0.5">{value}</p>
                  <p className="text-xs text-[#a0738a] mt-0.5">{sub}</p>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="p-4 bg-white rounded-2xl border border-pink-100">
              <p className="text-xs font-bold text-[#a0738a] uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ label, handle, bg, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 ${bg} text-white rounded-xl p-2.5 text-center hover:opacity-90 transition-opacity`}
                  >
                    <p className="text-[10px] font-bold">{label}</p>
                    <p className="text-[9px] opacity-80 mt-0.5">{handle}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-3xl border border-pink-100 p-8 shadow-sm">
            <h3 className="font-black text-[#3d1810] text-lg mb-6">
              Send an Inquiry 📝
            </h3>

            {sent && (
              <div className="mb-5 bg-green-50 border border-green-200 text-green-700 text-sm font-semibold px-4 py-3 rounded-xl">
                💌 Thank you! We&apos;ll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#a0738a] uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maria Santos"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border-2 border-pink-100 focus:border-pink-400 rounded-xl px-4 py-3 text-sm text-[#3d1810] font-medium outline-none transition-colors placeholder:text-pink-200 bg-[#fff8f0]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#a0738a] uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. maria@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border-2 border-pink-100 focus:border-pink-400 rounded-xl px-4 py-3 text-sm text-[#3d1810] font-medium outline-none transition-colors placeholder:text-pink-200 bg-[#fff8f0]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#a0738a] uppercase tracking-wider mb-1.5">
                  Service / Inquiry Type
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full border-2 border-pink-100 focus:border-pink-400 rounded-xl px-4 py-3 text-sm text-[#3d1810] font-medium outline-none transition-colors bg-[#fff8f0] appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option>Regular Order</option>
                  <option>Custom Pop Cakes</option>
                  <option>Event / Party Order</option>
                  <option>Gift Box</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#a0738a] uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what you need — flavor, quantity, date, occasion..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border-2 border-pink-100 focus:border-pink-400 rounded-xl px-4 py-3 text-sm text-[#3d1810] font-medium outline-none transition-colors placeholder:text-pink-200 bg-[#fff8f0] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-black py-3.5 rounded-xl transition-all btn-primary-glow text-sm"
              >
                Send Inquiry 💌
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
