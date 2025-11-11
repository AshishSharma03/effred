"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import TrustedPartners from "@/components/trusted-partners"
import SuccessModal from "@/components/success-modal"
import { useState, useEffect } from "react"
import ContactModal from "@/components/contact-modal"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1677442d019cecf8b6b0c8dc66adcd3d4ef4d37b?w=1400&h=900&fit=crop",
      title: "Accelerate Your Digital Transformation",
      desc: "Enterprise-grade automation and AI solutions designed for modern businesses seeking competitive advantage",
    },
    {
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1106",
      title: "Cloud & Infrastructure Excellence",
      desc: "Seamless scaling and next-generation deployment strategies for enterprise applications",
    },
    {
      image: "https://images.unsplash.com/photo-1676233028452-d2e67b58a8d6?w=1400&h=900&fit=crop",
      title: "AI-Powered Intelligence Solutions",
      desc: "Intelligent automation driving competitive advantage, growth, and operational excellence",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const services = [
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
      title: "Workflow Automation",
      desc: "Transform processes with AI-powered automation and intelligence",
      href: "/services/automation",
    },
    {
      image: "google cloud.png",
      title: "Cloud & DevOps",
      desc: "Secure migration and modern infrastructure mastery",
      href: "/services/cloud",
    },
    {
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop",
      title: "Software Engineering",
      desc: "Custom development across all platforms and technologies",
      href: "/services/engineering",
    },
    {
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
      title: "Data Analytics & BI",
      desc: "Actionable insights from complex data ecosystems",
      href: "/services/analytics",
    },
    {
      image: "https://images.pexels.com/photos/5697262/pexels-photo-5697262.jpeg",
      title: "Support & Maintenance",
      desc: "24/7 support and continuous system modernization",
      href: "/services/support",
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
      title: "Growth Solutions",
      desc: "Strategic consulting and business acceleration",
      href: "/services/growth",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section with Animations */}
        <section className="relative w-full overflow-hidden">
          <div className="relative h-screen flex items-center">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  i === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent"></div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80"></div>
              </div>
            ))}

            {/* Animated Visualization Graphics */}
            <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
              <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full border-2 border-primary/30 animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full border-2 border-accent/20 animate-pulse delay-700"></div>
              <div className="absolute bottom-0 right-40 w-24 h-24 rounded-full border border-primary/20"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-4xl text-center sm:text-left px-4">
  <h1
    className="
      font-bold text-white mb-4 slide-up
      text-3xl sm:text-4xl md:text-6xl lg:text-7xl
      leading-snug sm:leading-tight md:leading-tight lg:leading-tight
    "
  >
    {slides[currentSlide].title}
  </h1>

  <p
    className="
      text-gray-200 slide-up mb-6
      text-sm sm:text-base md:text-lg lg:text-xl
      max-w-md sm:max-w-lg md:max-w-2xl
    "
    style={{ animationDelay: "0.1s" }}
  >
    {slides[currentSlide].desc}
  </p>

  <div
    className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 slide-up"
    style={{ animationDelay: "0.2s" }}
  >
    <button
      onClick={() => setIsContactOpen(true)}
      className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-700 transition transform hover:scale-105 duration-300 text-base sm:text-lg w-full sm:w-auto"
    >
      Get Started
    </button>
    <Link
      href="/about"
      className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition duration-300 text-base sm:text-lg w-full sm:w-auto text-center"
    >
      Learn More
    </Link>
  </div>
</div>

            </div>

            {/* Slider indicators */}
            <div className="absolute bottom-8 left-8 flex gap-2 z-20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1 transition-all duration-300 ${
                    i === currentSlide ? "bg-primary w-8" : "bg-white/40 hover:bg-white/70 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Spotlight Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-5xl font-bold text-white mb-4">Spotlight</h2>
              <p className="text-xl text-foreground/70">Recent projects and innovations shaping the industry</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1106",
                  title: "Enterprise Automation Success",
                  desc: "How we transformed workflow efficiency for leading enterprises across industries",
                  link: "/services/automation",
                },
                {
                  image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=996",
                  title: "AI Innovation in Action",
                  desc: "Cutting-edge AI solutions driving real business outcomes and competitive advantage",
                  link: "/services/analytics",
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className="group rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 scale-in block"
                >
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  </div>
                  <div className="bg-secondary/50 p-8 border-t border-primary/20">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70">{item.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition">
                      Read Case Study <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Comprehensive solutions designed to drive digital transformation and business growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <Link
                  key={i}
                  href={service.href}
                  className="group overflow-hidden rounded-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-96 scale-in text-left hover:scale-105"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10 group-hover:via-background/40 transition duration-500"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition duration-300">
                        {service.title}
                      </h3>
                      <p className="text-foreground/80 text-sm mb-4">{service.desc}</p>
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition">
                        Explore <span>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted Partners */}
        <TrustedPartners />

        {/* Stats Section */}
        <section className="py-20 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "60%", label: "Workload Reduction" },
                { number: "500+", label: "Enterprise Clients" },
                { number: "15+", label: "Years Experience" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, i) => (
                <div key={i} className="text-center fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                  <p className="text-5xl lg:text-6xl font-bold gradient-text mb-2">{stat.number}</p>
                  <p className="text-foreground/70 text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary via-red-600 to-red-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">Ready to Transform?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how Effred can automate, accelerate, and optimize your operations
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 text-lg"
            >
              Schedule Consultation
            </button>
          </div>
        </section>
      </main>

      {isContactOpen && (
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          onSuccess={() => {
            setShowSuccess(true)
            setIsContactOpen(false)
          }}
        />
      )}

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Submission Successful!"
        message="We'll get back to you within 24 hours"
      />

      <Footer />
    </>
  )
}
