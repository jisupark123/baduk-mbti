/**
 * 숫자를 소수점 첫째 자리까지 포맷팅합니다.
 * 값이 없거나(null/undefined) 0인 경우 '0.0'을 반환합니다.
 *
 * @param value - 포맷팅할 숫자 (퍼센트 값)
 * @returns 소수점 첫째 자리까지 포맷팅된 문자열 (예: "12.3", "0.0")
 */
export function formatPercentage(value: number | undefined | null): string {
  if (value === undefined || value === null) {
    return '0.0';
  }
  return value.toFixed(1);
}
