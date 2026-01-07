import { CheckCircle, Clock, Award, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Regulatory Compliance",
    description: "We ensure all waste management practices meet Kenya's environmental regulations and standards.",
  },
  {
    icon: Clock,
    title: "Reliable Scheduling",
    description: "Consistent, on-time service with flexible scheduling to match your business operations.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Over 15 years of experience serving diverse sectors including hospitality, healthcare, and retail.",
  },
  {
    icon: HeartHandshake,
    title: "Community Focused",
    description: "Partnering with WWF Kenya and local communities for lasting environmental impact.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Why Businesses Trust Dessmi Ltd
            </h2>
            <p className="mb-8 text-muted-foreground">
              We go beyond waste collection to deliver comprehensive environmental solutions 
              that protect your business, community, and the planet.
            </p>
            
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-8">
              <div className="flex h-full flex-col justify-center rounded-xl border border-border bg-card p-8">
                <blockquote className="text-lg italic text-foreground">
                  "Dessmi Ltd has transformed our waste management operations. Their professional team 
                  and reliable service have made compliance effortless."
                </blockquote>
                <div className="mt-6">
                  <div className="font-semibold text-foreground">Hotel Operations Manager</div>
                  <div className="text-sm text-muted-foreground">Hospitality Sector, Mombasa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
