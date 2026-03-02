"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-(--color-background)/80 backdrop-blur-sm transition-all duration-300 ease-in-out",
        scrolled
          ? "left-0 right-0 top-4 mx-0 rounded-full border border-(--color-border)"
          : "border-b border-(--color-border)",
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between px-4",
          scrolled ? "max-w-full py-2 md:py-2.5" : "max-w-6xl py-4 md:py-5",
        )}
      >
        <Link href="/" className="inline-flex items-center gap-3 shrink-0">
          <Image
            src="/images/soul-cherish/logo.jpg"
            alt="Soul Cherish logo: ornate heart wreath with lotus"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover ring-1 ring-(--color-border)"
            priority
          />
          <span className="font-serif text-lg font-medium tracking-wide md:text-xl">Soul Cherish</span>
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden rounded-md border border-(--color-border) px-3 py-2 hover:bg-(--color-secondary) transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--color-primary)"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-5 bg-(--color-foreground)" />
          <span className="mt-1 block h-0.5 w-5 bg-(--color-foreground)" />
          <span className="mt-1 block h-0.5 w-5 bg-(--color-foreground)" />
        </button>

        <nav
          className={cn(
            "absolute left-0 right-0 top-full z-20 mx-4 mt-2 rounded-lg border border-(--color-border) bg-(--color-background) p-4 shadow-md md:static md:mx-0 md:block md:border-none md:p-0 md:shadow-none",
            open ? "block" : "hidden md:block",
          )}
        >
          <ul className="flex flex-col gap-3 md:flex-row md:items-center md:gap-1">
            <li>
              <Link href="#story" className="block px-3 py-2 rounded-md hover:bg-(--color-secondary) transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--color-primary)">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="#about" className="block px-3 py-2 rounded-md hover:bg-(--color-secondary) transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--color-primary)">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#collections"
                className="block px-3 py-2 rounded-md hover:bg-(--color-secondary) transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--color-primary)"
              >
                Collections
              </Link>
            </li>
            <li className="md:ml-2">
              <Link
                href="#contact"
                className="block rounded-full border border-(--color-border) bg-(--color-primary) px-5 py-2 text-(--color-primary-foreground) font-medium transition-opacity hover:opacity-90 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary) text-center"
              >
                Order Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
