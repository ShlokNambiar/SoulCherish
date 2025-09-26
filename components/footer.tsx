import OrnateDivider from "./ornate-divider"

export default function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6">
      <div className="mx-auto max-w-6xl">
        <OrnateDivider label="S O U L  •  C H E R I S H" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-(--color-muted-foreground)">
            © {new Date().getFullYear()} Soul Cherish. Crafted with care.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#newsletter"
              className="rounded-full border border-(--color-border) bg-(--color-secondary) px-4 py-2 hover:bg-(--color-muted)"
            >
              Join newsletter
            </a>
            <a
              href="#shop"
              className="rounded-full border border-(--color-border) bg-(--color-primary) px-4 py-2 text-(--color-primary-foreground)"
            >
              Shop now
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
