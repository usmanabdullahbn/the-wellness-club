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
      title: "Shifting Mindsets",
      description:
        "High-impact 4-hour workshop equipping you with tools to reshape thought patterns, boost productivity, and lead with purpose.",
      audience: "Professionals & Executives",
      frequency: "June 2025 - 2 hours/2 days",
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
      title: "Summer Camp 2025",
      description:
        "4-day Mom & Daughter Summer Camp blending fun activities, sports, and guided self-awareness sessions.",
      audience: "Daughters 13+, Moms up to 70",
      frequency: "June 2025 - 1.5 hrs/session",
    },
    {
      title: "Relationship Mastery",
      description:
        "Dedicated program supporting individuals and couples in cultivating healthier, faith-aligned, emotionally intelligent relationships.",
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
