class DateString {
  static nowSeoulDateString() {
    const now = new Date();
    return now.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
  }

  static toDate(isoString: string) {
    return new Date(isoString);
  }

  static toKoreanLocaleString(date: Date) {
    return date.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
  }
}

export default DateString;
