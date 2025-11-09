"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EmailReports() {
  return (
    <>
      <Header />
      <main>
        <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="slide-up">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">Email Report Solutions</h1>
              <p className="text-xl text-gray-300 mb-8">Automated email-based reporting with advanced analytics</p>
              <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg p-8 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">How It Works</h2>
                <p className="text-gray-300 mb-6">
                  Even without direct connectivity between your server and email service provider, our intelligent email
                  analyzer and comprehensive reporting engine delivers customized reports directly to your inbox.
                </p>
                <h3 className="text-xl font-bold mb-4">Benefits</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> Zero connectivity requirements
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> Customizable report formats
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> Scheduled delivery
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> Advanced analytics engine
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> Secure data handling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
