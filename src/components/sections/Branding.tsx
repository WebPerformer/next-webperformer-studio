'use client'
import React from 'react'

// Components
import { BrandingCards, TextHighlight } from '..'

export default function Branding() {
  return (
    <div className="p-0 sm:bg-dark-600 rounded-2xl sm:p-10 md:p-20">
      <div className="flex items-end justify-between">
        <div className="text-lg">
          <p>Full-service agency.</p>
          <p>Two engagement models.</p>
        </div>
        <div className="hidden text-base sm:block">
          <h1>WebPerformer Studio.</h1>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray my-5 opacity-50" />
      <TextHighlight />
      <BrandingCards />
    </div>
  )
}
