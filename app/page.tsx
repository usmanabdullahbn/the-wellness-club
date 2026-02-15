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
              {/* Banner images from public/banner (in sequence) */}
              <img src="/banner/imag-1.jpeg" alt="Banner 1" className="h-48 w-auto rounded-lg shadow-md flex-shrink-0" />
              <img src="/banner/img-2.jpeg" alt="Banner 2" className="h-48 w-auto rounded-lg shadow-md flex-shrink-0" />
              <img src="/banner/img-3.jpeg" alt="Banner 3" className="h-48 w-auto rounded-lg shadow-md flex-shrink-0" />
              <img src="/banner/img-4.jpeg" alt="Banner 4" className="h-48 w-auto rounded-lg shadow-md flex-shrink-0" />
              <img src="/banner/img-5.jpeg" alt="Banner 5" className="h-48 w-auto rounded-lg shadow-md flex-shrink-0" />
              <img src="/banner/img-6.jpeg" alt="Banner 6" className="h-48 w-auto rounded-lg shadow-md flex-shrink-0" />
              <img src="/banner/img-7.jpeg" alt="Banner 7" className="h-48 w-auto rounded-lg shadow-md flex-shrink-0" />
              <img src="/banner/img-8.jpeg" alt="Banner 8" className="h-48 w-auto rounded-lg shadow-md flex-shrink-0" />
              <img src="/banner/img-9.jpeg" alt="Banner 9" className="h-48 w-auto rounded-lg shadow-md flex-shrink-0" />
              <img src="/banner/img-10.png" alt="Banner 10" className="h-48 w-auto rounded-lg shadow-md flex-shrink-0" />
              <img src="/banner/img-11.png" alt="Banner 11" className="h-48 w-auto rounded-lg shadow-md flex-shrink-0" />
              <img src="/banner/img-12.jpeg" alt="Banner 12" className="h-48 w-auto rounded-lg shadow-md flex-shrink-0" />
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
