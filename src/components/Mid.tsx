import Image from 'next/image'
import { htmlToPlainText } from '@/lib/text'

const imageData = [
  {
    src: '/mid5.webp',
    title: '행복한 한 끼, 잊지 못할 추억',
    description: '따뜻한 환대와 함께 <br/>웃음이 가득한 순간. <br/> <br/>셰프와 손님이 함께 만들어가는 <br/>용스다이닝포차의 진짜 이야기.',
  },
  {
    src: '/mid1.webp',
    title: '추억과 낭만이 공존하는 공간',
    description: '빈티지 LP판과 <br/>감성적인 소품들이 어우러진 공간,<br/> <br/>음악과 이야기가 흐르는 <br/>용스다이닝포차의 한켠.',
  },
  {
    src: '/mid4.webp',
    title: '감각과 실력을 겸비한 셰프의 공간',
    description: '개성 넘치는 감성 공간에서,<br/> 셰프가 선보이는 <br/>진짜 요리와 따뜻한 환대. <br/><br/>용스다이닝포차는 맛과 분위기 <br/>모두를 갖춘 특별한 장소입니다.',
  },
  {
    src: '/mid3.webp',
    title: '레트로 감성의 결정체',
    description: 'LP판, 카세트테이프, <br/>추억의 소품들이 가득한 이 공간은 <br/>시간여행을 떠나는 듯한 <br/>기분을 선사합니다.<br/> <br/>용스다이닝포차만의<br/> 감성으로 꾸며진 포토존.',
  },
  {
    src: '/mid2.webp',
    title: '홍콩 골목에서 만난 듯한 감성 입구',
    description: '여행의 추억처럼 반겨주는 이 입구는 <br/>셰프의 경험과 감각이 녹아든 시작점입니다. <br/>멋스럽게 꾸며진 외관을 지나, <br/>이제 새로운 식문화를 경험해보세요.',
  },
];

const stepData = imageData

export default function MidSection() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* lg 이상: 기존 계단형 레이아웃 */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-4 gap-6">
          {/* Row 1: (사진1+설명1) | (사진3+설명3) */}
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-6 items-start">
              {/* 사진1 */}
              <div className="relative w-full overflow-hidden">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={stepData[0].src}
                    alt={stepData[0].title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* 설명1 */}
              <div className="p-0">
                <h3 className="text-xl font-semibold text-gray-900">{stepData[0].title}</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-600 whitespace-pre-line">
                  {htmlToPlainText(stepData[0].description)}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-6 items-start">
              {/* 사진3 */}
              <div className="relative w-full overflow-hidden">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={stepData[2].src}
                    alt={stepData[2].title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* 설명3 */}
              <div className="p-0">
                <h3 className="text-xl font-semibold text-gray-900">{stepData[2].title}</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-600 whitespace-pre-line">
                  {htmlToPlainText(stepData[2].description)}
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: (설명2+사진2) | (설명4+사진4) */}
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-6 items-start">
              {/* 설명2 */}
              <div className="p-0">
                <h3 className="text-xl font-semibold text-gray-900">{stepData[1].title}</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-600 whitespace-pre-line">
                  {htmlToPlainText(stepData[1].description)}
                </p>
              </div>

              {/* 사진2 */}
              <div className="relative w-full overflow-hidden">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={stepData[1].src}
                    alt={stepData[1].title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-6 items-start">
              {/* 설명4 */}
              <div className="p-0">
                <h3 className="text-xl font-semibold text-gray-900">{stepData[3].title}</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-600 whitespace-pre-line">
                  {htmlToPlainText(stepData[3].description)}
                </p>
              </div>

              {/* 사진4 */}
              <div className="relative w-full overflow-hidden">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={stepData[3].src}
                    alt={stepData[3].title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 mx-auto mt-4 w-full max-w-2xl">
            <div className="grid grid-cols-2 items-center gap-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={stepData[4].src}
                  alt={stepData[4].title}
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{stepData[4].title}</h3>
                <p className="mt-2 whitespace-pre-line text-base leading-relaxed text-gray-600">
                  {htmlToPlainText(stepData[4].description)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* lg 미만: 기존 레이아웃 유지 */}
      <div className="space-y-12 lg:hidden">
        {imageData.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col sm:flex-row ${i % 2 === 1 ? 'sm:flex-row-reverse' : ''} items-center gap-6 sm:gap-8`}
          >
            <div className="relative w-full overflow-hidden sm:w-7/12">
              <div className="relative aspect-[4/3] w-full sm:aspect-[3/4]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 58vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="w-full text-center sm:w-5/12 sm:text-left">
              <div className="mx-auto max-w-md sm:mx-0">
                <h3 className="break-keep text-lg font-semibold text-gray-900 sm:text-xl">{item.title}</h3>
                <p className="mt-2 break-keep whitespace-pre-line text-sm leading-relaxed text-gray-600 sm:text-base">
                  {htmlToPlainText(item.description)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
