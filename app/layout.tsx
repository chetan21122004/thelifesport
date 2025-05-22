"use client"

import { Preloader } from "@/components/preloader"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState, useEffect } from "react"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true);

  // Simply show preloader for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Both content and preloader are always rendered, but with different visibility
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        {/* Always render children, but hide when loading */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        
        {/* Preloader with conditional rendering
        {isLoading && (
          <Preloader onLoadingComplete={() => setIsLoading(false)} />
        )} */}
      </body>
    </html>
  )
}
