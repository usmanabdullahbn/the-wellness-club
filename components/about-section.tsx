export default function AboutSection() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-balance mb-4">About The Wellness Club</h2>
          <p className="text-lg text-muted-foreground">
            We are a community-driven organization dedicated to the betterment of society
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Create lasting positive change by promoting physical health, enhancing mental well-being, and embracing a
              holistic approach to health that considers the interconnectedness of body, mind, and spirit.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-xl font-semibold text-primary mb-3">Who We Are</h3>
            <p className="text-muted-foreground leading-relaxed">
              A community-driven organization dedicated to empowering individuals and communities through comprehensive
              wellness initiatives designed specifically for different age groups and skill sets.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-xl font-semibold text-primary mb-3">Why We Matter</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our programs are curated by subject experts and experienced individuals, providing evidence-informed
              support that creates safe, inclusive spaces for healing, growth, and meaningful engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
