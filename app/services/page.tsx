import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import CollaboratorsSection from "@/components/collaborators-section"

export default function ServicesPage() {
  const programs = [
    {
      id: 1,
      title: "The Calm Canvas",
      description:
        "A nurturing, inclusive community where children with neurodiversity and their mothers are empowered, supported, and celebrated, fostering a journey toward holistic well-being, resilience, and meaningful engagement in all areas of life.",
      audience: "Neurodiverse kids & mothers",
      schedule: "Weekly (1 hour) - Evenings",
      venue: "DMCHS Park",
    },
    {
      id: 2,
      title: "Basic Life Skills Course",
      description:
        "A basic life support course that provides essential training on controlling severe bleeding, CPR protocol, burns and fire safety with hands-on practice.",
      audience: "All ages",
      schedule: "On-going",
      venue: "Onsite",
    },
    {
      id: 3,
      title: "Soul Survivors",
      description:
        "A compassionate, evidence-informed program designed to support individuals — especially women — navigating the emotional aftermath of narcissistic relationships. Grounded in both psychological insight and faith-aligned values.",
      audience: "Women 18+",
      schedule: "Weekly (1.15 hr) - Flexible times",
      venue: "Onsite & Online",
    },
    {
      id: 4,
      title: "The Wise-Age Club",
      description:
        "A dynamic community that brings together elderly individuals to share their wisdom, experiences, and talents. Through social events, interactive workshops, and thoughtful discussions, we foster connections and value unique perspectives.",
      audience: "Individuals 40+",
      schedule: "Monthly (1 hour) - Evenings",
      venue: "Ribat",
    },
    {
      id: 5,
      title: "Meri Pehchaan",
      description:
        "A five-months long talk series carefully curated to awaken the hearts and minds of Muslim women across the globe by helping them rediscover their divine identity, reclaim their emotional strength, and rise above the noise of the world with the clarity of purpose rooted in deep self-awareness, Islamic and Modern psychology.",
      audience: "Professionals & Executives",
      schedule: "June 2026 - 2 hours/2 days",
      venue: "Ribat",
    },
    {
      id: 6,
      title: "Mastering Emotions",
      description:
        "A transformative inner-work program that helps individuals reconnect with themselves, regulate emotional responses, and lead a more intentional, purpose-driven life.",
      audience: "Adults 18+",
      schedule: "Weekly (1.15 hr) - Flexible times",
      venue: "Onsite & Online",
    },
    {
      id: 7,
      title: "The Red Thread",
      description:
        "A series of open discussions, expert-led workshops, and practical guidance exploring the science and emotional experience of the menstrual cycle — hormonal changes, PCOS, cycle syncing, self-care, and pain management.",
      audience: "Girls & women (teenage to menopause)",
      schedule: "Weekly (1 hr) - Evenings",
      venue: "Online & Onsite",
    },
    {
      id: 8,
      title: "Wellness Reset 2026",
      description:
        "A one-day, women-centric wellness experience designed to promote holistic health and meaningful self-reflection. The event brought together experts from healthcare, psychology, spirituality, and social development to address key aspects of emotional, physical, psychological, and spiritual wellbeing. Through insightful panel discussions, guided wellness activities, creative engagement sessions, and preventive health screenings, participants gained practical tools to improve their overall wellbeing and lifestyle.",
      audience: "Daughters 13+, Moms up to 70",
      schedule: "June 2026 - 1.5 hrs/session (1 day)",
      venue: "Ribat, Park, Minimos",
    },
    {
      id: 9,
      title: "Awareness & Screening Programs",
      description:
        "Designed to promote preventive healthcare by educating communities about common and high-risk health conditions such as breast cancer, hepatitis, hypertension, PCOS, and other non-communicable diseases (NCDs). Through expert-led awareness sessions and basic health screenings, these programs encourage early detection, informed decision-making, and healthier lifestyle choices.",
      audience: "Adults 18+ (single & married)",
      schedule: "Weekly (1.15 hr) - Flexible times",
      venue: "Onsite & Online",
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-balance mb-6">Our Programs</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive wellness initiatives curated by experts for every life stage
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program) => (
                <Card
                  key={program.id}
                  className="p-8 border border-border hover:border-primary hover:shadow-lg transition"
                >
                  <h3 className="text-2xl font-bold text-primary mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                  <div className="space-y-2 text-sm border-t border-border pt-4">
                    <p>
                      <span className="font-semibold text-foreground">Audience:</span> {program.audience}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Schedule:</span> {program.schedule}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Venue:</span> {program.venue}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Gallery Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-balance mb-8 text-center">Event Gallery</h2>
            <div className="space-y-8">
              {/* Row 1 */}
              <div className="grid grid-cols-4 gap-6">
                <div className="col-span-1 flex items-center justify-center">
                  <img src="/gallery/row-1-horizontal-1.png" alt="Row 1 Horizontal 1" className="w-full h-40 object-cover rounded-lg" />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <img src="/gallery/row-1-verticle-1.jpeg" alt="Row 1 Vertical 1" className="w-32 h-40 object-cover rounded-lg" />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <img src="/gallery/row-1-horizontal-2.png" alt="Row 1 Horizontal 2" className="w-full h-40 object-cover rounded-lg" />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <img src="/gallery/row-1-verticle-2.jpg" alt="Row 1 Vertical 2" className="w-32 h-40 object-cover rounded-lg" />
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-4 gap-6">
                <div className="col-span-1 flex items-center justify-center">
                  <img src="/gallery/row-2-horizontal-1.png" alt="Row 2 Horizontal 1" className="w-full h-40 object-cover rounded-lg" />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <img src="/gallery/row-2-verticle-1.jpeg" alt="Row 2 Vertical 1" className="w-32 h-40 object-cover rounded-lg" />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <img src="/gallery/row-2-harizontal-2.jpg" alt="Row 2 Horizontal 2" className="w-full h-40 object-cover rounded-lg" />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <img src="/gallery/row-2-verticle-1.png" alt="Row 2 Vertical 2" className="w-32 h-40 object-cover rounded-lg" />
                </div>
              </div>
              {/* Row 3 */}
              <div className="grid grid-cols-4 gap-6">
                <div className="col-span-1 flex items-center justify-center">
                  <img src="/gallery/row-3-horizontal-1.jpg" alt="Row 3 Horizontal 1" className="w-full h-40 object-cover rounded-lg" />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <img src="/gallery/row-3-verticle-1.jpeg" alt="Row 3 Vertical 1" className="w-32 h-40 object-cover rounded-lg" />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <img src="/gallery/row-3-horizontal-2.png" alt="Row 3 Horizontal 2" className="w-full h-40 object-cover rounded-lg" />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <img src="/gallery/row-3-verticle-2.jpg" alt="Row 3 Vertical 2" className="w-32 h-40 object-cover rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-balance mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose a program that resonates with you and begin your wellness journey today.
            </p>
            <CollaboratorsSection />
            <a
              href="https://wa.me/923090692995"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition"
            >
              Reach Out on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}
