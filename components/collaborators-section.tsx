export default function CollaboratorsSection() {
  const logos = [
    "/images/collab-1.png",
    "/images/collab-2.png",
    "/images/collab-3.png",
  ]

  return (
    <section className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-balance mb-6">Our Collaborators</h2>
        <p className="text-lg text-muted-foreground mb-6">Trusted partners who support our mission</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-items-center">
          {logos.map((src, i) => (
            <div key={i} className="bg-card p-4 rounded-lg flex items-center justify-center border border-border">
              <img src={src} alt={`Collaborator ${i + 1}`} className="max-h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
