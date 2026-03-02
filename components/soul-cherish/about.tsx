import OrnateDivider from "./ornate-divider"

export default function About() {
  return (
    <section id="about" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <OrnateDivider label="A B O U T  U S" />
        <h2 className="font-serif text-3xl md:text-5xl">Soul Cherish</h2>
        <p className="mx-auto mt-4 max-w-2xl text-(--color-muted-foreground)">
          At Soul Cherish, we believe that every moment deserves to be cherished. Our handcrafted nuts and chocolate
          hampers are thoughtfully curated to bring joy and elegance to your celebrations.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-(--color-muted-foreground)">
          Each hamper is a testament to our commitment to quality, artistry, and care. From the finest ingredients to
          the most ornate packaging, every detail speaks to our passion for creating memorable experiences.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-(--color-muted-foreground)">
          Whether you're gifting to a loved one or treating yourself, Soul Cherish brings a touch of luxury and warmth
          to life's precious moments.
        </p>
      </div>
    </section>
  )
}
