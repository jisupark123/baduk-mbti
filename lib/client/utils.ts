export function cls(...classNames: string[]) {
  console.log(classNames);
  return classNames.join(' ');
}

export function getTags(tags: string) {
  const res = tags
    .replace(/\s+/g, ' ') // '   ' => ' '
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag.length !== 0);
  return res;
}
