import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"

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
      title: "Shifting Mindsets",
      description:
        "A high-impact, 4-hour workshop that equips individuals with tools to reshape thought patterns, boost productivity, and lead with purpose. Blends self-reflection, interactive learning, and habit reprogramming.",
      audience: "Professionals & Executives",
      schedule: "June 2025 - 2 hours/2 days",
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
      title: "Mom & Daughter Summer Camp 2025",
      description:
        "A 4-day summer camp designed for a unique experience that blends fun-filled activities, sports, creative expression, and guided self-awareness sessions to strengthen relationships and help you grow together.",
      audience: "Daughters 13+, Moms up to 70",
      schedule: "June 2025 - 1.5 hrs/session (4 days)",
      venue: "Ribat, Park, Minimos",
    },
    {
      id: 9,
      title: "Relationship Mastery",
      description:
        "A dedicated program to support individuals and couples in cultivating healthier, faith-aligned, and emotionally intelligent relationships through structured coaching, workshops, and one-on-one sessions.",
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

        <section className="py-20 bg-secondary/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-balance mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose a program that resonates with you and begin your wellness journey today.
            </p>
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
