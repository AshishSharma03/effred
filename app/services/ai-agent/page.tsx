import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function AIAgentPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-96 w-full overflow-hidden">
          <img src="/ai-machine-learning-technology.jpg" alt="AI Agent" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 lg:px-16 max-w-7xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">AI Agent Development</h1>
            <p className="text-xl text-gray-200">Autonomous intelligent agents for enterprise</p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">AI Agent Solutions</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                AI agents are autonomous systems that perceive their environment and make decisions. We develop
                sophisticated AI agents that solve complex business problems.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Services</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Agent Architecture Design</li>
                <li>Reinforcement Learning Implementation</li>
                <li>Decision-Making Systems</li>
                <li>Multi-Agent Coordination</li>
                <li>Agent Training and Deployment</li>
                <li>Performance Monitoring</li>
              </ul>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-12 bg-red-600 text-white px-8 py-3 rounded font-semibold hover:bg-red-700 transition"
            >
              Build AI Agents
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
