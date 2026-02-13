export interface Video {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: number;
  publishedAt: string;
  category: string;
  tags: string[];
  youtubeId?: string;
}

export const MOCK_VIDEOS: Video[] = [
  // --- COMPLEANNI FAMIGLIA ---
  {
    id: '1',
    slug: 'feliz-cumpleanos-hija',
    title: 'Feliz Cumpleaños Hija - Eres mi Orgullo y mi Amor',
    description: 'Para la princesa de la casa. Un mensaje lleno de amor, bendiciones y buenos deseos para mi hija querida en su día especial.',
    thumbnail: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&h=450&fit=crop',
    duration: '2:45',
    views: 15400,
    publishedAt: '2025-02-01',
    category: 'cumpleanos-y-celebraciones',
    tags: ['hija', 'familia', 'amor de madre', 'princesa', 'feliz cumpleaños'],
    youtubeId: 'placeholder'
  },
  {
    id: '2',
    slug: 'feliz-cumpleanos-hermana',
    title: 'Feliz Cumpleaños Hermana Querida - Dios te Bendiga',
    description: 'Más que una hermana, eres mi mejor amiga. Te deseo un año lleno de alegría y sueños cumplidos.',
    thumbnail: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=450&fit=crop',
    duration: '1:30',
    views: 8900,
    publishedAt: '2025-01-28',
    category: 'cumpleanos-y-celebraciones',
    tags: ['hermana', 'familia', 'amiga', 'feliz cumpleaños'],
    youtubeId: 'placeholder'
  },
  {
    id: '3',
    slug: 'feliz-cumpleanos-nieta',
    title: 'Feliz Cumpleaños Nieta Querida - Abuelos que te Aman',
    description: 'Eres la alegría de nuestro hogar. Un mensaje especial de tus abuelos para celebrar tu vida.',
    thumbnail: 'https://images.unsplash.com/photo-1596464716127-f9a0639b936f?w=800&h=450&fit=crop',
    duration: '2:15',
    views: 12500,
    publishedAt: '2025-01-25',
    category: 'cumpleanos-y-celebraciones',
    tags: ['nieta', 'abuelos', 'familia', 'niña', 'feliz cumpleaños'],
    youtubeId: 'placeholder'
  },
  {
    id: '4',
    slug: 'feliz-cumpleanos-suegra',
    title: 'Feliz Cumpleaños Suegra - Con Cariño y Respeto',
    description: 'Gracias por ser una segunda madre. Le deseo un día maravilloso lleno de salud y bendiciones.',
    thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=450&fit=crop',
    duration: '1:50',
    views: 5600,
    publishedAt: '2025-01-20',
    category: 'cumpleanos-y-celebraciones',
    tags: ['suegra', 'familia', 'respeto', 'feliz cumpleaños'],
    youtubeId: 'placeholder'
  },
  {
    id: '5',
    slug: 'feliz-cumpleanos-hermano',
    title: 'Feliz Cumpleaños Hermano - Siempre Juntos',
    description: 'Para mi compañero de vida y aventuras. Que sigas cumpliendo muchos años más lleno de éxito.',
    thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=450&fit=crop',
    duration: '1:45',
    views: 18200,
    publishedAt: '2025-01-15',
    category: 'cumpleanos-y-celebraciones',
    tags: ['hermano', 'hombre', 'familia', 'feliz cumpleaños'],
    youtubeId: 'placeholder'
  },
  {
    id: '6',
    slug: 'feliz-cumpleanos-amiga',
    title: 'Feliz Cumpleaños Amiga Inolvidable',
    description: 'Gracias por tu amistad incondicional. Hoy celebramos tu vida a lo grande.',
    thumbnail: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&h=450&fit=crop',
    duration: '2:00',
    views: 22100,
    publishedAt: '2025-01-10',
    category: 'amor-y-amistad',
    tags: ['amiga', 'amistad', 'mujeres', 'feliz cumpleaños'],
    youtubeId: 'placeholder'
  },
  {
    id: '7',
    slug: 'feliz-cumpleanos-tia',
    title: 'Feliz Cumpleaños Tía Querida',
    description: 'Para una tía muy especial que siempre está presente. Te quiero mucho.',
    thumbnail: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&h=450&fit=crop',
    duration: '1:55',
    views: 7400,
    publishedAt: '2025-01-08',
    category: 'cumpleanos-y-celebraciones',
    tags: ['tia', 'familia', 'feliz cumpleaños'],
    youtubeId: 'placeholder'
  },
  {
    id: '8',
    slug: 'feliz-cumpleanos-sobrina',
    title: 'Feliz Cumpleaños Sobrina - Eres Especial',
    description: 'Verte crecer es un regalo. Que este nuevo año te traiga muchas sonrisas.',
    thumbnail: 'https://images.unsplash.com/photo-1595246140625-573b715e56d8?w=800&h=450&fit=crop',
    duration: '2:10',
    views: 9200,
    publishedAt: '2025-01-05',
    category: 'cumpleanos-y-celebraciones',
    tags: ['sobrina', 'familia', 'feliz cumpleaños'],
    youtubeId: 'placeholder'
  },
  {
    id: '9',
    slug: 'feliz-cumpleanos-para-ti',
    title: 'Feliz Cumpleaños Para Ti - Muchas Felicidades',
    description: 'Un mensaje universal para desear lo mejor en este día tan especial.',
    thumbnail: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=450&fit=crop',
    duration: '1:15',
    views: 45000,
    publishedAt: '2025-02-08',
    category: 'cumpleanos-y-celebraciones',
    tags: ['generico', 'feliz cumpleaños', 'celebracion'],
    youtubeId: 'placeholder'
  },
  
  // --- ALTRE CATEGORIE ---
  {
    id: '10',
    slug: 'feliz-aniversario-bodas',
    title: 'Feliz Aniversario de Bodas - Amor Eterno',
    description: 'Un año más construyendo nuestra historia. Gracias por ser el amor de mi vida.',
    thumbnail: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&h=450&fit=crop',
    duration: '3:10',
    views: 32000,
    publishedAt: '2024-12-15',
    category: 'amor-y-amistad',
    tags: ['aniversario', 'amor', 'esposos', 'boda'],
    youtubeId: 'placeholder'
  },
  {
    id: '11',
    slug: 'felicidades-graduacion',
    title: 'Felicidades por tu Graduación - El Éxito es Tuyo',
    description: 'Todo tu esfuerzo ha valido la pena. Hoy comienzas una nueva etapa llena de triunfos.',
    thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=450&fit=crop',
    duration: '2:20',
    views: 6700,
    publishedAt: '2024-12-20',
    category: 'motivacion-y-superacion',
    tags: ['graduacion', 'logros', 'estudios', 'exito'],
    youtubeId: 'placeholder'
  },
  {
    id: '12',
    slug: 'oracion-manana-bendicion',
    title: 'Oración de la Mañana - Entrega tu día a Dios',
    description: 'Comienza este día bajo la protección divina. Una oración poderosa para abrir caminos.',
    thumbnail: 'https://images.unsplash.com/photo-1507692049790-de58293a4697?w=800&h=450&fit=crop',
    duration: '3:00',
    views: 98000,
    publishedAt: '2025-02-05',
    category: 'fe-y-esperanza',
    tags: ['oracion', 'dios', 'fe', 'buenos dias'],
    youtubeId: 'placeholder'
  }
];

// Utility functions
export function getVideosByCategory(category: string, limit?: number): Video[] {
  const filtered = MOCK_VIDEOS.filter(v => v.category === category);
  return limit ? filtered.slice(0, limit) : filtered;
}

export function getLatestVideos(limit: number = 6): Video[] {
  return MOCK_VIDEOS.slice(0, limit);
}

export function getVideoBySlug(slug: string): Video | undefined {
  return MOCK_VIDEOS.find(v => v.slug === slug);
}

export function searchVideos(query: string): Video[] {
  const lowercaseQuery = query.toLowerCase();
  return MOCK_VIDEOS.filter(v => 
    v.title.toLowerCase().includes(lowercaseQuery) ||
    v.description.toLowerCase().includes(lowercaseQuery) ||
    v.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}