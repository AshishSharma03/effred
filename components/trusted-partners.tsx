"use client"

import { useState, useEffect } from "react"

export default function TrustedPartners() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(window.innerWidth > 768 ? 4 : 3)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const partners = [
    {
      name: "Amazon Web Services",
      logo: "https://images.unsplash.com/photo-1649734926695-1b1664e98842?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1162",
    },
    {
      name: "Microsoft Azure",
      logo: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=200&h=100&fit=crop",
    },
    {
      name: "Google Cloud",
      logo: "google cloud.png",
    },
    {
      name: "Databricks",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAU79lMtlIUadnY3Teksge58-DMgj2xxwmw&s",
    },
    {
      name: "Apache Foundation",
      logo: "apache.png",
    },
    {
      name: "Kubernetes",
      logo: "Kubernetes.jpeg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (partners.length - visibleItems + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [visibleItems, partners.length])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (partners.length - visibleItems + 1))
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + (partners.length - visibleItems + 1)) % (partners.length - visibleItems + 1))
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-white mb-2">Trusted Industry Leaders</h2>
          <p className="text-foreground/70">Partnering with world-class technology companies</p>
        </div>

        <div className="relative">
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {partners.map((partner, i) => (
                <div key={i} className="flex-shrink-0" style={{ width: `${100 / visibleItems}%` }}>
                  <div className="h-40 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl border border-border/50 hover:border-primary/50 transition duration-300 p-6 flex flex-col items-center justify-center hover:shadow-xl hover:shadow-primary/20 group cursor-pointer">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="h-20 object-contain mb-3 group-hover:scale-110 transition duration-300"
                    />
                    <p className="text-center text-sm font-semibold text-foreground/80 group-hover:text-primary transition">
                      {partner.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-primary hover:bg-red-700 text-white p-2 rounded-full transition"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-primary hover:bg-red-700 text-white p-2 rounded-full transition"
          >
            →
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: partners.length - visibleItems + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  i === currentIndex ? "bg-primary w-8" : "bg-border w-2 hover:bg-border/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
