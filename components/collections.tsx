import OrnateDivider from "./ornate-divider"

const items = [
  {
    title: "Heritage Nut & Cacao Hamper",
    copy: "A graceful curation of roasted almonds, hazelnuts, and dark cacao thins—wrapped for effortless gifting.",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ETWxKsHreZwXsortTm7p98l160xotM.png",
  },
  {
    title: "Gourmet Nut Mix & Truffles",
    copy: "Hand-roasted nut medley paired with silky chocolate truffles for a balanced, indulgent tasting.",
    img: "/images/soul-cherish/almond-hazelnut-truffle-arrangement.jpg",
  },
  {
    title: "Pistachio Rose Praline Hamper",
    copy: "Fragrant pistachio pralines with rose-kissed notes, nestled among premium nut assortments.",
    img: "/images/soul-cherish/pistachio-saffron-hamper.jpg",
  },
  {
    title: "Walnut Caramel Clusters",
    copy: "Buttery caramel and walnut clusters enrobed in chocolate—crisp, crackly, and deeply satisfying.",
    img: "/images/soul-cherish/assorted-brittle-tray-marble.jpg",
  },
  {
    title: "Ornate Truffles",
    copy: "Velvety ganache with roasted cocoa notes, finished with hand-gilded accents for celebration.",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GDQ89uC4eBQilo3gh51VgoZdOuifO4.png",
  },
  {
    title: "Amber Caramels & Nuts",
    copy: "Sea-salted amber caramels alongside toasted nut bites—an elegant contrast of textures.",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0T5xyaRYu0kNiPK2TY4zxMNnlQ9kLv.png",
  },
]

export default function Collections() {
  return (
    <section id="collections" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl md:text-5xl">Nuts & Chocolate Hampers</h2>
        <p className="mt-3 max-w-2xl text-(--color-muted-foreground)">
          Curated for gifting, gatherings, and quiet evenings—our hampers pair premium nuts with artisan chocolates.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="group overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-card)"
            >
              <img
                src={it.img || "/placeholder.svg"}
                alt={it.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="p-5">
                <h3 className="font-serif text-xl md:text-2xl">{it.title}</h3>
                <p className="mt-2 text-(--color-muted-foreground)">{it.copy}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-(--color-accent)">
                  <span className="h-px w-6 bg-(--color-accent)" />
                  Discover
                </div>
              </div>
            </article>
          ))}
        </div>

        <OrnateDivider />
      </div>
    </section>
  )
}
