export type Product = {
  slug: string
  model: string
  name: string
  tagline: string
  capacityKg: number
  wheels: number
  shortDescription: string
  description: string
  images: string[]
  specs: { label: string; value: string }[]

  heroImage?: string
  configurations?: ProductConfigurationItem[]
}

export type ProductConfigurationItem = {
  title: string
  image: string
}


export type CategoryAdvantage = {
  title: string
  description: string
  icon: string
}
export type CategoryFunction = {
  title: string
  description: string
}

export type ProductCategory = {
  slug: string
  title: string
  description: string
  image: string
  products: Product[]
  advantages: CategoryAdvantage[]   
  functions?: CategoryFunction[]
}

export const categories: ProductCategory[] = [
  {
    slug: 'carretilla-elevadora-electrica',
    title: 'Carretilla Elevadora Eléctrica',
    description:
      'Carretillas elevadoras eléctricas diseñadas para operaciones eficientes, silenciosas y libres de emisiones en entornos industriales.',
    image: '/images/montacarga.png',
    functions: [
  {
    title: 'Manipulación eficiente de cargas pesadas',
    description:
      'Diseñadas para levantar, transportar y posicionar cargas de alto tonelaje con precisión y estabilidad en entornos industriales.',
  },
  {
    title: 'Operación en espacios interiores',
    description:
      'Funcionamiento eléctrico sin emisiones que permite su uso en almacenes, centros logísticos y plantas de producción.',
  },
  {
    title: 'Optimización de procesos logísticos',
    description:
      'Facilitan el movimiento continuo de mercancía, reduciendo tiempos operativos y aumentando la productividad.',
  },
  {
    title: 'Elevación a diferentes alturas',
    description:
      'Configurables con múltiples opciones de mástil para adaptarse a distintos sistemas de almacenamiento vertical.',
  },
  {
    title: 'Seguridad operativa avanzada',
    description:
      'Equipadas con sistemas de control que garantizan estabilidad, frenado eficiente y maniobrabilidad segura.',
  },
],
    advantages: [
  {
    title: 'Operación limpia y silenciosa',
    description:
      'Funcionamiento sin emisiones contaminantes y con bajo nivel de ruido, ideal para interiores y entornos industriales modernos.',
    icon: 'eco',
  },
  {
    title: 'Precisión y control superior',
    description:
      'Movimiento suave y suministro de energía constante para maniobras más seguras y precisas.',
    icon: 'precision',
  },
  {
    title: 'Configuración adaptable',
    description:
      'Alturas de elevación y accesorios personalizables para ajustarse a distintos tipos de operación.',
    icon: 'custom',
  },
  {
    title: 'Diseño ergonómico e intuitivo',
    description:
      'Controles digitales y tablero moderno que facilitan la operación para todo tipo de operador.',
    icon: 'interface',
  },
  {
    title: 'Mayor vida útil y rentabilidad',
    description:
      'Menor desgaste mecánico que reduce costos de mantenimiento y maximiza el retorno de inversión.',
    icon: 'durable',
  },
]
,
    products: [
  {
    slug: 'ht-1-5t',
    model: 'HT-1.5T',
    name: 'Autoelevador Eléctrico 1.5T',
    tagline: 'Impulsando el progreso, sosteniendo el planeta',
    capacityKg: 1500,
    wheels: 4,
    shortDescription: 'Carretilla eléctrica compacta ideal para almacenes.',
    description:
      'Autoelevador eléctrico de 1.5 toneladas con dirección hidráulica y excelente maniobrabilidad para operaciones interiores.',
    images: Array.from({ length: 9 }, (_, i) => `/products/ht-1-5t/${i + 1}.png`),
    specs: [
      { label: 'Capacidad nominal', value: '1500 kg' },
      { label: 'Altura de elevación', value: '3000 mm (personalizable)' },
      { label: 'Altura total', value: '1990 mm' },
      { label: 'Longitud sin horquillas', value: '2350 mm' },
      { label: 'Ancho', value: '1200 mm' },
      { label: 'Distancia entre ejes', value: '1580 mm' },
      { label: 'Velocidad sin carga', value: '14 km/h' },
      { label: 'Velocidad operativa', value: '12 km/h' },
      { label: 'Rueda delantera', value: '650-10' },
      { label: 'Rueda trasera', value: '500-8' },
      { label: 'Color', value: 'Personalizable' },
    ],
    heroImage: '/products/ht-1-5t/hero.png',

configurations: [
  {
    title: 'Configuración de Mástil Triplex',
    image: '/config/ht-3-0t/mastil.jpg',
  },
  {
    title: 'Batería de Litio Industrial',
    image: '/config/ht-3-0t/bateria.jpg',
  },
  {
    title: 'Desplazador Lateral',
    image: '/config/ht-3-0t/desplazador.jpg',
  },
],
  },

  {
    slug: 'ht-1-6t',
    model: 'HT-1.6T',
    name: 'Montacargas Eléctrico 1.6T (3 ruedas)',
    tagline: 'Impulsar el progreso y mantener el planeta',
    capacityKg: 1600,
    wheels: 3,
    shortDescription: 'Modelo compacto de 3 ruedas para espacios reducidos.',
    description:
      'Montacargas eléctrico de 1.6 toneladas con radio de giro reducido y sistema hidráulico de potencia.',
    images: Array.from({ length: 9 }, (_, i) => `/products/ht-1-6t/${i + 1}.png`),
    specs: [
      { label: 'Capacidad nominal', value: '1600 kg' },
      { label: 'Altura de elevación', value: '3000 mm (personalizable)' },
      { label: 'Altura total', value: '2050 mm' },
      { label: 'Longitud sin horquillas', value: '1950 mm' },
      { label: 'Ancho', value: '1100 mm' },
      { label: 'Distancia entre ejes', value: '1380 mm' },
      { label: 'Radio mínimo de giro', value: '1580 mm' },
      { label: 'Velocidad sin carga', value: '12 km/h' },
      { label: 'Velocidad operativa', value: '10 km/h' },
      { label: 'Rueda delantera', value: '18x7-10' },
      { label: 'Rueda trasera', value: '15x4.5-8' },
      { label: 'Color', value: 'Personalizable' },
    ],
  },
  {
  slug: 'ht-2-0t',
  model: 'HT-2.0T',
  name: 'Montacargas Eléctrico 2T',
  tagline: 'Versión actualizada de alto rendimiento',
  capacityKg: 2000,
  wheels: 4,
  shortDescription:
    'Montacargas eléctrico de 2 toneladas con estructura reforzada.',
  description:
    'Autoelevador eléctrico de 2 toneladas con marco en H de acero reforzado y motor de alta potencia para aplicaciones industriales.',
  images: Array.from({ length: 9 }, (_, i) => `/products/ht-2-0t/${i + 1}.png`),
  specs: [
    { label: 'Capacidad nominal', value: '2000 kg' },
    { label: 'Peso del equipo', value: '2900 kg' },
    { label: 'Altura de elevación', value: '3000 mm (personalizable)' },
    { label: 'Altura total', value: '2080 mm' },
    { label: 'Longitud sin horquillas', value: '2050 mm' },
    { label: 'Ancho', value: '1150 mm' },
    { label: 'Motor', value: '5.5 kW' },
    { label: 'Velocidad sin carga', value: '14 km/h' },
    { label: 'Velocidad operativa', value: '12 km/h' },
    { label: 'Rueda delantera', value: '650-10' },
    { label: 'Rueda trasera', value: '500-8' },
    { label: 'Color', value: 'Personalizable' },
  ],
},

  {
    slug: 'ht-2-0t-b',
    model: 'HT-2.0T-B',
    name: 'Autoelevador Eléctrico 2.0T',
    tagline: 'Versión personalizada',
    capacityKg: 2000,
    wheels: 4,
    shortDescription: 'Equipo robusto con marco reforzado en C.',
    description:
      'Carretilla eléctrica de 2 toneladas con motor de alta potencia y estructura de acero reforzada.',
    images: Array.from({ length: 9 }, (_, i) => `/products/ht-2-0t-b/${i + 1}.png`),
    specs: [
      { label: 'Capacidad nominal', value: '2000 kg' },
      { label: 'Peso del equipo', value: '2600 kg' },
      { label: 'Altura de elevación', value: '3000 mm' },
      { label: 'Altura total', value: '1990 mm' },
      { label: 'Motor', value: '4 kW' },
      { label: 'Velocidad sin carga', value: '14 km/h' },
      { label: 'Velocidad operativa', value: '12 km/h' },
      { label: 'Rueda delantera', value: '650-10' },
      { label: 'Rueda trasera', value: '500-8' },
      { label: 'Color', value: 'Personalizable' },
    ],
  },

  {
    slug: 'ht-2-5t-b',
    model: 'HT-2.5T-B',
    name: 'Carretilla Elevadora Eléctrica 2.5T',
    tagline: 'Impulsar el progreso y mantener el planeta',
    capacityKg: 2500,
    wheels: 4,
    shortDescription: 'Modelo industrial de alto rendimiento.',
    description:
      'Carretilla eléctrica de 2.5 toneladas con motor de elevación de 5kW y estructura reforzada.',
    images: Array.from({ length: 9 }, (_, i) => `/products/ht-2-5t-b/${i + 1}.png`),
    specs: [
      { label: 'Capacidad nominal', value: '2500 kg' },
      { label: 'Altura de elevación', value: '3000 mm (personalizable)' },
      { label: 'Altura total', value: '2180 mm' },
      { label: 'Longitud sin horquillas', value: '2550 mm' },
      { label: 'Ancho', value: '1120 mm' },
      { label: 'Motor de elevación', value: '5 kW' },
      { label: 'Velocidad sin carga', value: '12 km/h' },
      { label: 'Velocidad operativa', value: '10 km/h' },
      { label: 'Rueda delantera', value: '650-10' },
      { label: 'Rueda trasera', value: '18x7-8' },
      { label: 'Color', value: 'Personalizable' },
    ],
  },
{
  slug: 'ht-3-0t-h',
  model: '3.0T-H',
  name: 'Carretilla Elevadora Eléctrica 3T',
  tagline: 'Impulsar el progreso y mantener el planeta',
  capacityKg: 3000,
  wheels: 4,
  shortDescription:
    'Carretilla eléctrica de 3 toneladas con estructura reforzada.',
  description:
    'Montacargas eléctrico de 3 toneladas diseñado para operaciones industriales exigentes con opción de personalización.',
  images: Array.from({ length: 9 }, (_, i) => `/products/ht-3-0t-h/${i + 1}.png`),
  specs: [
    { label: 'Capacidad nominal', value: '3000 kg' },
    { label: 'Altura de elevación', value: '3000 mm (personalizable)' },
    { label: 'Altura total', value: '2150 mm' },
    { label: 'Longitud sin horquillas', value: '2600 mm' },
    { label: 'Ancho', value: '1200 mm' },
    { label: 'Velocidad sin carga', value: '14 km/h' },
    { label: 'Velocidad operativa', value: '12–14 km/h' },
    { label: 'Rueda delantera', value: '650-10' },
    { label: 'Rueda trasera', value: '500-8' },
    { label: 'Color', value: 'Personalizable' },
  ],
},

  {
    slug: 'ht-3-5t',
    model: 'HT-3.5T',
    name: 'Carretilla Elevadora Eléctrica 3.5T',
    tagline: 'Potencia y estabilidad industrial',
    capacityKg: 3500,
    wheels: 4,
    shortDescription: 'Solución eléctrica para cargas pesadas.',
    description:
      'Montacargas eléctrico de 3.5 toneladas con distancia entre ejes ampliada y dirección hidráulica.',
    images: Array.from({ length: 10 }, (_, i) => `/products/ht-3-5t/${i + 1}.png`),
    specs: [
      { label: 'Capacidad nominal', value: '3500 kg' },
      { label: 'Altura de elevación', value: '3000 mm (personalizable)' },
      { label: 'Altura total', value: '2180 mm' },
      { label: 'Distancia entre ejes', value: '1860 mm' },
      { label: 'Velocidad sin carga', value: '12 km/h' },
      { label: 'Velocidad operativa', value: '10 km/h' },
      { label: 'Rueda delantera', value: '28x9-15' },
      { label: 'Rueda trasera', value: '650-10' },
      { label: 'Color', value: 'Personalizable' },
    ],
  },

  {
    slug: 'ht-4-0t',
    model: 'HT-4.0T',
    name: 'Carretilla Elevadora Eléctrica 4T',
    tagline: 'Mayor potencia y estabilidad',
    capacityKg: 4000,
    wheels: 4,
    shortDescription: 'Equipo eléctrico de alto desempeño.',
    description:
      'Autoelevador eléctrico de 4 toneladas con amplio radio de giro y estructura reforzada.',
    images: Array.from({ length: 6 }, (_, i) => `/products/ht-4-0t/${i + 1}.png`),
    specs: [
      { label: 'Capacidad nominal', value: '4000 kg' },
      { label: 'Altura de elevación', value: '3000 mm (personalizable)' },
      { label: 'Altura total', value: '2150 mm' },
      { label: 'Radio de giro', value: '2670 mm' },
      { label: 'Velocidad sin carga', value: '14 km/h' },
      { label: 'Velocidad operativa', value: '12 km/h' },
      { label: 'Rueda delantera', value: '28x9-15' },
      { label: 'Rueda trasera', value: '650-10' },
      { label: 'Color', value: 'Personalizable' },
    ],
  },

  {
    slug: 'ht-5-0t',
    model: 'HT-5.0T',
    name: 'Carretilla Elevadora Eléctrica 5T',
    tagline: 'Rendimiento industrial pesado',
    capacityKg: 5000,
    wheels: 4,
    shortDescription: 'Montacargas eléctrico de alta capacidad.',
    description:
      'Carretilla eléctrica de 5 toneladas con motor AC de alta potencia y estructura robusta.',
    images: Array.from({ length: 9 }, (_, i) => `/products/ht-5-0t/${i + 1}.png`),
    specs: [
      { label: 'Capacidad nominal', value: '5000 kg' },
      { label: 'Motor de elevación', value: 'AC 25.5 kW' },
      { label: 'Radio de giro', value: '2750 mm' },
      { label: 'Altura total', value: '2250 mm' },
      { label: 'Velocidad sin carga', value: '14 km/h' },
      { label: 'Velocidad operativa', value: '12 km/h' },
      { label: 'Rueda delantera', value: '28x9-15' },
      { label: 'Rueda trasera', value: '700-12' },
      { label: 'Color', value: 'Personalizable' },
    ],
  },
  {
  slug: 'ht-7-0t',
  model: 'HT-7.0T',
  name: 'Carretilla Elevadora Eléctrica 7T',
  tagline: 'Impulsar el progreso y mantener el planeta',
  capacityKg: 7000,
  wheels: 4,
  shortDescription:
    'Montacargas eléctrico industrial de alta capacidad.',
  description:
    'Carretilla elevadora eléctrica de 7 toneladas diseñada para operaciones industriales pesadas con dirección hidráulica de potencia.',
  images: Array.from({ length: 10 }, (_, i) => `/products/ht-7-0t/${i + 1}.png`),
  specs: [
    { label: 'Capacidad nominal', value: '7000 kg' },
    { label: 'Altura de elevación', value: '3000 mm (personalizable)' },
    { label: 'Altura total', value: '2260 mm' },
    { label: 'Longitud sin horquillas', value: '3600 mm' },
    { label: 'Ancho', value: '1860 mm' },
    { label: 'Distancia entre ejes', value: '2560 mm' },
    { label: 'Radio mínimo de giro', value: '2800 mm' },
    { label: 'Velocidad sin carga', value: '15 km/h' },
    { label: 'Velocidad operativa', value: '13 km/h' },
    { label: 'Rueda delantera', value: '28x9-15 (dual)' },
    { label: 'Rueda trasera', value: '27x10-12' },
    { label: 'Dirección', value: 'Hidráulica asistida' },
    { label: 'Color', value: 'Personalizable' },
  ],
},


  {
    slug: 'ht-10t',
    model: 'HT-10T',
    name: 'Carretilla Elevadora Eléctrica 10T',
    tagline: 'Máxima capacidad eléctrica industrial',
    capacityKg: 10000,
    wheels: 4,
    shortDescription: 'Solución eléctrica para cargas ultra pesadas.',
    description:
      'Autoelevador eléctrico de 10 toneladas diseñado para operaciones industriales de gran escala.',
    images: Array.from({ length: 9 }, (_, i) => `/products/ht-10t/${i + 1}.png`),
    specs: [
      { label: 'Capacidad nominal', value: '10000 kg' },
      { label: 'Potencia motor de tracción', value: '18 kW' },
      { label: 'Altura de elevación', value: '3000 mm (personalizable)' },
      { label: 'Altura total', value: '2520 mm' },
      { label: 'Velocidad sin carga', value: '15 km/h' },
      { label: 'Velocidad operativa', value: '14 km/h' },
      { label: 'Rueda delantera', value: '900-20' },
      { label: 'Rueda trasera', value: '900-16' },
      { label: 'Color', value: 'Personalizable' },
    ],
  },
]

  },
  {
    slug: 'apilador',
    title: 'Apilador',
    description:
      'Apiladores industriales ideales para el manejo de cargas en espacios reducidos y operaciones logísticas.',
    image: '/images/apilador.png',
    functions: [
  {
    title: 'Apilamiento vertical eficiente',
    description:
      'Permiten organizar mercancía en altura dentro de almacenes con máxima estabilidad y precisión.',
  },
  {
    title: 'Transporte interno de pallets',
    description:
      'Ideales para mover cargas dentro de áreas logísticas sin necesidad de equipos de gran tamaño.',
  },
  {
    title: 'Optimización de espacio en almacén',
    description:
      'Diseño compacto que facilita la operación en pasillos angostos y zonas de almacenamiento reducidas.',
  },
  {
    title: 'Operación ergonómica',
    description:
      'Controles accesibles y diseño orientado al operador para jornadas prolongadas sin fatiga.',
  },
  {
    title: 'Adaptabilidad a distintos formatos de carga',
    description:
      'Capacidad de ajustarse a diferentes dimensiones de pallets y configuraciones de almacenamiento.',
  },
]
,
    advantages: [
  {
    title: 'Diseño enfocado en el operador',
    description:
      'Empuñadura cómoda y controles accesibles que permiten jornadas prolongadas sin fatiga.',
    icon: 'ergonomic',
  },
  {
    title: 'Alta capacidad de carga',
    description:
      'Estructura robusta diseñada para manejar cargas pesadas con estabilidad.',
    icon: 'capacity',
  },
  {
    title: 'Compacto y maniobrable',
    description:
      'Ideal para pasillos estrechos y almacenes con espacio reducido.',
    icon: 'compact',
  },
  {
    title: 'Bajo mantenimiento',
    description:
      'Componentes diseñados para durabilidad y reducción de costos operativos.',
    icon: 'maintenance',
  },
  {
    title: 'Adaptabilidad de horquillas',
    description:
      'Horquillas ajustables que permiten manipular diferentes tamaños de carga.',
    icon: 'adjustable',
  },
]
,
    products: [
  {
    slug: 'ht-cdd5',
    model: 'HT-CDD5',
    name: 'Apilador Autoportante 0.5T–1.5T',
    tagline: 'Apilador autocargable compacto',
    capacityKg: 1500,
    wheels: 4,
    shortDescription:
      'Apilador compacto ideal para cargas ligeras y logística interna.',
    description:
      'Apilador eléctrico autoportante con capacidades configurables entre 500 y 1500 kg. Disponible en versión automática y semiautomática.',
    images: Array.from({ length: 9 }, (_, i) => `/products/ht-cdd5/${i + 1}.png`),
    specs: [
      { label: 'Capacidad nominal', value: '500–1500 kg' },
      { label: 'Altura de elevación', value: '1600–2870 mm' },
      { label: 'Altura mástil replegado', value: '1107–1666 mm' },
      { label: 'Longitud total', value: '1544–1676 mm' },
      { label: 'Ancho total', value: '658–835 mm' },
      { label: 'Distancia entre ejes', value: '787–974 mm' },
      { label: 'Radio de giro', value: '1147–1173 mm' },
      { label: 'Tipo de operación', value: 'Walkie' },
    ],
  },

  {
    slug: 'ht-cdd15',
    model: 'HT-CDD15',
    name: 'Apilador Eléctrico 1.5T',
    tagline: 'Impulsar el progreso y mantener el planeta',
    capacityKg: 1500,
    wheels: 4,
    shortDescription:
      'Apilador eléctrico industrial de alto alcance.',
    description:
      'Apilador eléctrico de 1.5 toneladas con altura máxima de elevación hasta 6000 mm, ideal para racks altos.',
    images: Array.from({ length: 7 }, (_, i) => `/products/ht-cdd15/${i + 1}.png`),
    specs: [
      { label: 'Capacidad nominal', value: '1500 kg' },
      { label: 'Altura de elevación', value: '3000–6000 mm' },
      { label: 'Altura mástil replegado', value: '2050 mm' },
      { label: 'Longitud total', value: '1755 mm' },
      { label: 'Ancho total', value: '800 mm' },
      { label: 'Distancia entre ejes', value: '1240 mm' },
      { label: 'Tamaño de horquillas', value: '1150×160×60 mm' },
      { label: 'Radio de giro', value: '1435 mm' },
      { label: 'Tipo de operación', value: 'Walkie' },
    ],
  },
  {
  slug: 'ht-cyd15',
  model: 'HT-CYD15',
  name: 'Apilador Todoterreno 1.5T–3.0T',
  tagline: 'Impulsar el progreso y mantener el planeta',
  capacityKg: 3000,
  wheels: 4,
  shortDescription:
    'Apilador todoterreno diseñado para superficies irregulares.',
  description:
    'Apilador eléctrico todoterreno con capacidad configurable entre 1500 y 3000 kg, ideal para operaciones en exteriores y terrenos irregulares.',
  images: Array.from({ length: 7 }, (_, i) => `/products/ht-cyd15/${i + 1}.png`),
  specs: [
    { label: 'Capacidad nominal', value: '1500–3000 kg' },
    { label: 'Altura de elevación', value: '1600–3000 mm' },
    { label: 'Altura mástil replegado', value: '2080 mm' },
    { label: 'Longitud total', value: '1720 mm' },
    { label: 'Ancho total', value: '1574 mm' },
    { label: 'Tamaño de horquillas', value: '1070×100×35 mm' },
    { label: 'Radio de giro', value: '1355 mm' },
    { label: 'Tipo de neumático', value: 'Poliuretano' },
    { label: 'Tipo de operación', value: 'Walkie' },
  ],
},


  {
    slug: 'ht-cqd16',
    model: 'HT-CQD16',
    name: 'Apilador Retráctil 1.6T',
    tagline: 'Optimización vertical en pasillos angostos',
    capacityKg: 1600,
    wheels: 4,
    shortDescription:
      'Apilador retráctil eléctrico de operación de pie.',
    description:
      'Apilador eléctrico retráctil de 1.6 toneladas diseñado para almacenamiento vertical eficiente.',
    images: Array.from({ length: 11 }, (_, i) => `/products/ht-cqd16/${i + 1}.png`),
    specs: [
      { label: 'Capacidad nominal', value: '1600 kg' },
      { label: 'Altura de elevación', value: '3000 mm' },
      { label: 'Altura mástil replegado', value: '2040 mm' },
      { label: 'Longitud total', value: '2335–2750 mm' },
      { label: 'Ancho total', value: '880–1030 mm' },
      { label: 'Distancia entre ejes', value: '1440 mm' },
      { label: 'Tamaño de horquillas', value: '1070×100×40 mm' },
      { label: 'Radio de giro', value: '1710–2145 mm' },
      { label: 'Tipo de operación', value: 'Stand-up' },
    ],
  },

  {
    slug: 'ht-cqd20',
    model: 'HT-CQD20',
    name: 'Apilador Retráctil 2.0T',
    tagline: 'Mayor capacidad y rendimiento industrial',
    capacityKg: 2000,
    wheels: 4,
    shortDescription:
      'Apilador retráctil eléctrico para uso intensivo.',
    description:
      'Apilador eléctrico retráctil de 2 toneladas con neumáticos de poliuretano y diseño para trabajo continuo.',
    images: Array.from({ length: 11 }, (_, i) => `/products/ht-cqd20/${i + 1}.png`),
    specs: [
      { label: 'Capacidad nominal', value: '2000 kg' },
      { label: 'Altura de elevación', value: '3000 mm' },
      { label: 'Altura mástil replegado', value: '2040 mm' },
      { label: 'Longitud total', value: '2435–2870 mm' },
      { label: 'Ancho total', value: '880–1030 mm' },
      { label: 'Distancia entre ejes', value: '1640 mm' },
      { label: 'Tamaño de horquillas', value: '1070×122×40 mm' },
      { label: 'Radio de giro', value: '1910–2340 mm' },
      { label: 'Tipo de neumático', value: 'Poliuretano' },
      { label: 'Tipo de operación', value: 'Stand-up' },
    ],
  },

  {
    slug: 'ht-cdd20',
    model: 'HT-CDD20',
    name: 'Apilador Eléctrico 2.0T',
    tagline: 'Apilador eléctrico hombre caminando',
    capacityKg: 2000,
    wheels: 4,
    shortDescription:
      'Apilador eléctrico robusto para operaciones logísticas exigentes.',
    description:
      'Apilador eléctrico de 2 toneladas diseñado para estabilidad y eficiencia en operaciones de almacén.',
    images: Array.from({ length: 10 }, (_, i) => `/products/ht-cdd20/${i + 1}.png`),
    specs: [
      { label: 'Capacidad nominal', value: '2000 kg' },
      { label: 'Altura de elevación', value: '1600–3000 mm' },
      { label: 'Altura mástil replegado', value: '2070 mm' },
      { label: 'Longitud total', value: '2210–2645 mm' },
      { label: 'Ancho total', value: '880 mm' },
      { label: 'Distancia entre ejes', value: '1500 mm' },
      { label: 'Tamaño de horquillas', value: '1220×185×55 mm' },
      { label: 'Radio de giro', value: '1755–2200 mm' },
      { label: 'Tipo de operación', value: 'Walkie' },
    ],
  },
]

  },
 
  {
    slug: 'plataforma-elevadora-de-tijera',
    title: 'Plataforma Elevadora de Tijera',
    description:
      'Plataformas elevadoras de tijera para trabajos en altura con máxima estabilidad y seguridad.',
    image: '/images/tijera.png',
    functions: [
  {
    title: 'Trabajo seguro en altura',
    description:
      'Proporcionan una plataforma estable para realizar tareas de mantenimiento, construcción e instalación.',
  },
  {
    title: 'Elevación de personal y materiales',
    description:
      'Permiten elevar operadores junto con herramientas y materiales necesarios para la operación.',
  },
  {
    title: 'Acceso a áreas de difícil alcance',
    description:
      'Facilitan intervenciones en zonas elevadas dentro de espacios industriales y comerciales.',
  },
  {
    title: 'Optimización del tiempo operativo',
    description:
      'Reducen tiempos de montaje y desmontaje en comparación con métodos tradicionales de elevación.',
  },
  {
    title: 'Versatilidad en distintos entornos',
    description:
      'Adecuadas para uso en interiores y exteriores según la configuración seleccionada.',
  },
]
,
    advantages: [
  {
    title: 'Versatilidad en altura',
    description:
      'Solución ideal para mantenimiento, construcción y operaciones industriales.',
    icon: 'versatile',
  },
  {
    title: 'Estructura de alta resistencia',
    description:
      'Diseñadas para soportar cargas pesadas con máxima estabilidad.',
    icon: 'capacity',
  },
  {
    title: 'Optimización del espacio',
    description:
      'Diseño compacto que permite trabajar en áreas limitadas.',
    icon: 'space',
  },
  {
    title: 'Durabilidad industrial',
    description:
      'Fabricadas con materiales de alta calidad para uso intensivo.',
    icon: 'durable',
  },
  {
    title: 'Configuración personalizada',
    description:
      'Diferentes capacidades, alturas y opciones según requerimiento.',
    icon: 'custom',
  },
]
,
    products: [
      {
  slug: 'ht-mp',
  model: 'HT-MP',
  name: 'Plataforma Elevadora de Tijera Móvil',
  tagline: 'Solución versátil para trabajo en altura',
  capacityKg: 1000,
  wheels: 4,
  shortDescription:
    'Plataforma de tijera móvil para trabajos en altura de 4 a 18 metros.',
  description:
    'Plataforma elevadora de tijera móvil con capacidad entre 300 y 1000 kg, adecuada para múltiples operadores y diferentes fuentes de energía.',
  images: Array.from({ length: 9 }, (_, i) => `/products/ht-mp/${i + 1}.png`),
  specs: [
    { label: 'Capacidad nominal', value: '300–1000 kg' },
    { label: 'Altura de plataforma', value: '4–18 m' },
    { label: 'Altura de trabajo', value: '6–20 m' },
    { label: 'Carga plataforma extendida', value: '113 kg' },
    { label: 'Extensión de plataforma', value: '0.9 m' },
    { label: 'Altura mínima al suelo', value: '0.02–0.1 m' },
    { label: 'Radio de giro', value: '0–2.2 m' },
    { label: 'Opciones de energía', value: '380V / 220V / DC / Motor combustión' },
    { label: 'Motor', value: 'Opcional' },
    { label: 'Batería', value: 'Opcional' },
    { label: 'Cargador', value: 'Opcional' },
  ],
},
{
  slug: 'ht-gtjz-tt',
  model: 'HT-GTJZ',
  name: 'Plataforma Elevadora Todo Terreno',
  tagline: 'Rendimiento extremo en superficies irregulares',
  capacityKg: 450,
  wheels: 4,
  shortDescription:
    'Plataforma de tijera todo terreno para construcción y exteriores.',
  description:
    'Plataforma elevadora todo terreno con capacidad entre 230 y 450 kg, equipada con sistema de descenso de emergencia y protección impermeable.',
  images: Array.from({ length: 8 }, (_, i) => `/products/ht-gtjz-tt/${i + 1}.png`),
  specs: [
    { label: 'Capacidad nominal', value: '230–450 kg' },
    { label: 'Altura de plataforma', value: '4.5–12 m' },
    { label: 'Altura de trabajo', value: '6.5–14 m' },
    { label: 'Pendiente máxima', value: '30°' },
    { label: 'Carga plataforma extendida', value: '113 kg' },
    { label: 'Extensión de plataforma', value: '0.6–0.9 m' },
    { label: 'Motor', value: '48V / 4–4.5 kW' },
    { label: 'Batería', value: '12V/100Ah ×2 – 6V/200Ah ×8' },
    { label: 'Cargador', value: '48V / 30A' },
  ],
},
{
  slug: 'ht-gtjz-ruedas',
  model: 'HT-GTJZ',
  name: 'Plataforma Elevadora con Ruedas Compacta',
  tagline: 'Compacta y eficiente para interiores',
  capacityKg: 450,
  wheels: 4,
  shortDescription:
    'Plataforma de tijera compacta con sistema de extensión rápida.',
  description:
    'Plataforma elevadora eléctrica con extensión accionada por pedal, ideal para proyectos interiores y mantenimiento industrial.',
  images: Array.from({ length: 8 }, (_, i) => `/products/ht-gtjz-ruedas/${i + 1}.png`),
  specs: [
    { label: 'Capacidad nominal', value: '230–450 kg' },
    { label: 'Altura de plataforma', value: '6–12 m' },
    { label: 'Altura de trabajo', value: '8–14 m' },
    { label: 'Capacidad de pendiente', value: '25%' },
    { label: 'Carga plataforma extendida', value: '113 kg' },
    { label: 'Extensión de plataforma', value: '0.9 m' },
    { label: 'Altura mínima al suelo', value: '0.02–0.1 m' },
    { label: 'Motor', value: '24V / 4.5 kW' },
    { label: 'Batería', value: '4×6V/225Ah' },
    { label: 'Cargador', value: '24V / 25A' },
  ],
},

    ],
  },
 
]
