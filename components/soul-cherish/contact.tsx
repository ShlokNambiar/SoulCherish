import OrnateDivider from "./ornate-divider"

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <OrnateDivider label="G E T  I N  T O U C H" />
        <h2 className="font-serif text-3xl md:text-5xl">Ready to indulge?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-(--color-muted-foreground)">
          Contact us to place your order for our premium nuts and chocolate hampers. Reach out via WhatsApp or phone.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/918600314031"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-(--color-border) bg-(--color-secondary) px-6 py-3 font-medium hover:bg-(--color-muted)"
          >
            Message on WhatsApp
          </a>
          <a
            href="tel:+918600314031"
            className="rounded-full border border-(--color-border) bg-(--color-primary) px-6 py-3 font-medium text-(--color-primary-foreground) hover:opacity-90"
          >
            Call +91 8600314031
          </a>
        </div>
      </div>
    </section>
  )
}
