import { STORE_INFO } from '@/constants/store'

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-300/80 bg-[#f5ece5] text-gray-700 text-sm py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">용스다이닝포차</h3>
          <p className="leading-relaxed">
            {STORE_INFO.neighborhood}
            <br />
            두부요리에 반주 한 잔, 모란의 작은 감성포차
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
          <p>
            <a className="hover:underline" href={`tel:${STORE_INFO.phoneHref}`}>
              {STORE_INFO.phone}
            </a>
          </p>
          <p className="mt-1 leading-relaxed">
            {STORE_INFO.address}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Website</h3>
          <p>ⓒ {new Date().getFullYear()} Yongs Dining</p>
          <p>
            Website by{' '}
            <a
              href="https://laoncode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-900 font-medium"
            >
              LaonCode
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
