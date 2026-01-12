import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-balance text-foreground mb-6">
              Welcome to a <span className="text-primary">Safe Space</span> for Wellness
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A vibrant community hub dedicated to holistic wellness. We empower individuals and communities through
              comprehensive health and wellness initiatives that promote physical health, mental well-being, and
              spiritual growth.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore Programs
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-96 bg-accent/20 rounded-2xl overflow-hidden">
            <img src="/images/hero-wellness.jpg" alt="Wellness Community" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
