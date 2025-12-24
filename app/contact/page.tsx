"use client"

import type React from "react"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/effred/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        alert("✅ Thank you for your message! We will get back to you soon.")
        setFormData({ name: "", email: "", company: "", message: "" })
      } else {
        alert("❌ Failed to send message. Please try again later.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center fade-in">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">Get In Touch</h1>
              <p className="text-xl text-gray-300">Let's discuss how we can transform your business</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="slide-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 rounded-lg font-semibold text-white transition ${
                      loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
                    }`}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="scale-in">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:info@effred.com" className="text-gray-600 hover:text-red-600">
                        info@effred.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-2xl">📍</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600">
                        Suncity Success Tower, Golf Course Ext Rd, The Close South, Sector 65, Gurugram, Haryana 122101
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 p-8 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Business Hours</h3>
                  <p className="text-gray-600 text-sm">
                    Monday - Friday: 9:00 AM - 6:00 PM PST
                    <br />
                    Saturday - Sunday: Available for emergencies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
