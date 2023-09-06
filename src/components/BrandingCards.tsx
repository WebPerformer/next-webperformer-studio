'use client'
import React, { useRef, useEffect } from 'react'

export default function BrandingCards() {
  // Spectrum animation on card
  const cardRef = useRef(null)
  useEffect(() => {
    const spectrumContainer = cardRef.current as HTMLElement | null // Explicitly cast to HTMLElement | null
    if (spectrumContainer) {
      spectrumContainer.onmousemove = (e) => {
        const spectrumElements = document.getElementsByClassName('spectrum')
        for (let i = 0; i < spectrumElements.length; i++) {
          const spectrum = spectrumElements[i] as HTMLElement // Explicitly cast to HTMLElement
          const rect = spectrum.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          spectrum.style.setProperty('--mouse-x', `${x}px`)
          spectrum.style.setProperty('--mouse-y', `${y}px`)
        }
      }
    } else {
      console.error("Element with ID 'cards' not found.")
    }
  }, [])

  return (
    <div className="relative my-32">
      <div className="grid grid-cols-5 gap-10 xl:gap-5" ref={cardRef}>
        <div className="spectrum p-5 bg-dark-500 rounded-2xl">
          <div className="flex items-center justify-center whitespace-nowrap">
            <h1 className="text-lg font-medium">Branding</h1>
          </div>
        </div>
        <div className="spectrum p-5 bg-dark-500 rounded-2xl">
          <div className="flex items-center justify-center whitespace-nowrap">
            <h1 className="text-lg font-medium">UI/UX Design</h1>
          </div>
        </div>
        <div className="spectrum p-5 bg-dark-500 rounded-2xl">
          <div className="flex items-center justify-center whitespace-nowrap">
            <h1 className="text-lg font-medium">Development</h1>
          </div>
        </div>
        <div className="spectrum p-5 bg-dark-500 rounded-2xl">
          <div className="flex items-center justify-center whitespace-nowrap">
            <h1 className="text-lg font-medium">Mobile</h1>
          </div>
        </div>
        <div className="spectrum p-5 bg-dark-500 rounded-2xl">
          <div className="flex items-center justify-center whitespace-nowrap">
            <h1 className="text-lg font-medium">SEO</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
