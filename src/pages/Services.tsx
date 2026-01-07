import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Bug, Sparkles, Recycle, Package, BookOpen, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Trash2,
    title: "Industrial & Commercial Waste Collection",
    description: "Comprehensive waste collection services tailored to your business operations.",
    features: [
      "Scheduled pickups (daily, weekly, or custom)",
      "Multiple container sizes available",
      "Hazardous waste handling certification",
      "Real-time tracking and reporting",
      "24/7 emergency collection services",
    ],
  },
  {
    icon: Bug,
    title: "Fumigation & Pest Control",
    description: "Professional pest management solutions for safe, hygienic premises.",
    features: [
      "Commercial and industrial fumigation",
      "Rodent and insect control",
      "Termite treatment and prevention",
      "Food industry compliance",
      "Regular maintenance programs",
    ],
  },
  {
    icon: Sparkles,
    title: "Environmental Cleaning & Sanitation",
    description: "Deep cleaning and sanitation services for all types of facilities.",
    features: [
      "Office and commercial cleaning",
      "Industrial facility sanitation",
      "Post-construction cleanup",
      "High-pressure washing",
      "Disinfection services",
    ],
  },
  {
    icon: Recycle,
    title: "Waste Segregation & Recycling",
    description: "Sustainable waste management through proper segregation and recycling.",
    features: [
      "Source separation training",
      "Recycling bin provision",
      "Plastics, paper, and metal recycling",
      "Organic waste composting",
      "Recycling reports and certificates",
    ],
  },
  {
    icon: Package,
    title: "Sanitary Bin Distribution",
    description: "Complete sanitary bin solutions for proper waste disposal.",
    features: [
      "Various bin sizes and types",
      "Regular maintenance and emptying",
      "Hygienic disposal systems",
      "Branded bin options available",
      "Compliance with health regulations",
    ],
  },
  {
    icon: BookOpen,
    title: "Environmental Consulting",
    description: "Expert guidance on waste management best practices and compliance.",
    features: [
      "Waste audits and assessments",
      "Regulatory compliance consulting",
      "Sustainability strategy development",
      "Staff training programs",
      "Environmental impact reporting",
    ],
  },
];

const Services = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
                Our Services
              </h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive environmental solutions tailored for businesses across Kenya. 
                From waste collection to sustainability consulting, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8">
              {services.map((service, index) => (
                <Card key={service.title} className={`overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="grid lg:grid-cols-2">
                    <div className={`flex flex-col justify-center p-6 lg:p-10 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="mb-3 text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                    <div className={`bg-muted/30 p-6 lg:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <h4 className="mb-4 font-semibold text-foreground">What's Included:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="bg-muted/30 py-16">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">Industries We Serve</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Our expertise spans multiple sectors, each with tailored solutions for their unique waste management challenges.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {["Hospitality & Hotels", "Healthcare Facilities", "Retail & Shopping", "Manufacturing", "Educational Institutions", "Office Buildings", "Restaurants & Food Service", "Government & Public Sector"].map((industry) => (
                <div key={industry} className="rounded-lg border border-border bg-card p-4 text-center">
                  <span className="font-medium text-foreground">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
