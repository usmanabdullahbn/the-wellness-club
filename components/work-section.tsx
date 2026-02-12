export default function WorkSection() {
  const works = [
    {
      title: "Community Workshops",
      image: "/images/workshop-women.jpg",
    },
    {
      title: "Support Groups",
      image: "/images/support-group.jpg",
    },
    {
      title: "Wellness Training",
      image: "/images/wellness-training.jpg",
    },
    {
      title: "Mindfulness Sessions",
      image: "/images/mindfulness-meditation.png",
    },
  ]

  return (
    <section className="py-20 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-balance mb-4">Recent Work</h2>
          <p className="text-lg text-muted-foreground">Glimpses of our community in action</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {works.map((work, index) => (
            <div key={index} className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
              <img
                src={work.image || "/placeholder.svg"}
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
