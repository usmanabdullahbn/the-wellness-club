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
