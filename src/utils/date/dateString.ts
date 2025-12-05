class DateString {
  static nowString() {
    return new Date().toISOString();
  }

  static toDate(isoString: string) {
    return new Date(isoString);
  }

  static toKoreanLocaleString(date: Date) {
    return date.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
  }
}

export default DateString;
