export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-600 border-t border-gray-200 text-sm py-12 px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* 브랜드 소개 */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">용스다이닝포차</h3>
          <p>모란역 도보 5분 거리<br />한우전골과 교자가 맛있는 포차</p>
        </div>

        {/* 연락처 */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Contact</h3>
          <p>070 8287 0377</p>
          <p>경기 성남시 중원구 제일로63번길 29 102호</p>
        </div>

        {/* 저작권 및 제작사 */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Website</h3>
          <p>ⓒ {new Date().getFullYear()} Yongs Dining</p>
          <p>
            Website by{" "}
            <a
              href="https://laoncode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-800 font-medium"
            >
              LaonCode
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}