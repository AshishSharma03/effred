import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function GrowthPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&h=600&fit=crop"
            alt="Growth Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/30"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 lg:px-16 max-w-7xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 slide-up">Growth Solutions</h1>
            <p className="text-xl text-foreground/80 slide-up" style={{ animationDelay: "0.1s" }}>
              Strategic consulting for business acceleration
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="fade-in">
              <h2 className="text-4xl font-bold mb-6 text-white">Strategic Growth Solutions</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Accelerate your business growth with our strategic consulting services. We help enterprises optimize
                operations, expand into new markets, and build competitive advantages through digital transformation.
              </p>

              <h3 className="text-2xl font-bold text-white mt-12 mb-6">Growth Services</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: "Digital Transformation", desc: "Strategic roadmap for business modernization" },
                  { title: "Process Optimization", desc: "Identify and eliminate inefficiencies" },
                  { title: "Technology Roadmap", desc: "Plan your technology investment strategy" },
                  { title: "Market Expansion", desc: "Strategies to enter new markets successfully" },
                  { title: "Change Management", desc: "Guide organizational change initiatives" },
                  { title: "Innovation Workshops", desc: "Ideation and innovation strategy sessions" },
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

              <h3 className="text-2xl font-bold text-white mt-12 mb-6">Our Growth Methodology</h3>
              <div className="space-y-4 mb-8">
                {[
                  { step: 1, title: "Assessment", desc: "Analyze current state and identify opportunities" },
                  { step: 2, title: "Strategy", desc: "Develop comprehensive growth strategy" },
                  { step: 3, title: "Planning", desc: "Create detailed implementation roadmap" },
                  { step: 4, title: "Execution", desc: "Lead implementation and track progress" },
                  { step: 5, title: "Optimization", desc: "Continuously optimize and scale" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center font-bold text-white">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      <p className="text-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-red-700/10 border border-primary/30 rounded-lg p-8 my-12">
                <h3 className="text-2xl font-bold text-white mb-4">Success Metrics</h3>
                <div className="grid md:grid-cols-2 gap-4 text-foreground/80">
                  <p className="flex gap-2">
                    <span className="text-primary font-bold">→</span> Average 35% revenue growth in year 1
                  </p>
                  <p className="flex gap-2">
                    <span className="text-primary font-bold">→</span> 40% operational cost reduction
                  </p>
                  <p className="flex gap-2">
                    <span className="text-primary font-bold">→</span> Time to market reduced by 50%
                  </p>
                  <p className="flex gap-2">
                    <span className="text-primary font-bold">→</span> Employee productivity +45%
                  </p>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap mt-12">
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition transform hover:scale-105"
                >
                  Start Your Growth Journey
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
