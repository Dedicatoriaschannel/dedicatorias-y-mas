// src/data/categories.ts

export interface Category {
  slug: string;
  title: string;
  icon: string; // Ora conterrà una stringa SVG invece di una emoji
  description: string;
  priority: number;
}

// Icone SVG "Lusso" (Line-art elegante)
const ICONS = {
  heart: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>`,
  faith: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m-9-9h18m-4.5-4.5L12 3 7.5 7.5M16.5 16.5 12 21l-4.5-4.5" /></svg>`, // Una stella/croce di luce
  motivation: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>`, // Freccia ascendente
  celebration: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>` // Scintille eleganti
};

export const CATEGORIES: Category[] = [
  {
    slug: 'amor',
    title: 'Amor',
    icon: ICONS.heart,
    description: 'Dedicatorias románticas y mensajes para expresar tus sentimientos más profundos.',
    priority: 1,
  },
  {
    slug: 'fe-y-esperanza',
    title: 'Fe y Esperanza',
    icon: ICONS.faith,
    description: 'Mensajes cristianos, oraciones y reflexiones para fortalecer el espíritu.',
    priority: 2,
  },
  {
    slug: 'motivacion-y-superacion',
    title: 'Motivación',
    icon: ICONS.motivation,
    description: 'Inspiración diaria para alcanzar tus metas y superar obstáculos.',
    priority: 3,
  },
  {
    slug: 'celebraciones',
    title: 'Celebraciones',
    icon: ICONS.celebration,
    description: 'Cumpleaños, aniversarios y fechas especiales para compartir alegría.',
    priority: 4,
  },
];

// Helpers
export const getPriorityCategories = (limit: number = 4) => {
  return CATEGORIES
    .filter(cat => cat.priority > 0)
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
};

export const getCategoryBySlug = (slug: string) => {
  return CATEGORIES.find(cat => cat.slug === slug);
};