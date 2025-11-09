import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function NiFiPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-96 w-full overflow-hidden">
          <img src="/cloud-infrastructure-server.jpg" alt="Apache NiFi" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 lg:px-16 max-w-7xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">Apache NiFi Services</h1>
            <p className="text-xl text-gray-200">Powerful data routing and transformation</p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">NiFi Expertise</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                Apache NiFi is a powerful data routing and transformation platform. We architect and implement NiFi
                solutions that handle complex data flows at scale.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Services</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>NiFi Cluster Setup and Configuration</li>
                <li>Data Flow Development</li>
                <li>Data Routing and Prioritization</li>
                <li>Monitoring and Alerting</li>
                <li>Performance Optimization</li>
                <li>High Availability Solutions</li>
              </ul>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-12 bg-red-600 text-white px-8 py-3 rounded font-semibold hover:bg-red-700 transition"
            >
              Implement NiFi
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
