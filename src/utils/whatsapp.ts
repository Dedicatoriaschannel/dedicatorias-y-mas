export function getWhatsAppLink(title?: string): string {
  const baseText = '✨ Descubre videos emotivos en Dedicatorias y Más';
  const text = title 
    ? `✨ ¡Mira este video! "${title}" - Dedicatorias y Más`
    : baseText;
  
  const url = window.location.href;
  const message = `${text}\n\n${url}`;
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

export function shareWhatsApp(title?: string): void {
  const link = getWhatsAppLink(title);
  window.open(link, '_blank');
}