export function formatCurrency(amount: number, currency: string = 'PHP', locale: string = 'en-PH') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}
