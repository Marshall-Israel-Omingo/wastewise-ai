import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { Target, Eye, Heart, Leaf, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
                About Dessmi Ltd
              </h1>
              <p className="text-lg text-muted-foreground">
                Building a cleaner, healthier Kenya through sustainable waste management 
                and environmental stewardship since our founding.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="mb-4 text-3xl font-bold text-foreground">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Dessmi Ltd was founded in Mombasa, Kenya with a clear vision: to transform 
                      how businesses approach waste management while protecting our coastal environment.
                    </p>
                    <p>
                      From our headquarters in Bamburi, we've grown to serve hundreds of commercial 
                      and institutional clients across Kenya, always maintaining our commitment to 
                      environmental excellence and community welfare.
                    </p>
                    <p>
                      Today, we stand as a leader in integrated environmental solutions, offering 
                      everything from waste collection to fumigation services, all while championing 
                      the principles of the circular economy.
                    </p>
                  </div>
                </div>
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="bg-muted/30 py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide comprehensive, sustainable waste management solutions that protect 
                  public health, preserve our environment, and support Kenya's development goals.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be East Africa's most trusted environmental services partner, leading the 
                  transition to a circular economy and zero-waste future.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">Our Values</h3>
                <p className="text-muted-foreground">
                  Integrity, sustainability, community focus, and continuous improvement guide 
                  every decision we make and every service we deliver.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">Our Impact</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Measurable results that demonstrate our commitment to environmental sustainability.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-primary">15+</div>
                <div className="text-muted-foreground">Years of Service</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-secondary">500+</div>
                <div className="text-muted-foreground">Business Clients</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-accent">1000+</div>
                <div className="text-muted-foreground">Tons Recycled Yearly</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Community Programs</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="bg-muted/30 py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">Conservation Partnerships</h2>
              <p className="mb-8 text-muted-foreground">
                We're proud to partner with leading environmental organizations to maximize our impact.
              </p>
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <Leaf className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">WWF Kenya Partnership</h3>
                <p className="text-muted-foreground">
                  Working together to protect Kenya's coastal ecosystems through beach cleanups, 
                  marine debris reduction, and community education programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SDG Alignment */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="mb-4 text-3xl font-bold text-foreground">
                    Aligned with Global Goals
                  </h2>
                  <p className="mb-6 text-muted-foreground">
                    Our work directly contributes to the United Nations Sustainable Development Goals, 
                    particularly SDG 12: Responsible Consumption and Production.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">12</div>
                      <span className="text-muted-foreground">Responsible Consumption & Production</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">11</div>
                      <span className="text-muted-foreground">Sustainable Cities & Communities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">14</div>
                      <span className="text-muted-foreground">Life Below Water (Marine Protection)</span>
                    </li>
                  </ul>
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
