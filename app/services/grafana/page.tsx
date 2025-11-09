import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function GrafanaPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 w-full overflow-hidden">
          <img src="/data-analytics-dashboard.jpg" alt="Grafana" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 lg:px-16 max-w-7xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">Grafana Solutions</h1>
            <p className="text-xl text-gray-200">Advanced monitoring and visualization</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Grafana Expertise</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                Grafana is a leading open-source platform for monitoring and observability. We deliver enterprise-grade
                Grafana implementations that provide real-time insights into your systems and applications.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Services</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Grafana Setup and Configuration</li>
                <li>Custom Dashboard Development</li>
                <li>Data Source Integration</li>
                <li>Alert Management and Automation</li>
                <li>Performance Optimization</li>
                <li>24/7 Monitoring Support</li>
              </ul>
              <p className="text-lg mt-8">
                Partner with us to unlock the full potential of Grafana for your organization.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-12 bg-red-600 text-white px-8 py-3 rounded font-semibold hover:bg-red-700 transition"
            >
              Get Started with Grafana
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
