import OrnateDivider from "./ornate-divider"

export default function Hero() {
  return (
    <section className="px-4 pt-8 md:pt-16">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-pretty font-serif text-4xl leading-tight md:text-6xl">
          Handcrafted Nuts & Chocolate Hampers
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-(--color-muted-foreground) md:mt-6">
          Soul Cherish curates exquisite hampers of roasted nuts, pralines, and chocolate-dipped delights—thoughtfully
          composed for gifting and savored rituals.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 md:mt-10">
          <a
            href="#collections"
            className="rounded-full border border-(--color-border) bg-(--color-primary) px-6 py-3 text-(--color-primary-foreground)"
          >
            Shop hampers
          </a>
          <a
            href="#story"
            className="rounded-full border border-(--color-border) bg-(--color-secondary) px-6 py-3 hover:bg-(--color-muted)"
          >
            Our story
          </a>
        </div>

        <OrnateDivider label="•  EST. 2025  •" />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q6MBF1Odbug5Eke40lzuzaY3gXKMBn.png"
            alt="Luxury wicker hamper with gold ribbon, jars, and festive pearls"
            className="aspect-[3/2] w-full rounded-xl border border-(--color-border) object-cover"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GDQ89uC4eBQilo3gh51VgoZdOuifO4.png"
            alt="Elegant pink festive chocolate box with assorted chocolates in a gold tray"
            className="aspect-[3/2] w-full rounded-xl border border-(--color-border) object-cover"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ETWxKsHreZwXsortTm7p98l160xotM.png"
            alt="Ornate cream-and-gold box with tasselled jars and nuts"
            className="aspect-[3/2] w-full rounded-xl border border-(--color-border) object-cover"
          />
        </div>
      </div>
    </section>
  )
}
