"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function Portals() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden flex items-center">
          <img
            src="https://images.unsplash.com/photo-1676233028452-d2e67b58a8d6?w=1400&h=900&fit=crop"
            alt="Interactive Portals"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/30"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 lg:px-16 max-w-7xl mx-auto z-10">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 slide-up leading-tight">
              Interactive Business Portals
            </h1>
            <p className="text-2xl text-foreground/80 slide-up max-w-2xl" style={{ animationDelay: "0.1s" }}>
              Empower your teams with intelligent, data-driven collaboration platforms
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-5xl font-bold text-white mb-4">Product Features</h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Next-generation portal technology designed for modern enterprises
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: "📊",
                  title: "Real-Time Dashboards",
                  desc: "Live data visualization with customizable widgets and KPI tracking",
                  features: ["Live Updates", "Custom Widgets", "Export Capabilities"],
                },
                {
                  icon: "⚙️",
                  title: "Workflow Automation",
                  desc: "Streamline business processes with intelligent automation",
                  features: ["Process Mapping", "Auto-Approvals", "Integration"],
                },
                {
                  icon: "🔐",
                  title: "Role-Based Access",
                  desc: "Enterprise-grade security with granular permission controls",
                  features: ["RBAC", "2FA", "Audit Logs"],
                },
                {
                  icon: "🔗",
                  title: "Seamless Integration",
                  desc: "Connect with 500+ enterprise applications and data sources",
                  features: ["API First", "Pre-built Connectors", "Custom APIs"],
                },
                {
                  icon: "📈",
                  title: "Advanced Analytics",
                  desc: "Deep insights with AI-powered recommendations",
                  features: ["Predictive Analytics", "ML Models", "Business Intelligence"],
                },
                {
                  icon: "🌍",
                  title: "Global Scalability",
                  desc: "Handle millions of users with automatic scaling",
                  features: ["Auto-Scaling", "Multi-Region", "99.99% Uptime"],
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-secondary/50 to-secondary/20 p-8 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition scale-in group"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-5xl mb-4 group-hover:scale-125 transition duration-300">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 mb-6">{feature.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.features.map((feat) => (
                      <span key={feat} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Use Cases */}
            <div className="bg-secondary/30 border border-border/50 rounded-xl p-12">
              <h3 className="text-4xl font-bold text-white mb-10 text-center">Use Cases</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    industry: "Financial Services",
                    use: "Customer account management, transactions, compliance reporting",
                  },
                  {
                    industry: "Healthcare",
                    use: "Patient portals, appointment scheduling, medical records access",
                  },
                  {
                    industry: "Manufacturing",
                    use: "Supply chain visibility, production tracking, quality control",
                  },
                  {
                    industry: "Retail",
                    use: "Inventory management, vendor collaboration, sales analytics",
                  },
                  {
                    industry: "Government",
                    use: "Citizen services, permit applications, public records",
                  },
                  {
                    industry: "Education",
                    use: "Student portals, course management, grade tracking",
                  },
                ].map((useCase, i) => (
                  <div key={i} className="border border-primary/20 rounded-lg p-6 hover:bg-secondary/30 transition">
                    <h4 className="text-lg font-bold text-primary mb-2">{useCase.industry}</h4>
                    <p className="text-foreground/70">{useCase.use}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-5xl font-bold text-white mb-4">Measurable Impact</h2>
              <p className="text-xl text-foreground/70">See the difference a modern portal makes</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { metric: "40%", desc: "Faster Processes" },
                { metric: "50%", desc: "Cost Reduction" },
                { metric: "90%", desc: "User Adoption" },
                { metric: "3x", desc: "ROI in 12 Months" },
              ].map((item, i) => (
                <div key={i} className="fade-in text-center" style={{ animationDelay: `${i * 0.1}s` }}>
                  <p className="text-6xl font-bold gradient-text mb-3">{item.metric}</p>
                  <p className="text-lg text-foreground/70 font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-primary via-red-600 to-red-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
            <h2 className="text-5xl font-bold text-white mb-6">Transform Your Operations</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Deploy a powerful portal solution that drives engagement and operational efficiency
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 text-lg"
            >
              Schedule a Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
