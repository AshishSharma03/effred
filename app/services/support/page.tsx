import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522869635100-ce89c1baf4e5?w=1400&h=600&fit=crop"
            alt="Support Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/30"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 lg:px-16 max-w-7xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 slide-up">Support & Maintenance</h1>
            <p className="text-xl text-foreground/80 slide-up" style={{ animationDelay: "0.1s" }}>
              24/7 Support for Business Continuity
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="fade-in">
              <h2 className="text-4xl font-bold mb-6 text-white">Enterprise Support & Maintenance</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Our comprehensive support services ensure your systems run smoothly 24/7. From infrastructure monitoring
                to proactive maintenance, we keep your business operations uninterrupted.
              </p>

              <h3 className="text-2xl font-bold text-white mt-12 mb-6">Support Services</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: "24/7 Helpdesk", desc: "Round-the-clock support with guaranteed response times" },
                  { title: "Proactive Monitoring", desc: "Real-time system monitoring and alerting" },
                  { title: "Incident Management", desc: "Rapid incident response and resolution" },
                  { title: "Performance Tuning", desc: "Optimize system performance continuously" },
                  { title: "Security Patching", desc: "Regular security updates and vulnerability management" },
                  { title: "Disaster Recovery", desc: "Business continuity planning and disaster recovery" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-secondary/30 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition scale-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-foreground/70">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mt-12 mb-6">SLA Guarantees</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { level: "Bronze", uptime: "99.5%", response: "4 hours" },
                  { level: "Silver", uptime: "99.9%", response: "2 hours" },
                  { level: "Gold", uptime: "99.95%", response: "1 hour" },
                ].map((sla, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-primary/20 to-red-700/10 p-6 rounded-lg border border-primary/30 scale-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <h4 className="text-lg font-bold text-white mb-4">{sla.level}</h4>
                    <div className="space-y-2">
                      <p className="text-foreground/80">
                        <span className="font-semibold">Uptime:</span> {sla.uptime}
                      </p>
                      <p className="text-foreground/80">
                        <span className="font-semibold">Response:</span> {sla.response}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-red-700/10 border border-primary/30 rounded-lg p-8 my-12">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Our Support?</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span> <span>Expert team with 15+ years experience</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span> <span>99.95% uptime SLA guarantee</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span> <span>Dedicated account manager</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>{" "}
                    <span>Proactive optimization and cost management</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4 flex-wrap mt-12">
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition transform hover:scale-105"
                >
                  Get Enterprise Support
                </Link>
                <Link
                  href="/"
                  className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
