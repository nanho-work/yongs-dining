import Image from 'next/image'
import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { PARKING_OPTIONS, STORE_HOURS, STORE_INFO, STORE_LINKS } from '@/constants/store'

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
            href={`tel:${STORE_INFO.phoneHref}`}
            className="inline-flex justify-center items-center gap-2 rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white hover:bg-red-600"
          >
            <Phone size={16} aria-hidden />
            전화하기
          </a>
          <a
            href={STORE_LINKS.map}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50"
          >
            <MapPin size={16} aria-hidden />
            길찾기
          </a>
          <a
            href={STORE_LINKS.reservation}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 rounded-xl border border-amber-300 bg-amber-100 px-4 py-3 text-sm font-semibold text-amber-900 hover:bg-amber-200"
          >
            <MessageCircle size={16} aria-hidden />
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
            <p className="mt-2 text-sm sm:text-base leading-relaxed">{STORE_INFO.address}</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
            <h3 className="text-base font-bold text-neutral-900">영업시간</h3>
            <ul className="mt-3 space-y-2">
              {STORE_HOURS.business.map((item) => (
                <li
                  key={item.day}
                  className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2"
                >
                  <span className="font-semibold text-gray-700">{item.day}</span>
                  <span className="font-medium text-gray-900">{item.hours}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-3">※ {STORE_HOURS.note}</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
            <h3 className="text-base font-bold text-neutral-900">점심특선</h3>
            <ul className="mt-3 space-y-2">
              {STORE_HOURS.lunch.map((item) => (
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
              {PARKING_OPTIONS.map((item) => (
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
              <a href={`tel:${STORE_INFO.phoneHref}`} className="font-semibold text-red-600 hover:underline">
                {STORE_INFO.phone}
              </a>
            </p>
            <p className="mt-1 text-sm sm:text-base">좌석: {STORE_INFO.seats}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
