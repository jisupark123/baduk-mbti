export function sortedDate(dates: Date[], ascending = true) {
  return [...dates].sort((a, b) => {
    const diff = a.getTime() - b.getTime();
    return ascending ? diff : -diff;
  });
}
