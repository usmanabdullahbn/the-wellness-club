import { Star } from "lucide-react"

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Fatima Ahmed",
      role: "Program Participant",
      text: "The Wellness Club has been transformative for me. The safe space and expert guidance helped me heal and grow in ways I never expected.",
      rating: 5,
    },
    {
      name: "Zainab Khan",
      role: "Support Group Member",
      text: "Finding this community was a blessing. Everyone is so supportive and the programs are designed with such care and expertise.",
      rating: 5,
    },
    {
      name: "Amira Hassan",
      role: "Summer Camp Parent",
      text: "The Summer Camp strengthened my bond with my daughter. We learned and grew together in such a nurturing environment.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-balance mb-4">What Our Community Says</h2>
          <p className="text-lg text-muted-foreground">Real stories from real people</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border">
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(null)
                  .map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
              </div>
              <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
