'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const prefix = process.env.NODE_ENV === 'production' ? '/yongs-dining' : ''

const imageData = [
  {
    src: `${prefix}/mid5.jpeg`,
    title: '행복한 한 끼, 잊지 못할 추억',
    description: '따뜻한 환대와 함께 웃음이 가득한 순간. <br/> 셰프와 손님이 함께 만들어가는 <br/>용스다이닝포차의 진짜 이야기.',
  },
  {
    src: `${prefix}/mid1.jpeg`,
    title: '추억과 낭만이 공존하는 공간',
    description: '빈티지 LP판과 감성적인 소품들이 어우러진 공간, <br/>음악과 이야기가 흐르는 용스다이닝포차의 한켠.',
  },
  {
    src: `${prefix}/mid4.jpeg`,
    title: '감각과 실력을 겸비한 셰프의 공간',
    description: '개성 넘치는 감성 공간에서,<br/> 셰프가 선보이는 진짜 요리와 따뜻한 환대. <br/>용스다이닝포차는 맛과 분위기 <br/>모두를 갖춘 특별한 장소입니다.',
  },
  {
    src: `${prefix}/mid3.jpeg`,
    title: '레트로 감성의 결정체',
    description: 'LP판, 카세트테이프, <br/>추억의 소품들이 가득한 이 공간은 <br/>시간여행을 떠나는 듯한 기분을 선사합니다. <br/>용스다이닝포차만의 감성으로 꾸며진 포토존.',
  },
  {
    src: `${prefix}/mid2.jpeg`,
    title: '홍콩 골목에서 만난 듯한 감성 입구',
    description: '여행의 추억처럼 반겨주는 이 입구는 <br/>셰프의 경험과 감각이 녹아든 시작점입니다. <br/>멋스럽게 꾸며진 외관을 지나, <br/>이제 새로운 식문화를 경험해보세요.',
  },
]

export default function MidSection() {
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
          }
        })
      },
      { threshold: 0.1 }
    )

    refs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="max-w-6xl mx-auto py-20 px-4 space-y-24">
      {imageData.map((item, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className={`flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-10 opacity-0 translate-y-10 transition-all duration-700 ease-in-out`}
        >
          <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden scale-90 md:scale-80 transition-transform duration-300">
            <Image
              src={item.src}
              alt={item.title}
              width={800} // 원본 비율에 맞게 지정
              height={500}
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p
              className="mt-2 text-sm text-gray-600"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}