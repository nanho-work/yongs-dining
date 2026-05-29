export function htmlToPlainText(raw: string) {
  return raw
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export function formatKRW(value: number) {
  return `${value.toLocaleString('ko-KR')}원`
}
