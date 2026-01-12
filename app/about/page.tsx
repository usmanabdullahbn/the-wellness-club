import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-balance mb-6">About The Wellness Club</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are a community-driven organization dedicated to the betterment of society by empowering individuals
              and communities through comprehensive health and wellness initiatives.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-primary">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To create lasting positive change by promoting physical health, enhancing mental well-being, and
                  embracing a holistic approach to health that considers the interconnectedness of body, mind, and
                  spirit.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that true wellness extends beyond the physical body – it encompasses emotional resilience,
                  spiritual growth, and meaningful connections with our community.
                </p>
              </div>
              <div className="h-96 bg-accent/20 rounded-2xl overflow-hidden">
                <img src="/wellness-mission-community-support.png" alt="Our Mission" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-96 bg-accent/20 rounded-2xl overflow-hidden">
                <img src="/expert-led-programs-wellness.jpg" alt="Our Approach" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-4 text-primary">Our Approach</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our programs are carefully curated by subject matter experts and experienced individuals, with
                  specific focus given to the needs of different age groups and skill sets.
                </p>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    Evidence-informed programs grounded in research and compassion
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    Safe, stigma-free spaces for authentic sharing and growth
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    Community-driven support that celebrates individual differences
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    Holistic wellness addressing body, mind, and spirit
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-balance mb-12">Our Collaborators</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We partner with leading organizations and experts to bring you the highest quality wellness programs and
              support.
            </p>
            <div className="bg-card p-8 rounded-xl border border-border text-center">
              <p className="text-muted-foreground">
                Join our growing network of partners committed to community wellness.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-balance mb-6">Ready to Join Our Community?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our programs and take the first step towards holistic wellness.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  View Programs
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}
