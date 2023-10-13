// Sections
import { Hero, Branding, Expertise, BigText } from '@/components/sections'

export default function Home() {
  return (
    <>
      <Hero />
      <Branding />
      <Expertise />
      <BigText />
      <div className="h-[200vh]"></div>
    </>
  )
}
