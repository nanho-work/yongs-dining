export type SeasonalOpeningHours = {
  dayOfWeek: string[]
  opens: string
  closes: string
  validFrom: string
  validThrough: string
}

export type SeasonalNoticeConfig = {
  enabled: boolean
  title: string
  description: string
  period: string
  hours: string
  menuItems: readonly string[]
  keywords: readonly string[]
  specialOpeningHours: readonly SeasonalOpeningHours[]
}

// 명절·시즌 일정이 확정되면 내용을 채우고 enabled를 true로 변경합니다.
// 이 정보는 메인 화면과 Restaurant 구조화 데이터에 함께 반영됩니다.
export const SEASONAL_NOTICE: SeasonalNoticeConfig = {
  enabled: false,
  title: '',
  description: '',
  period: '',
  hours: '',
  menuItems: [],
  keywords: [],
  specialOpeningHours: [],
}
