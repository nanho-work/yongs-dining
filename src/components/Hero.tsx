
import HeroCarousel from '@/components/HeroCarousel'
import BlogPreviewSlider from './BlogPreviewSlider'

export default function Hero() {
  return (
    <section className="bg-white mt-10 sm:mt-16 py-4 sm:py-4 hero-font">
       <HeroCarousel />
       <BlogPreviewSlider />
    </section>
  )
}