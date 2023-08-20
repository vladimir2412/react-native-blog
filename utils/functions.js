export const normalizeTitle = (title) => {
  if (title.length >= 50) {
    return title.slice(0, 50) + '...'
  }
  return title
}
