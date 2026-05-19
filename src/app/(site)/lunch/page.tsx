import Lunch from "@/components/lunch/Lunch";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "용스다이닝포차 점심특선 | 목-일 12:00-15:00",
  description: "용스다이닝포차 점심특선 메뉴와 세트 구성을 확인해보세요.",
  alternates: {
    canonical: "https://yongs-dining.com/lunch",
  },
  openGraph: {
    title: "용스다이닝포차 점심특선",
    description: "점심 한정 메뉴와 세트 구성을 만나보세요.",
    url: "https://yongs-dining.com/lunch",
    siteName: "용스다이닝포차",
    images: [
      {
        url: "/lunch/lunch_set_combo.png",
        width: 1200,
        height: 630,
        alt: "용스다이닝포차 점심특선 메뉴",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function LunchPage() {
  return (
    <section className="pt-6 sm:pt-8 pb-12 sm:pb-14">
      <Lunch />
    </section>
  );
}
