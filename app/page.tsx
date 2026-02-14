import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import WorkSection from "@/components/work-section"
import TestimonialSection from "@/components/testimonial-section"
import CollaboratorsSection from "@/components/collaborators-section"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div>
      <Navigation />
      <HeroSection />

      {/* Flyers Banner */}
      <section className="w-full py-8 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Previous Sessions</h2>
          <div className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-background/40 pb-2">
            <img src="/gallery/row-1-horizontal-1.png" alt="Flyer 1" className="h-48 w-auto rounded-lg shadow-md flex-shrink-0" />
            <img src="/gallery/row-1-horizontal-2.png" alt="Flyer 2" className="h-48 w-auto rounded-lg shadow-md flex-shrink-0" />
            <img src="/gallery/row-2-horizontal-1.png" alt="Flyer 3" className="h-48 w-auto rounded-lg shadow-md flex-shrink-0" />
            <img src="/gallery/row-3-horizontal-1.jpg" alt="Flyer 4" className="h-48 w-auto rounded-lg shadow-md flex-shrink-0" />
          </div>
        </div>
      </section>

      <AboutSection />
      <CollaboratorsSection />
      <ServicesSection />
      <WorkSection />
      <TestimonialSection />
      <WhatsAppButton />
      <Footer />
    </div>
  )
}
