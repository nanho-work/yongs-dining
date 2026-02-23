import Image from "next/image";

type LunchItem = {
  id: string;
  title: string;
  price: number;
  description?: string;
  image: string;
  fit?: "cover" | "contain";
  objectPosition?: string;
};

type AddOn = {
  id: string;
  title: string;
  price: number;
  description?: string;
};

const LUNCH_ITEMS: LunchItem[] = [
  {
    id: "deulkkaesundubujjigae",
    title: "들깨순두부찌개",
    price: 9000,
    description: "점심 한정",
    image: "/lunch/lunch_sun.png",
    fit: "contain",
    objectPosition: "center",
  },
  {
    id: "dubugochujangjjigae",
    title: "두부고추장찌개",
    price: 10000,
    description: "점심 한정",
    image: "/lunch/lunch_du.png",
    fit: "contain",
    objectPosition: "center",
  },
  {
    id: "sundubumapadeopbap",
    title: "순두부마파덮밥",
    price: 11000,
    description: "점심 한정",
    image: "/lunch/lunch_ma.png",
    fit: "contain",
    objectPosition: "center",
  },
  {
    id: "yongsdubugimbap",
    title: "용스두부김밥",
    price: 8000,
    description: "점심 한정",
    image: "/lunch/lunch_kim.png",
    fit: "contain",
    objectPosition: "center",
  },
];

const ADD_ONS: AddOn[] = [
  {
    id: "usamgyeop",
    title: "우삼겹 추가",
    price: 3000,
  },
];

const SET_MENU_IMAGE = "/lunch/lunch_set_combo.png";
const USAMGYEOP_IMAGE = "/lunch/lunch_usamgyeop_torch.png";

function formatKRW(value: number) {
  return value.toLocaleString("ko-KR") + "원";
}

export default function Lunch() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-12">
        <header className="mb-6 sm:mb-8">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">용스점심특선</h1>
            <p className="text-sm sm:text-base text-neutral-600">점심시간에만 판매되는 메뉴입니다.</p>
            <span className="text-sm sm:text-base text-neutral-300">·</span>
          </div>
          <p className="mt-2 ml-7 text-sm sm:text-base font-semibold text-neutral-700">
  목–일 12:00–14:30
</p>
        </header>

        {/* 본메뉴 */}
        <div className="mb-10">
          <h2 className="mb-4 text-lg font-semibold">메뉴</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LUNCH_ITEMS.map((item, index) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white"
              >
                <div
                  className={`relative aspect-[4/6] w-full ${(item.fit ?? "contain") === "contain" ? "bg-neutral-100" : ""}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={70}
                    priority
                    style={{ objectPosition: item.objectPosition || "center" }}
                    className={(item.fit ?? "contain") === "contain" ? "object-contain" : "object-cover"}
                  />
                  <div className="absolute right-5 top-3 inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                    점심 한정
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      {item.description ? (
                        <p className="mt-1 text-sm text-neutral-600">{item.description}</p>
                      ) : null}
                    </div>
                    <p className="shrink-0 text-base font-semibold">{formatKRW(item.price)}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700">
                      세트 +4,000원
                    </span>
                    {item.id === "yongsdubugimbap" ? (
                      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700">
                        우삼겹 +3,000원
                      </span>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 하단: 세트메뉴 & 우삼겹 (4그리드) */}
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* 세트메뉴 사진 */}
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
              <div className="relative aspect-[4/6] w-full">
                <Image
                  src={SET_MENU_IMAGE}
                  alt="세트메뉴 구성"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={80}
                  className="object-contain"
                />
              </div>
            </div>

            {/* 세트메뉴 텍스트 */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5">
              <p className="text-sm font-semibold">세트메뉴</p>
              <p className="mt-1 text-sm text-neutral-700">
                <span className="font-medium">본메뉴 + 4,000원</span>
              </p>
              <p className="mt-1 text-sm text-neutral-600">고추튀김 2피스 + 음료</p>

              <div className="mt-4">
                <div className="mb-3 border-t border-dashed border-neutral-300" />
                <div className="text-sm text-neutral-700">
                  <p className="text-sm font-semibold">단품 주문</p>
                  <p className="mt-1">고추튀김 (2피스) {formatKRW(3000)}</p>
                  <p>음료 {formatKRW(2000)}</p>
                </div>
              </div>
            </div>

            {/* 우삼겹 사진 */}
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
              <div className="relative aspect-[4/6] w-full">
                <Image
                  src={USAMGYEOP_IMAGE}
                  alt="우삼겹 토치"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={80}
                  className="object-contain"
                />
              </div>
            </div>

            {/* 우삼겹 텍스트 */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5">
              <p className="text-sm font-semibold">우삼겹 추가</p>
              <p className="mt-2 text-xs text-neutral-500">
                김밥 메뉴에만 추가 가능합니다.
              </p>
              <p className="mt-3 text-base font-semibold">+{formatKRW(3000)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}