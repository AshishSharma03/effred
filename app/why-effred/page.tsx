"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function WhyEffred() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center fade-in">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">Why Choose Effred?</h1>
              <p className="text-xl text-gray-300">
                Unmatched expertise, proven results, and partnership focused on your success
              </p>
            </div>
          </div>
        </section>

        {/* Key Reasons */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {[
                {
                  icon: "📈",
                  title: "60% Workload Reduction",
                  desc: "Our automation solutions eliminate repetitive tasks and significantly reduce operational burden on your team.",
                },
                {
                  icon: "⚡",
                  title: "Rapid Implementation",
                  desc: "Fast-track deployment without disrupting your existing operations. Get value quickly with our proven methodologies.",
                },
                {
                  icon: "🔒",
                  title: "Enterprise Security",
                  desc: "Bank-grade security infrastructure protecting your data with compliance to all major standards.",
                },
                {
                  icon: "🏆",
                  title: "Award-Winning Support",
                  desc: "24/7 dedicated support team ensuring your success with proactive monitoring and rapid issue resolution.",
                },
              ].map((reason, i) => (
                <div key={i} className="slide-up flex gap-8 items-start" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex-shrink-0 text-4xl">{reason.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                    <p className="text-lg text-gray-600">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="scale-in">
                <img src="/results.jpg" alt="Results" className="rounded-xl shadow-lg" />
              </div>
              <div className="fade-in">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Results, Real Impact</h2>
                <p className="text-lg text-gray-600 mb-6">
                  A leading financial services company reduced their processing time by 65% and improved accuracy by 40%
                  using our automation platform.
                </p>
                <div className="space-y-4">
                  {[
                    "65% faster processing",
                    "40% improved accuracy",
                    "500+ hours saved monthly",
                    "ROI achieved in 6 months",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
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
