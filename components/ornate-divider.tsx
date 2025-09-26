export default function OrnateDivider({ label }: { label?: string }) {
  return (
    <div className="my-8 flex items-center justify-center">
      <div className="h-px flex-1 bg-(--color-border)" />
      <div className="mx-4 flex items-center justify-center rounded-full border border-(--color-accent) px-3 py-1 text-sm tracking-widest text-(--color-accent)">
        {label ?? "SC"}
      </div>
      <div className="h-px flex-1 bg-(--color-border)" />
    </div>
  )
}
