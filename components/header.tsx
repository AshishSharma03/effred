"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const services = [
    { name: "Grafana Solutions", href: "/services/grafana" },
    { name: "PowerBI Analytics", href: "/services/powerbi" },
    { name: "ETL Design", href: "/services/etl" },
    { name: "Pentaho Platform", href: "/services/pentaho" },
    { name: "Apache NiFi", href: "/services/nifi" },
    { name: "AI Automation", href: "/services/ai-automation" },
    { name: "Cloud Automation", href: "/services/cloud-automation" },
    { name: "Chatbot Development", href: "/services/chatbot" },
  ]

  const products = [
    { name: "Interactive Portals", href: "/products/portals" },
    { name: "Email Reports", href: "/products/email-reports" },
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="Effred"
              className="h-8 w-auto"
            />
            <span
              className="text-xl font-bold text-white"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Effred
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-foreground/80 hover:text-primary font-medium transition duration-300"
            >
              Home
            </Link>

            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="px-4 py-2 text-foreground/80 hover:text-primary font-medium transition duration-300 flex items-center gap-2">
                Products & Services
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-96 glass-effect rounded-lg shadow-2xl py-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="border-b border-border/50 px-0 pb-3">
                    <p className="text-xs font-semibold text-primary uppercase px-6 pb-2 tracking-wider">Products</p>
                    {products.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-6 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="px-0 pt-3">
                    <p className="text-xs font-semibold text-primary uppercase px-6 pb-2 tracking-wider">Services</p>
                    <div className="grid grid-cols-2 gap-0">
                      {services.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="px-6 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="px-4 py-2 text-foreground/80 hover:text-primary font-medium transition duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-foreground/80 hover:text-primary font-medium transition duration-300"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="ml-4 bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-red-700 transition duration-300 font-medium"
            >
              Get Started
            </Link>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden border-t border-border py-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-foreground/80 hover:text-primary rounded font-medium transition"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-foreground/80 hover:text-primary rounded font-medium transition"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
