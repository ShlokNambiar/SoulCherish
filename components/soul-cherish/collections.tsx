import OrnateDivider from "./ornate-divider"
import Link from "next/link"

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
    <section id="collections" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16">
          <h2 className="text-pretty font-serif text-5xl md:text-6xl font-light tracking-tight">
            Nuts & Chocolate Hampers
          </h2>
          <p className="mt-5 max-w-2xl text-(--color-muted-foreground) text-lg leading-relaxed">
            Curated for gifting, gatherings, and quiet evenings—our hampers pair premium nuts with artisan chocolates.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:gap-8 md:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="group overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-card) transition-all hover:shadow-lg hover:border-(--color-accent)"
            >
              <div className="overflow-hidden">
                <img
                  src={it.img || "/placeholder.svg"}
                  alt={it.title}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-serif text-xl md:text-2xl font-medium leading-tight">{it.title}</h3>
                <p className="mt-3 text-(--color-muted-foreground) leading-relaxed text-sm md:text-base">{it.copy}</p>
                <Link href="#contact" className="mt-5 inline-flex items-center gap-2 text-(--color-primary) font-medium text-sm transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-primary) rounded-sm">
                  <span className="h-px w-6 bg-(--color-primary)" />
                  Order Now
                </Link>
              </div>
            </article>
          ))}
        </div>

        <OrnateDivider />
      </div>
    </section>
  )
}
