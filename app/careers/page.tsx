"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"

export default function Careers() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    resume: "",
    description: "",
    experience: "",
  })

  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your application! We will review it shortly.")
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      resume: "",
      description: "",
      experience: "",
    })
    setFile(null)
  }

  const positions = [
    "Senior Software Engineer",
    "Cloud Architect",
    "DevOps Engineer",
    "AI/ML Engineer",
    "Solutions Architect",
    "Business Analyst",
    "Product Manager",
    "UX/UI Designer",
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center fade-in">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl text-gray-300">Be part of the automation revolution</p>
            </div>
          </div>
        </section>

        {/* Career Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Work at Effred?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Innovation", desc: "Work with cutting-edge technology and latest frameworks" },
                { title: "Growth", desc: "Continuous learning opportunities and professional development" },
                { title: "Culture", desc: "Collaborative environment with passionate team members" },
                { title: "Benefits", desc: "Competitive salary, health insurance, and flexible work" },
                { title: "Impact", desc: "Make real difference in customer success" },
                { title: "Balance", desc: "Work-life balance with remote work options" },
              ].map((benefit, i) => (
                <div key={i} className="slide-up p-6 bg-gray-50 rounded-lg" style={{ animationDelay: `${i * 0.1}s` }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Apply Now</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Your full name"
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                    <select
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    >
                      <option value="">Select position</option>
                      {positions.map((pos) => (
                        <option key={pos} value={pos}>
                          {pos}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume (PDF/DOC)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-600 transition cursor-pointer">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="resume-upload"
                      required
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer flex flex-col items-center gap-2">
                      <span className="text-2xl">📄</span>
                      <span className="text-sm font-medium text-gray-700">
                        {file ? file.name : "Click to upload your resume"}
                      </span>
                      <span className="text-xs text-gray-500">PDF or DOC (Max 5MB)</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your experience</label>
                  <textarea
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Briefly describe your professional experience..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to join Effred?
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Share your motivation and what excites you about this role..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
