"use client"

const PROFILE = "https://www.instagram.com/thelifesportss/"
const EMBED_SRC = "https://www.instagram.com/thelifesportss/embed/"

/**
 * Instagram profile in a plain full-width iframe (official /embed/ URL).
 * Height fills the viewport minus global layout (navbar, footer, mobile bar).
 */
export default function MediaPage() {
  return (
    <>
      <a href={PROFILE} className="sr-only" target="_blank" rel="noopener noreferrer">
        Open @thelifesportss on Instagram
      </a>
      <iframe
        src={EMBED_SRC}
        title="The Life Sports on Instagram"
        className="block w-full max-w-full border-0 bg-white"
        style={{ height: "calc(100dvh - 9.5rem)", minHeight: "min(720px, 85dvh)" }}
        loading="lazy"
        allow="clipboard-write; encrypted-media; picture-in-picture"
      />
    </>
  )
}
