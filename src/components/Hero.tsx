import FeaturedMenus from '@/components/sections/FeaturedMenus'
import HomeHero from '@/components/sections/HomeHero'

export default function Hero() {
  return (
    <div className="mt-0 hero-font">
      <HomeHero />
      <FeaturedMenus />
    </div>
  )
}
