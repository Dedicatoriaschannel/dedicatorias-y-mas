// Database completo eventi con regole di calcolo date
export interface EventDate {
  country?: string;
  rule: 'fixed' | 'nth_weekday' | 'last_saturday' | 'first_tuesday_may_week' | 'easter_offset' | 'easter_week';
  month?: number;
  day?: number;
  weekday?: number; // 0=Domenica, 1=Lunedì, ..., 6=Sabato
  nth?: number; // 1=primo, 2=secondo, etc.
  days?: number; // offset da Pasqua
  priority?: 'high' | 'medium' | 'low';
}

export interface Event {
  slug: string;
  title: string;
  dates?: EventDate[];
  rule?: string;
  month?: number;
  day?: number;
  weekday?: number;
  nth?: number;
  days?: number;
  keywords: string[];
  description?: string;
}

export const EVENTS_DB: Event[] = [
  // --- DATE MOBILI CRITICHE (Multi-Paese) ---
  {
    slug: 'dia-de-la-madre',
    title: 'Día de la Madre',
    dates: [
      { country: 'México, El Salvador, Guatemala', rule: 'fixed', month: 5, day: 10, priority: 'high' },
      { country: 'USA, Colombia, Venezuela', rule: 'nth_weekday', month: 5, weekday: 0, nth: 2, priority: 'high' },
      { country: 'España', rule: 'nth_weekday', month: 5, weekday: 0, nth: 1 }
    ],
    keywords: ['madre', 'mamá', 'mami', 'esposa'],
    description: 'Celebra a mamá con los videos más emotivos'
  },
  {
    slug: 'dia-del-padre',
    title: 'Día del Padre',
    dates: [
      { country: 'USA, México, Colombia', rule: 'nth_weekday', month: 6, weekday: 0, nth: 3, priority: 'high' },
      { country: 'España, Bolivia', rule: 'fixed', month: 3, day: 19 }
    ],
    keywords: ['padre', 'papá', 'abuelo'],
    description: 'Homenajea a papá en su día especial'
  },
  {
    slug: 'dia-del-nino',
    title: 'Día del Niño',
    dates: [
      { country: 'México', rule: 'fixed', month: 4, day: 30, priority: 'high' },
      { country: 'Colombia', rule: 'last_saturday', month: 4 }
    ],
    keywords: ['niño', 'hijo', 'nieto'],
    description: 'Videos especiales para los más pequeños'
  },
  
  // --- PASQUA (Calcolo Lunare - Easter Offset) ---
  {
    slug: 'domingo-ramos',
    title: 'Domingo de Ramos',
    rule: 'easter_offset',
    days: -7,
    keywords: ['fe', 'dios', 'iglesia'],
    description: 'Inicia Semana Santa con mensajes de fe'
  },
  {
    slug: 'viernes-santo',
    title: 'Viernes Santo',
    rule: 'easter_offset',
    days: -2,
    keywords: ['cruz', 'jesus', 'fe'],
    description: 'Reflexiones para el Viernes Santo'
  },
  {
    slug: 'pascua',
    title: 'Domingo de Resurrección',
    rule: 'easter_offset',
    days: 0,
    keywords: ['resurreccion', 'pascua', 'aleluya'],
    description: 'Celebra la Resurrección de Cristo'
  },
  {
    slug: 'semana-santa',
    title: 'Semana Santa',
    rule: 'easter_week',
    keywords: ['reflexion', 'fe', 'oracion'],
    description: 'Videos espirituales para Semana Santa'
  },
  
  // --- DÍAS PROFESIONALES ---
  {
    slug: 'dia-del-maestro',
    title: 'Día del Maestro',
    dates: [
      { country: 'México, Colombia', rule: 'fixed', month: 5, day: 15, priority: 'high' },
      { country: 'USA', rule: 'first_tuesday_may_week', month: 5 }
    ],
    keywords: ['maestro', 'profesor', 'educacion'],
    description: 'Agradece a los maestros que forman el futuro'
  },
  {
    slug: 'dia-del-medico',
    title: 'Día del Médico',
    dates: [
      { country: 'México', rule: 'fixed', month: 10, day: 23, priority: 'high' },
      { country: 'Panamericano', rule: 'fixed', month: 12, day: 3 }
    ],
    keywords: ['salud', 'doctor', 'medicina'],
    description: 'Reconoce la labor de los médicos'
  },
  {
    slug: 'dia-del-ejercito',
    title: 'Día del Ejército',
    rule: 'fixed',
    month: 2,
    day: 19,
    keywords: ['soldado', 'ejercito', 'patria'],
    description: 'Honor a quienes sirven a la patria'
  },
  {
    slug: 'dia-del-abogado',
    title: 'Día del Abogado',
    rule: 'fixed',
    month: 7,
    day: 12,
    keywords: ['abogado', 'leyes', 'justicia'],
    description: 'Celebra a los defensores de la justicia'
  },
  {
    slug: 'dia-de-la-enfermera',
    title: 'Día de la Enfermera',
    rule: 'fixed',
    month: 5,
    day: 12,
    keywords: ['enfermera', 'salud', 'cuidado'],
    description: 'Valora el trabajo de las enfermeras'
  },
  {
    slug: 'dia-de-la-secretaria',
    title: 'Día de la Secretaria',
    rule: 'fixed',
    month: 7,
    day: 17,
    keywords: ['secretaria', 'trabajo', 'oficina'],
    description: 'Aprecia a las secretarias en su día'
  },
  {
    slug: 'dia-del-estudiante',
    title: 'Día del Estudiante',
    rule: 'fixed',
    month: 5,
    day: 23,
    keywords: ['estudiante', 'educacion', 'juventud'],
    description: 'Motiva a los estudiantes en su día'
  },
  {
    slug: 'dia-del-hombre',
    title: 'Día del Hombre',
    rule: 'fixed',
    month: 3,
    day: 19,
    keywords: ['hombre', 'masculinidad'],
    description: 'Celebra la figura masculina'
  },
  
  // --- FESTIVITÀ GENERALI ---
  {
    slug: 'san-valentin',
    title: 'Feliz día del amor',
    rule: 'fixed',
    month: 2,
    day: 14,
    keywords: ['amor', 'amistad', 'pareja'],
    description: 'Un día para celebrar la conexión única que une corazones...'
  },
  {
    slug: 'dia-de-la-mujer',
    title: 'Día de la Mujer',
    rule: 'fixed',
    month: 3,
    day: 8,
    keywords: ['mujer', 'igualdad', 'empoderamiento'],
    description: 'Celebra el poder de la mujer'
  },
  {
    slug: 'dia-del-trabajo',
    title: 'Día del Trabajo',
    rule: 'fixed',
    month: 5,
    day: 1,
    keywords: ['trabajo', 'trabajador', 'esfuerzo'],
    description: 'Reconoce el valor del trabajo'
  },
  {
    slug: 'independencia-usa',
    title: '4 de Julio (USA)',
    rule: 'fixed',
    month: 7,
    day: 4,
    keywords: ['usa', 'estados unidos', 'independencia'],
    description: 'Celebra la independencia de Estados Unidos'
  },
  {
    slug: 'independencia-mexico',
    title: 'Independencia de México',
    rule: 'fixed',
    month: 9,
    day: 16,
    keywords: ['mexico', 'independencia', 'patria'],
    description: 'Viva México y su independencia'
  },
  {
    slug: 'accion-de-gracias',
    title: 'Acción de Gracias',
    rule: 'nth_weekday',
    month: 11,
    weekday: 4,
    nth: 4,
    keywords: ['thanksgiving', 'gratitud', 'familia'],
    description: 'Da gracias por tus bendiciones'
  },
  {
    slug: 'dia-de-las-velitas',
    title: 'Día de las Velitas',
    rule: 'fixed',
    month: 12,
    day: 7,
    keywords: ['colombia', 'navidad', 'velitas'],
    description: 'Ilumina la noche colombiana'
  },
  {
    slug: 'navidad',
    title: 'Navidad',
    rule: 'fixed',
    month: 12,
    day: 25,
    keywords: ['fiestas', 'navidad', 'familia', 'jesus'],
    description: 'Celebra la Navidad en familia'
  },
  {
    slug: 'ano-nuevo',
    title: 'Año Nuevo',
    rule: 'fixed',
    month: 1,
    day: 1,
    keywords: ['2026', '2027', 'propositos', 'nuevo'],
    description: 'Comienza el año con esperanza'
  },
  {
    slug: 'dia-de-reyes',
    title: 'Día de Reyes',
    rule: 'fixed',
    month: 1,
    day: 6,
    keywords: ['regalos', 'reyes magos', 'niños'],
    description: 'La magia de los Reyes Magos'
  }
];

// Pre-calculated Easter dates (Algorithm Computus)
export const EASTER_DATES: Record<number, { month: number; day: number }> = {
  2025: { month: 4, day: 20 },
  2026: { month: 4, day: 5 },
  2027: { month: 3, day: 28 },
  2028: { month: 4, day: 16 },
  2029: { month: 4, day: 1 },
  2030: { month: 4, day: 21 },
};
