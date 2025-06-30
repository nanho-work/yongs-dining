// src/app/page.tsx
import Hero from '@/components/Hero'
import Mid from '@/components/Mid'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <section className="bg-white">
      {/* Hero */}
      <Hero />
      
      <Mid />
      <Footer/>
    </section>
  )
}