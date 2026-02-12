export default function ServicesSection() {
  const services = [
    {
      title: "The Calm Canvas",
      description:
        "A nurturing, inclusive community for children with neurodiversity and their mothers, fostering holistic well-being and resilience.",
      audience: "Neurodiverse kids & mothers",
      frequency: "Weekly (1 hour) - Evenings",
    },
    {
      title: "Soul Survivors",
      description:
        "Compassionate, evidence-informed support for individuals navigating the emotional aftermath of narcissistic relationships.",
      audience: "Women 18+",
      frequency: "Weekly (1.15 hr) - Flexible times",
    },
    {
      title: "The Wise-Age Club",
      description:
        "Dynamic community bringing together elderly individuals to share wisdom, experiences, and talents through interactive activities.",
      audience: "Individuals 40+",
      frequency: "Monthly (1 hour) - Evenings",
    },
    {
      title: "Meri Pehchaan",
      description:
        "A five-months long talk series carefully curated to awaken the hearts and minds of Muslim women across the globe by helping them rediscover their divine identity, reclaim their emotional strength, and rise above the noise of the world with the clarity of purpose rooted in deep self-awareness, Islamic and Modern psychology.",
      audience: "Professionals & Executives",
      frequency: "June 2026 - 2 hours/2 days",
    },
    {
      title: "Mastering Emotions",
      description:
        "Transformative program helping you reconnect with yourself, regulate emotions, and lead a more intentional, purpose-driven life.",
      audience: "Adults 18+",
      frequency: "Weekly (1.15 hr) - Flexible times",
    },
    {
      title: "The Red Thread",
      description:
        "Safe, stigma-free space exploring the menstrual cycle, hormonal changes, PCOS, and pain management.",
      audience: "Girls & women (teenage to menopause)",
      frequency: "Weekly (1 hr) - Online & Onsite",
    },
    {
      title: "Wellness Reset 2026",
      description:
        "A one-day, women-centric wellness experience designed to promote holistic health and meaningful self-reflection. The event brought together experts from healthcare, psychology, spirituality, and social development to address key aspects of emotional, physical, psychological, and spiritual wellbeing. Through insightful panel discussions, guided wellness activities, creative engagement sessions, and preventive health screenings, participants gained practical tools to improve their overall wellbeing and lifestyle.",
      audience: "Daughters 13+, Moms up to 70",
      frequency: "June 2026 - 1.5 hrs/session",
    },
    {
      title: "Awareness & Screening Programs",
      description:
        "Designed to promote preventive healthcare by educating communities about common and high-risk health conditions such as breast cancer, hepatitis, hypertension, PCOS, and other non-communicable diseases (NCDs). Through expert-led awareness sessions and basic health screenings, these programs encourage early detection, informed decision-making, and healthier lifestyle choices.",
      audience: "Adults 18+ (single & married)",
      frequency: "Weekly (1.15 hr) - Flexible times",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-balance mb-4">Our Programs & Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive wellness initiatives designed by experts for every life stage
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold text-foreground">Audience:</span> {service.audience}
                </p>
                <p>
                  <span className="font-semibold text-foreground">Schedule:</span> {service.frequency}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
