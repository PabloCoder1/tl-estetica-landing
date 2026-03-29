// src/utils/formatters.ts
export function getWhatsAppLink(customMessage: string) {
  const phoneNumber = "5513991283576"; // O número oficial da Thuany
  const encodedMessage = encodeURIComponent(customMessage);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}