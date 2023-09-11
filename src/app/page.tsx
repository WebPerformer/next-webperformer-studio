// Section
import { Hero, Branding, Expertise, BigText, FrontMobile } from '@/components'

export default function Home() {
  return (
    <div>
      <Hero />
      <Branding />
      <Expertise />
      <BigText />
      <FrontMobile />
      <div className="h-[300vh]"></div>
    </div>
  )
}
