// Section
import { Hero, Branding, Expertise, BigText } from '@/components'

export default function Home() {
  return (
    <div>
      <Hero />
      <Branding />
      <Expertise />
      <BigText />
      <div className="h-[300vh]"></div>
    </div>
  )
}
