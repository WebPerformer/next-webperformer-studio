// Sections
import {
  Hero,
  Branding,
  Expertise,
  BigText,
  Hiring,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Hero />
      <Branding />
      <Expertise />
      <BigText />
      <Hiring />
      <div className="h-[200vh]"></div>
    </>
  )
}
