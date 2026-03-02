export default function Artisan() {
  return (
    <section id="craft" className="px-4 pb-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="font-serif text-3xl md:text-5xl">The Art of Temper</h2>
          <p className="mt-3 text-pretty text-(--color-muted-foreground)">
            In our quiet atelier, chocolate is coaxed to a perfect snap and satin sheen. We marry heritage methods with
            thoughtful sourcing, working only with growers who treat the earth and its people with dignity.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            <li className="rounded-lg border border-(--color-border) p-4">Slow tempered for glossy finish</li>
            <li className="rounded-lg border border-(--color-border) p-4">Single–origin, ethically sourced cacao</li>
            <li className="rounded-lg border border-(--color-border) p-4">Hand–painted details in warm gold</li>
            <li className="rounded-lg border border-(--color-border) p-4">Small batches, seasonal flavors</li>
          </ul>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-2xl border border-(--color-border)">
            <img
              src="/artisan-chocolatier-tempering-chocolate-on-marble.jpg"
              alt="Chocolatier tempering chocolate on marble slab"
              className="w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-6 top-6 flex items-center justify-between text-(--color-accent)">
              <span className="rounded-full border border-(--color-accent) px-3 py-1 text-xs tracking-widest">
                SOUL
              </span>
              <span className="rounded-full border border-(--color-accent) px-3 py-1 text-xs tracking-widest">
                CHERISH
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
