"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:py-7">
        <Link href="/" className="inline-flex items-center gap-2">
          <Image
            src="/images/soul-cherish/logo.jpg"
            alt="Soul Cherish logo: ornate heart wreath with lotus"
            width={28}
            height={28}
            className="h-7 w-7 rounded-full object-cover ring-1 ring-(--color-border)"
            priority
          />
          <span className="font-serif text-xl tracking-wide md:text-2xl">Soul Cherish</span>
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden rounded-md border border-(--color-border) px-3 py-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-5 bg-(--color-foreground)" />
          <span className="mt-1 block h-0.5 w-5 bg-(--color-foreground)" />
          <span className="mt-1 block h-0.5 w-5 bg-(--color-foreground)" />
        </button>

        <nav
          className={cn(
            "absolute left-0 right-0 top-16 z-20 mx-4 rounded-md border border-(--color-border) bg-(--color-background) p-4 md:static md:mx-0 md:block md:border-none md:p-0",
            open ? "block" : "hidden md:block",
          )}
        >
          <ul className="flex flex-col items-start gap-4 md:flex-row md:items-center">
            <li>
              <Link href="#story" className="hover:text-(--color-primary)">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="#collections" className="hover:text-(--color-primary)">
                Collections
              </Link>
            </li>
            <li>
              <Link href="#craft" className="hover:text-(--color-primary)">
                Craft
              </Link>
            </li>
            <li>
              <Link
                href="#shop"
                className="rounded-full border border-(--color-border) bg-(--color-primary) px-4 py-2 text-(--color-primary-foreground) transition-colors hover:opacity-90"
              >
                Shop Chocolates
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
