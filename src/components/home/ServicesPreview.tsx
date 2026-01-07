import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Bug, Sparkles, Recycle, Package, BookOpen, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Trash2,
    title: "Waste Collection",
    description: "Industrial and commercial waste collection with scheduled pickups tailored to your business needs.",
  },
  {
    icon: Bug,
    title: "Fumigation Services",
    description: "Professional pest control and fumigation for commercial premises, ensuring a safe environment.",
  },
  {
    icon: Sparkles,
    title: "Environmental Cleaning",
    description: "Comprehensive sanitation services for offices, facilities, and public spaces.",
  },
  {
    icon: Recycle,
    title: "Recycling Programs",
    description: "Waste segregation and recycling initiatives that support circular economy principles.",
  },
  {
    icon: Package,
    title: "Sanitary Bins",
    description: "Distribution and maintenance of sanitary bins for proper waste disposal.",
  },
  {
    icon: BookOpen,
    title: "Consulting",
    description: "Expert waste management consulting to optimize your environmental practices.",
  },
];

export function ServicesPreview() {
  return (
    <section className="bg-background py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Comprehensive Waste Management Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From collection to recycling, we provide end-to-end environmental services 
            designed for businesses of all sizes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
