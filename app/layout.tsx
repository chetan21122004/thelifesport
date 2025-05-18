"use client"

import { Preloader } from "@/components/preloader"
import { useState, useEffect } from "react"
import "./globals.css"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <html lang="en">
      <body className={isLoading ? 'overflow-hidden' : ''}>
        <Preloader onLoadingComplete={() => setIsLoading(false)} />
        <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
          {children}
        </div>
      </body>
    </html>
  )
}
