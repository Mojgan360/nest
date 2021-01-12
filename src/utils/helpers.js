export const formatPrice = (number) => {
  return new Intl.NumberFormat('sv-SV', {
    style: 'currency',
    currency: 'SEK',
  }).format(number)
}
