'use client'
import React, { useRef, useEffect } from 'react'

// Text card
const TextCard = [
  {
    text: 'Branding',
  },
  {
    text: 'UI/UX Design',
  },
  {
    text: 'Development',
  },
  {
    text: 'Mobile',
  },
  {
    text: 'SEO',
  },
  {
    text: 'Frontend',
  },
]

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
    <div className="hidden relative mt-10 sm:block">
      <div
        className="grid grid-cols-2 gap-2 sm:gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        ref={cardRef}
      >
        {TextCard.map((item, index) => {
          return (
            <div key={index} className="spectrum p-5 bg-dark-500 rounded-2xl">
              <div className="flex items-center justify-center whitespace-nowrap">
                <h1 className="text-sm sm:text-base md:text-base lg:text-lg font-medium">
                  {item.text}
                </h1>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
