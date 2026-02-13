import { EVENTS_DB, EASTER_DATES, type Event, type EventDate } from '../data/eventsConfig';

/**
 * Algoritmo Computus per calcolare la data di Pasqua
 * Restituisce { month, day } dove month è 1-indexed (3=marzo, 4=aprile)
 */
export function calculateEasterDate(year: number): { month: number; day: number } {
  // Usa date pre-calcolate se disponibili
  if (EASTER_DATES[year]) {
    return EASTER_DATES[year];
  }

  // Algoritmo Computus (Meeus/Jones/Butcher)
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;

  return { month, day };
}

/**
 * Calcola l'n-esimo giorno della settimana di un mese
 * @param year Anno
 * @param month Mese (1-12)
 * @param weekday Giorno settimana (0=Domenica, 1=Lunedì, ..., 6=Sabato)
 * @param nth N-esima occorrenza (1=primo, 2=secondo, etc.)
 */
export function getNthWeekdayOfMonth(year: number, month: number, weekday: number, nth: number): Date {
  const firstDay = new Date(year, month - 1, 1);
  const firstWeekday = firstDay.getDay();
  
  // Calcola il giorno della prima occorrenza del weekday richiesto
  let firstOccurrence = 1 + ((weekday - firstWeekday + 7) % 7);
  
  // Aggiungi (nth-1) settimane
  const targetDay = firstOccurrence + (nth - 1) * 7;
  
  return new Date(year, month - 1, targetDay);
}

/**
 * Calcola l'ultimo sabato di un mese
 */
export function getLastSaturday(year: number, month: number): Date {
  // Ultimo giorno del mese
  const lastDay = new Date(year, month, 0);
  const lastDayOfWeek = lastDay.getDay();
  
  // Se l'ultimo giorno è sabato (6), usa quello
  // Altrimenti trova il sabato precedente
  const daysToSubtract = lastDayOfWeek === 6 ? 0 : (lastDayOfWeek + 1);
  const lastSaturday = lastDay.getDate() - daysToSubtract;
  
  return new Date(year, month - 1, lastSaturday);
}

/**
 * Calcola il primo martedì della prima settimana completa di maggio (per USA Teacher Day)
 */
export function getFirstTuesdayMayWeek(year: number): Date {
  // Prima settimana completa = prima settimana che contiene 7 giorni
  // Trova il primo lunedì di maggio, poi aggiungi 1 giorno
  const firstMonday = getNthWeekdayOfMonth(year, 5, 1, 1);
  
  // Se il primo lunedì è dopo il 7, allora prendiamo il secondo lunedì
  if (firstMonday.getDate() > 7) {
    const secondMonday = getNthWeekdayOfMonth(year, 5, 1, 2);
    return new Date(secondMonday.getFullYear(), secondMonday.getMonth(), secondMonday.getDate() + 1);
  }
  
  return new Date(firstMonday.getFullYear(), firstMonday.getMonth(), firstMonday.getDate() + 1);
}

/**
 * Calcola la data di un evento con offset da Pasqua
 */
export function getEasterOffsetDate(year: number, daysOffset: number): Date {
  const easter = calculateEasterDate(year);
  const easterDate = new Date(year, easter.month - 1, easter.day);
  const targetDate = new Date(easterDate);
  targetDate.setDate(targetDate.getDate() + daysOffset);
  return targetDate;
}

/**
 * Calcola tutte le date possibili per un evento (multi-paese o multi-regola)
 */
export function calculateEventDates(event: Event, year: number): Date[] {
  const dates: Date[] = [];

  // Caso 1: Evento con multiple dates (multi-paese)
  if (event.dates && event.dates.length > 0) {
    event.dates.forEach(dateRule => {
      const date = calculateSingleEventDate(dateRule, year);
      if (date) dates.push(date);
    });
  }
  // Caso 2: Evento con regola singola
  else if (event.rule) {
    const dateRule: EventDate = {
      rule: event.rule as any,
      month: event.month,
      day: event.day,
      weekday: event.weekday,
      nth: event.nth,
      days: event.days
    };
    const date = calculateSingleEventDate(dateRule, year);
    if (date) dates.push(date);
  }

  return dates;
}

/**
 * Calcola una singola data basandosi su una regola EventDate
 */
function calculateSingleEventDate(dateRule: EventDate, year: number): Date | null {
  switch (dateRule.rule) {
    case 'fixed':
      if (dateRule.month && dateRule.day) {
        return new Date(year, dateRule.month - 1, dateRule.day);
      }
      break;

    case 'nth_weekday':
      if (dateRule.month && dateRule.weekday !== undefined && dateRule.nth) {
        return getNthWeekdayOfMonth(year, dateRule.month, dateRule.weekday, dateRule.nth);
      }
      break;

    case 'last_saturday':
      if (dateRule.month) {
        return getLastSaturday(year, dateRule.month);
      }
      break;

    case 'first_tuesday_may_week':
      return getFirstTuesdayMayWeek(year);

    case 'easter_offset':
      if (dateRule.days !== undefined) {
        return getEasterOffsetDate(year, dateRule.days);
      }
      break;

    case 'easter_week':
      // Restituisce il Domenica di Pasqua (inizio Settimana Santa)
      return getEasterOffsetDate(year, -7);
  }

  return null;
}

/**
 * Trova il prossimo evento in arrivo da oggi
 * Restituisce { event, date, daysUntil }
 */
export function getNextUpcomingEvent(today: Date = new Date()): { event: Event; date: Date; daysUntil: number } | null {
  const currentYear = today.getFullYear();
  const nextYear = currentYear + 1;
  
  let closestEvent: { event: Event; date: Date; daysUntil: number } | null = null;
  let minDays = Infinity;

  EVENTS_DB.forEach(event => {
    // Calcola date per anno corrente e prossimo
    const datesThisYear = calculateEventDates(event, currentYear);
    const datesNextYear = calculateEventDates(event, nextYear);
    const allDates = [...datesThisYear, ...datesNextYear];

    allDates.forEach(eventDate => {
      const diffTime = eventDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      // Solo eventi futuri entro i prossimi 60 giorni
      if (diffDays >= 0 && diffDays < 60 && diffDays < minDays) {
        minDays = diffDays;
        closestEvent = { event, date: eventDate, daysUntil: diffDays };
      }
    });
  });

  return closestEvent;
}

/**
 * Trova eventi entro un certo range di giorni
 */
export function getUpcomingEvents(daysAhead: number = 30, today: Date = new Date()): Array<{ event: Event; date: Date; daysUntil: number }> {
  const currentYear = today.getFullYear();
  const nextYear = currentYear + 1;
  const results: Array<{ event: Event; date: Date; daysUntil: number }> = [];

  EVENTS_DB.forEach(event => {
    const datesThisYear = calculateEventDates(event, currentYear);
    const datesNextYear = calculateEventDates(event, nextYear);
    const allDates = [...datesThisYear, ...datesNextYear];

    allDates.forEach(eventDate => {
      const diffTime = eventDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays >= 0 && diffDays <= daysAhead) {
        results.push({ event, date: eventDate, daysUntil: diffDays });
      }
    });
  });

  // Ordina per data più vicina
  return results.sort((a, b) => a.daysUntil - b.daysUntil);
}

/**
 * Formatta la data in spagnolo
 */
export function formatDateSpanish(date: Date): string {
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
  
  const day = date.getDate();
  const month = months[date.getMonth()];
  
  return `${day} de ${month}`;
}

/**
 * Formatta i giorni rimanenti in testo leggibile
 */
export function formatDaysUntil(days: number): string {
  if (days === 0) return 'hoy';
  if (days === 1) return 'mañana';
  if (days <= 7) return `en ${days} días`;
  if (days <= 14) return 'en una semana';
  if (days <= 30) return `en ${Math.floor(days / 7)} semanas`;
  return `en ${Math.floor(days / 30)} mes${days > 60 ? 'es' : ''}`;
}
