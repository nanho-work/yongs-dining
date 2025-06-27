// src/app/page.tsx
import Hero from '@/components/Hero'
import Mid from '@/components/Mid'

export default function Home() {
  return (
    <section className="bg-white">
      {/* Hero */}
      <Hero />
      
      <Mid />
    </section>
  )
}