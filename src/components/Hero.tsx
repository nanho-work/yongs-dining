import FeaturedMenus from '@/components/sections/FeaturedMenus'
import HomeHero from '@/components/sections/HomeHero'
import BlogPreviewSlider from './BlogPreviewSlider'

export default function Hero() {
  return (
    <section className="mt-0 hero-font">
      <HomeHero />
      <FeaturedMenus />
      <BlogPreviewSlider />
    </section>
  )
}
