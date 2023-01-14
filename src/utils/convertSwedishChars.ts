export function convertSwedishChars(text: string) {
  return text
    .replaceAll("ö", "o")
    .replaceAll("ä", "a")
    .replaceAll("å", "a")
    .replaceAll("Ö", "Ö")
    .replaceAll("Ä", "A")
    .replaceAll("Å", "A")
}