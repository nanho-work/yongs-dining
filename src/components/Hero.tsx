import HomeHero from '@/components/sections/HomeHero'
import SeasonalNotice from '@/components/sections/SeasonalNotice'
import HomeSearchGuide from '@/components/sections/HomeSearchGuide'
import HomeFaq from '@/components/sections/HomeFaq'
import BlogPreviewSlider from './BlogPreviewSlider'

export default function Hero() {
  return (
    <section className="mt-0 hero-font">
      <HomeHero />
      <SeasonalNotice />
      <HomeSearchGuide />
      <HomeFaq />
      <BlogPreviewSlider />
    </section>
  )
}
