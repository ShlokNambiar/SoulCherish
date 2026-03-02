import OrnateDivider from "./ornate-divider"

export default function Hero() {
  return (
    <section className="relative px-4 pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-pretty font-serif text-5xl leading-tight md:text-7xl font-light tracking-tight">
          Handcrafted Nuts & Chocolate Hampers
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-balance text-(--color-muted-foreground) text-lg md:text-xl leading-relaxed">
          Soul Cherish curates exquisite hampers of roasted nuts, pralines, and chocolate-dipped delights—thoughtfully
          composed for gifting and savored rituals.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:mt-12">
          <a
            href="#collections"
            className="rounded-full bg-(--color-primary) px-8 py-3 text-(--color-primary-foreground) font-medium transition-opacity hover:opacity-90"
          >
            Explore Collections
          </a>
          <a
            href="#about"
            className="rounded-full border border-(--color-border) bg-(--color-secondary) px-8 py-3 font-medium hover:bg-(--color-muted) transition-colors"
          >
            Our Story
          </a>
        </div>

        <OrnateDivider label="•  EST. 2025  •" />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q6MBF1Odbug5Eke40lzuzaY3gXKMBn.png"
            alt="Luxury wicker hamper with gold ribbon, jars, and festive pearls"
            className="aspect-square w-full rounded-2xl border border-(--color-border) object-cover shadow-sm hover:shadow-md transition-shadow"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GDQ89uC4eBQilo3gh51VgoZdOuifO4.png"
            alt="Elegant pink festive chocolate box with assorted chocolates in a gold tray"
            className="aspect-square w-full rounded-2xl border border-(--color-border) object-cover shadow-sm hover:shadow-md transition-shadow"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ETWxKsHreZwXsortTm7p98l160xotM.png"
            alt="Ornate cream-and-gold box with tasselled jars and nuts"
            className="aspect-square w-full rounded-2xl border border-(--color-border) object-cover shadow-sm hover:shadow-md transition-shadow"
          />
        </div>
      </div>
    </section>
  )
}
