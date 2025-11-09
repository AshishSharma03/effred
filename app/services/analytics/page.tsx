import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function AnalyticsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516534775068-bb57f2ceb3a4?w=1400&h=600&fit=crop"
            alt="Data Analytics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/30"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 lg:px-16 max-w-7xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 slide-up">Data Analytics & BI</h1>
            <p className="text-xl text-foreground/80 slide-up" style={{ animationDelay: "0.1s" }}>
              Transform data into actionable intelligence
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="fade-in">
              <h2 className="text-4xl font-bold mb-6 text-white">Data Analytics & Business Intelligence</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Unlock insights from your data with enterprise-grade analytics and BI solutions. We implement
                comprehensive data pipelines, data warehouses, and interactive dashboards that drive strategic
                decisions.
              </p>

              <h3 className="text-2xl font-bold text-white mt-12 mb-6">Analytics Solutions</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: "Data Warehousing", desc: "Centralized data repositories for enterprise analytics" },
                  {
                    title: "ETL & Data Pipelines",
                    desc: "Robust data extraction, transformation, and loading workflows",
                  },
                  { title: "BI Dashboards", desc: "Interactive dashboards with Tableau, Power BI, and Looker" },
                  { title: "Advanced Analytics", desc: "Predictive modeling and machine learning insights" },
                  { title: "Real-time Monitoring", desc: "Live dashboards with Grafana and Apache Superset" },
                  { title: "Data Governance", desc: "Data quality, metadata management, and compliance" },
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

              <h3 className="text-2xl font-bold text-white mt-12 mb-6">Analytics Tools & Platforms</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { category: "BI Tools", items: ["Power BI", "Tableau", "Looker"] },
                  { category: "Data Warehouses", items: ["Snowflake", "Redshift", "BigQuery"] },
                  { category: "ETL Platforms", items: ["Apache NiFi", "Talend", "Informatica"] },
                ].map((group, i) => (
                  <div
                    key={i}
                    className="bg-secondary/50 p-6 rounded-lg border border-border/50 scale-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <h4 className="text-lg font-bold text-white mb-4">{group.category}</h4>
                    <ul className="space-y-2">
                      {group.items.map((item, j) => (
                        <li key={j} className="text-foreground/70 flex gap-2">
                          <span className="text-primary">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-red-700/10 border border-primary/30 rounded-lg p-8 my-12">
                <h3 className="text-2xl font-bold text-white mb-4">Case Study</h3>
                <p className="text-foreground/80 mb-4">
                  A retail company implemented a data warehouse with Power BI dashboards, enabling real-time inventory
                  tracking and sales analytics. Result: 35% reduction in stockouts and 25% increase in revenue.
                </p>
                <p className="text-sm text-foreground/70">Technology Stack: Snowflake, Power BI, Apache NiFi, Python</p>
              </div>

              <div className="flex gap-4 flex-wrap mt-12">
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition transform hover:scale-105"
                >
                  Unlock Your Data Insights
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
