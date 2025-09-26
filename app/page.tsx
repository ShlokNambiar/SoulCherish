import Navbar from "@/components/soul-cherish/navbar"
import Hero from "@/components/soul-cherish/hero"
import Collections from "@/components/soul-cherish/collections"
import Artisan from "@/components/soul-cherish/artisan"
import Footer from "@/components/soul-cherish/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="story" className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl">A devotion to the beautiful</h2>
          <p className="mx-auto mt-3 max-w-2xl text-(--color-muted-foreground)">
            Born from evenings of slow craft and quiet joy, Soul Cherish is a homage to the moments you savor. Our
            chocolates are invitations to pause—ornamental on the outside, soulful within.
          </p>
        </div>
      </section>
      <Collections />
      <Artisan />
      <Footer />
    </main>
  )
}
