import Image from 'next/image'

const STORE_ADDRESS = '경기 성남시 중원구 제일로63번길 29 102호'
const STORE_PHONE = '070-8287-0377'
const STORE_PHONE_LINK = '07082870377'
const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=%EA%B2%BD%EA%B8%B0%20%EC%84%B1%EB%82%A8%EC%8B%9C%20%EC%A4%91%EC%9B%90%EA%B5%AC%20%EC%A0%9C%EC%9D%BC%EB%A1%9C63%EB%B2%88%EA%B8%B8%2029'
const RESERVE_URL = 'https://open.kakao.com/o/sgozNuEh'

const businessHours = [
  { day: '평일', hours: '18:00 ~ 01:00' },
  { day: '주말', hours: '17:00 ~ 02:00' },
]

const lunchHours = [{ day: '목요일 ~ 일요일', hours: '12:00 ~ 15:00' }]

const parkingOptions = ['모란복지관 지하주차장', '모란시장 공영주차장', '중원구청 주차장']

export default function Location() {
  return (
    <div className="max-w-6xl mx-auto py-4 sm:py-6">
      <header className="mb-8 rounded-2xl border border-amber-100 bg-gradient-to-r from-white/90 to-amber-50/80 p-5 sm:p-6 shadow-sm">
        <p className="text-xs sm:text-sm font-semibold tracking-wide text-red-500">VISIT YONGS DINING</p>
        <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-neutral-900">매장안내</h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600">
          처음 방문하셔도 쉽게 찾고, 바로 예약할 수 있도록 핵심 정보만 정리했습니다.
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
          <a
            href={`tel:${STORE_PHONE_LINK}`}
            className="inline-flex justify-center items-center rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white hover:bg-red-600"
          >
            전화하기
          </a>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center rounded-xl border border-red-200 bg-white px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50"
          >
            길찾기
          </a>
          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center rounded-xl border border-amber-300 bg-amber-100 px-4 py-3 text-sm font-semibold text-amber-900 hover:bg-amber-200"
          >
            카카오 예약
          </a>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
        <div className="w-full relative">
          <Image
            src="/location.jpeg"
            alt="용스다이닝포차 매장 이미지"
            width={800}
            height={600}
            className="object-cover w-full h-auto rounded-2xl shadow-sm border border-amber-100"
          />
        </div>

        <div className="space-y-4 text-sm text-gray-800">
          <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
            <h3 className="text-base font-bold text-neutral-900">위치</h3>
            <p className="mt-2 text-sm sm:text-base leading-relaxed">{STORE_ADDRESS}</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
            <h3 className="text-base font-bold text-neutral-900">영업시간</h3>
            <ul className="mt-3 space-y-2">
              {businessHours.map((item) => (
                <li
                  key={item.day}
                  className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2"
                >
                  <span className="font-semibold text-gray-700">{item.day}</span>
                  <span className="font-medium text-gray-900">{item.hours}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-3">※ 평일 12시 이후는 시간 변동 가능 / 전화 문의</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
            <h3 className="text-base font-bold text-neutral-900">점심특선</h3>
            <ul className="mt-3 space-y-2">
              {lunchHours.map((item) => (
                <li
                  key={item.day}
                  className="flex items-center justify-between rounded-lg bg-amber-50 px-3 py-2"
                >
                  <span className="font-semibold text-amber-900">{item.day}</span>
                  <span className="font-medium text-amber-950">{item.hours}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
            <h3 className="text-base font-bold text-neutral-900">주차</h3>
            <ul className="mt-2 space-y-1 text-sm sm:text-base">
              {parkingOptions.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-3">(50분 1,000원 / 추가 10분당 200원 / 최대 10,000원)</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
            <h3 className="text-base font-bold text-neutral-900">연락처 & 좌석</h3>
            <p className="mt-2">
              전화:
              {' '}
              <a href={`tel:${STORE_PHONE_LINK}`} className="font-semibold text-red-600 hover:underline">
                {STORE_PHONE}
              </a>
            </p>
            <p className="mt-1 text-sm sm:text-base">좌석: 1인석 / 입식 / 연인석</p>
          </section>
        </div>
      </div>
    </div>
  )
}
