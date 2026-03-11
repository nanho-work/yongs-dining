import HeroCarousel from '@/components/HeroCarousel'
import BlogPreviewSlider from './BlogPreviewSlider'

export default function Hero() {
  return (
    <section className="mt-0 py-2 hero-font">
      <HeroCarousel />
      <BlogPreviewSlider />
    </section>
  )
}
