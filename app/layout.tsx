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
      <body>
        {/* Always render children, but hide when loading */}
        <div style={{ display: isLoading ? 'none' : 'block' }}>
          {children}
        </div>
        
        {/* Preloader with conditional rendering */}
        {isLoading && (
          <Preloader onLoadingComplete={() => setIsLoading(false)} />
        )}
      </body>
    </html>
  )
}
