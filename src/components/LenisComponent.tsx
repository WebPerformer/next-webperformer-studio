'use client'
import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function LenisComponent() {
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e: any) => {
      console.log()
    })

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return <></>
}
