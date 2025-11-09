import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function AutomationPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden flex items-center">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&h=900&fit=crop"
            alt="Workflow Automation"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/30"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 lg:px-16 max-w-7xl mx-auto z-10">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 slide-up leading-tight">
              Workflow Automation
            </h1>
            <p className="text-2xl text-foreground/80 slide-up max-w-2xl" style={{ animationDelay: "0.1s" }}>
              Transform business processes with intelligent automation and AI-driven efficiency
            </p>
            <div className="flex gap-4 mt-8 slide-up" style={{ animationDelay: "0.2s" }}>
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="fade-in">
              <h2 className="text-5xl font-bold mb-8 text-white">Workflow Automation Excellence</h2>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Our comprehensive workflow automation solutions streamline your business processes, eliminate manual
                inefficiencies, and accelerate productivity across your entire organization. We leverage cutting-edge
                automation technologies, RPA platforms, and intelligent process mining to reduce operational complexity
                and costs while improving accuracy and customer satisfaction.
              </p>

              {/* Key Services Grid */}
              <h3 className="text-4xl font-bold text-white mt-16 mb-10">Our Automation Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    icon: "🤖",
                    title: "RPA Solutions",
                    desc: "Robotic Process Automation to handle repetitive, rule-based tasks with perfect accuracy and 24/7 availability",
                    features: ["UiPath & Blue Prism", "Bot Management", "Process Scaling"],
                  },
                  {
                    icon: "📊",
                    title: "Process Mining",
                    desc: "Advanced analytics to discover, visualize, and optimize hidden business process inefficiencies",
                    features: ["Process Discovery", "Bottleneck Analysis", "Optimization Insights"],
                  },
                  {
                    icon: "🔗",
                    title: "Integration Platforms",
                    desc: "Connect disparate systems, applications, and data sources for seamless information flow",
                    features: ["MuleSoft & Zapier", "API Management", "Data Sync"],
                  },
                  {
                    icon: "⚙️",
                    title: "Workflow Design",
                    desc: "Custom workflows tailored to your specific business requirements and operational model",
                    features: ["BPM Solutions", "Custom Logic", "Scalable Design"],
                  },
                  {
                    icon: "✅",
                    title: "Compliance Automation",
                    desc: "Ensure regulatory compliance through automated monitoring, auditing, and reporting",
                    features: ["GDPR Compliant", "Audit Trails", "Compliance Reporting"],
                  },
                  {
                    icon: "📈",
                    title: "Performance Analytics",
                    desc: "Real-time monitoring, dashboards, and optimization of automated processes for continuous improvement",
                    features: ["Live Dashboards", "KPI Tracking", "Performance Alerts"],
                  },
                ].map((service, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-secondary/50 to-secondary/20 p-8 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition scale-in group"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="text-5xl mb-4 group-hover:scale-125 transition duration-300">{service.icon}</div>
                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition">
                      {service.title}
                    </h4>
                    <p className="text-foreground/70 mb-6">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feat) => (
                        <span key={feat} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits Section */}
              <h3 className="text-4xl font-bold text-white mt-16 mb-10">Key Benefits</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {[
                  {
                    metric: "60-80%",
                    title: "Cost Reduction",
                    desc: "Eliminate manual processes, reduce labor costs, and optimize resource allocation",
                  },
                  {
                    metric: "99.9%",
                    title: "Accuracy",
                    desc: "Automated processes eliminate human error, ensuring consistent, reliable results",
                  },
                  {
                    metric: "24/7",
                    title: "Operations",
                    desc: "Continuous process execution without human intervention or downtime",
                  },
                  {
                    metric: "10x",
                    title: "Faster Processing",
                    desc: "Dramatically reduce cycle times from days or hours to minutes",
                  },
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="bg-secondary/30 border border-primary/20 p-8 rounded-xl hover:shadow-lg transition"
                  >
                    <p className="text-5xl font-bold gradient-text mb-3">{benefit.metric}</p>
                    <h4 className="text-2xl font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-foreground/70">{benefit.desc}</p>
                  </div>
                ))}
              </div>

              {/* Case Study */}
              <div className="bg-gradient-to-r from-primary/10 to-red-700/10 border border-primary/30 rounded-xl p-12 my-16">
                <h3 className="text-3xl font-bold text-white mb-6">Real-World Success Story</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-3">Leading Financial Institution</h4>
                    <p className="text-foreground/80 mb-4">
                      A top-5 global bank faced critical challenges in invoice processing, with manual workflows causing
                      processing delays, high error rates, and significant operational costs.
                    </p>
                    <p className="text-foreground/80 mb-6">
                      Our RPA solution automated 85% of their invoice processing workload, reducing cycle time from 5
                      days to just 4 hours while eliminating 95% of manual errors.
                    </p>
                    <div className="space-y-2">
                      <p className="text-lg">
                        <span className="font-bold text-primary">$2.5M</span> Annual Cost Savings
                      </p>
                      <p className="text-lg">
                        <span className="font-bold text-primary">95%</span> Error Reduction
                      </p>
                      <p className="text-lg">
                        <span className="font-bold text-primary">30 hours</span> Saved Per Week
                      </p>
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=400&fit=crop"
                    alt="Case Study"
                    className="h-96 rounded-lg object-cover"
                  />
                </div>
              </div>

              {/* Technology Stack */}
              <h3 className="text-4xl font-bold text-white mt-16 mb-10">Technology Stack</h3>
              <div className="bg-secondary/30 border border-border/50 rounded-xl p-12 mb-16">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      category: "RPA Platforms",
                      tools: ["UiPath", "Blue Prism", "Automation Anywhere", "Power Automate"],
                    },
                    { category: "Process Mining", tools: ["Celonis", "ARIS", "ProcessGold", "Disco"] },
                    { category: "Integration", tools: ["MuleSoft", "Apache NiFi", "Apache Kafka", "Zapier"] },
                  ].map((stack, i) => (
                    <div key={i}>
                      <h4 className="text-lg font-bold text-primary mb-4">{stack.category}</h4>
                      <ul className="space-y-2">
                        {stack.tools.map((tool) => (
                          <li key={tool} className="text-foreground/70 flex items-center gap-2">
                            <span className="text-primary">▸</span> {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4 flex-wrap mt-16">
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition transform hover:scale-105 text-lg"
                >
                  Start Your Automation Journey
                </Link>
                <Link
                  href="/"
                  className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition text-lg"
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
