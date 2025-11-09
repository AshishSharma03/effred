"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-32 bg-gradient-to-br from-background via-secondary to-background text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center fade-in max-w-3xl mx-auto">
              <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight">About Effred</h1>
              <p className="text-2xl text-foreground/80 mb-8">
                Leading enterprise transformation through intelligent automation, cloud innovation, and cutting-edge
                technology solutions
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Get Started
                </Link>
                <Link
                  href="/"
                  className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition"
                >
                  Back Home
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision - Enhanced */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="slide-up">
                <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Our Mission
                </span>
                <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                  Transforming Business Through Technology
                </h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  We empower enterprises to achieve digital transformation by combining advanced automation,
                  cloud-native architecture, and AI-driven intelligence. Our mission is to eliminate complexity,
                  accelerate growth, and unlock untapped potential in every organization we serve.
                </p>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Since our inception, we've partnered with 500+ Fortune enterprises globally, delivering transformative
                  solutions that reduce operational costs by up to 60% while improving agility and competitiveness.
                </p>
                <div className="flex gap-3 flex-wrap">
                  {["Innovation", "Excellence", "Scalability", "Security"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary/50 border border-primary/30 text-foreground px-4 py-2 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="scale-in h-96 rounded-xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                  alt="Mission"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Grid - Enhanced */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-5xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Guiding principles that drive our commitment to excellence and customer success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🚀",
                  title: "Innovation",
                  desc: "Continuously pushing boundaries with cutting-edge solutions that anticipate market needs and deliver competitive advantage",
                  features: ["AI-Powered Solutions", "Next-Gen Architecture", "Emerging Tech Focus"],
                },
                {
                  icon: "⭐",
                  title: "Excellence",
                  desc: "Uncompromising commitment to highest quality standards in every project, delivery, and customer interaction",
                  features: ["Quality Assurance", "Best Practices", "Continuous Improvement"],
                },
                {
                  icon: "🛡️",
                  title: "Reliability",
                  desc: "Enterprise-grade support with 99.9% uptime guarantee and proven track record across diverse industries",
                  features: ["24/7 Support", "SLA Compliance", "99.9% Uptime"],
                },
                {
                  icon: "💬",
                  title: "Transparency",
                  desc: "Clear communication, honest partnerships, and radical transparency in all business dealings",
                  features: ["Clear Roadmaps", "Regular Updates", "Open Dialogue"],
                },
                {
                  icon: "📈",
                  title: "Scalability",
                  desc: "Solutions architected to grow seamlessly with your business from startup to enterprise scale",
                  features: ["Auto-Scaling", "Performance", "Future-Proof Design"],
                },
                {
                  icon: "🔒",
                  title: "Security",
                  desc: "Comprehensive security framework protecting your data with industry-leading encryption and compliance",
                  features: ["ISO 27001", "GDPR Compliant", "Zero-Trust Model"],
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="slide-up group bg-gradient-to-br from-secondary/50 to-secondary/20 p-8 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition duration-500"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-5xl mb-4 group-hover:scale-125 transition duration-300">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70 mb-6">{value.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {value.features.map((feat) => (
                      <span key={feat} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section - Enhanced */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center fade-in mb-16">
              <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Leadership
              </span>
              <h2 className="text-5xl font-bold text-white mb-4">Industry Experts Leading Innovation</h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Our leadership team combines 150+ years of experience in enterprise transformation, cloud
                infrastructure, AI/ML, and software engineering across Fortune 500 companies and startups
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-96 rounded-xl overflow-hidden scale-in border border-primary/20 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                  alt="Team"
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>
              <div className="space-y-6 slide-up">
                {[
                  {
                    title: "Executive Leadership",
                    desc: "C-suite executives with deep domain expertise in enterprise automation and digital transformation",
                  },
                  {
                    title: "Technical Architects",
                    desc: "100+ certified architects specializing in cloud infrastructure, AI/ML, and distributed systems",
                  },
                  {
                    title: "Innovation Lab",
                    desc: "Dedicated research team exploring emerging technologies and future-ready solutions",
                  },
                  {
                    title: "Global Presence",
                    desc: "Offices in 15 countries with diverse talent from leading tech companies and academia",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-secondary/30 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition"
                  >
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Track Record - New Section */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-5xl font-bold text-white mb-4">Proven Track Record</h2>
              <p className="text-xl text-foreground/70">Delivering measurable results for industry leaders</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { metric: "500+", desc: "Enterprise Clients", color: "from-primary" },
                { metric: "15+", desc: "Years of Excellence", color: "from-accent" },
                { metric: "60%", desc: "Avg. Cost Reduction", color: "from-yellow-500" },
                { metric: "99.9%", desc: "Uptime Guarantee", color: "from-green-500" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`fade-in bg-gradient-to-br ${stat.color} to-transparent/10 p-8 rounded-xl border border-border/50 text-center hover:shadow-xl transition duration-300`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <p className="text-5xl font-bold text-white mb-2">{stat.metric}</p>
                  <p className="text-foreground/70 font-semibold">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-primary via-red-600 to-red-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
            <h2 className="text-5xl font-bold text-white mb-6">Join Industry Leaders</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your enterprise with Effred's proven solutions and expert guidance
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
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
