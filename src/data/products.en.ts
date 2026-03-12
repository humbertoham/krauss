import { ProductCategory } from './product-types'

export const categories: ProductCategory[] = [
  {
    slug: 'carretilla-elevadora-electrica',
    title: 'Electric Forklift',
    description:
      'Electric forklifts designed for efficient, quiet, and emission-free operations in industrial environments.',
    image: '/images/montacarga.jpg',
    imageP: '/images/montacarga.png',
    imageM: '/images/movil/montacarga.jpg',
    functions: [
      {
        title: 'Efficient handling of heavy loads',
        description:
          'Designed to lift, transport, and position high-tonnage loads with precision and stability in industrial environments.',
      },
      {
        title: 'Indoor operation',
        description:
          'Electric operation without emissions allows use in warehouses, logistics centers, and production facilities.',
      },
      {
        title: 'Logistics process optimization',
        description:
          'Facilitates continuous movement of goods, reducing operational time and increasing productivity.',
      },
      {
        title: 'Lifting at different heights',
        description:
          'Configurable with multiple mast options to adapt to different vertical storage systems.',
      },
      {
        title: 'Advanced operational safety',
        description:
          'Equipped with control systems that ensure stability, efficient braking, and safe maneuverability.',
      },
    ],
    advantages: [
      {
        title: 'Clean and quiet operation',
        description:
          'Emission-free operation with low noise levels, ideal for indoor environments and modern industrial facilities.',
        icon: 'eco',
      },
      {
        title: 'Superior precision and control',
        description:
          'Smooth movement and consistent power delivery for safer and more precise maneuvers.',
        icon: 'precision',
      },
      {
        title: 'Adaptable configuration',
        description:
          'Customizable lifting heights and accessories to fit different operational needs.',
        icon: 'custom',
      },
      {
        title: 'Ergonomic and intuitive design',
        description:
          'Digital controls and a modern dashboard that simplify operation for all types of operators.',
        icon: 'interface',
      },
      {
        title: 'Longer service life and profitability',
        description:
          'Reduced mechanical wear lowers maintenance costs and maximizes return on investment.',
        icon: 'durable',
      },
    ],
    products: [
      {
        slug: 'ht-1-5t',
        model: 'HT-1.5T',
        name: 'Electric Forklift 1.5T',
        tagline: 'Driving progress, sustaining the planet',
        capacityKg: 1500,
        wheels: 4,
        shortDescription: 'Compact electric forklift ideal for warehouses.',
        description:
          '1.5-ton electric forklift with hydraulic steering and excellent maneuverability for indoor operations.',
        images: Array.from({ length: 2 }, (_, i) => `/products/ht-1-5t/${i + 1}.png`),
        specs: [
          { label: 'Rated capacity', value: '1500 kg' },
          { label: 'Lifting height', value: '3000 mm (customizable)' },
          { label: 'Overall height', value: '1990 mm' },
          { label: 'Length without forks', value: '2350 mm' },
          { label: 'Width', value: '1200 mm' },
          { label: 'Wheelbase', value: '1580 mm' },
          { label: 'Speed without load', value: '14 km/h' },
          { label: 'Operating speed', value: '12 km/h' },
          { label: 'Front wheel', value: '650-10' },
          { label: 'Rear wheel', value: '500-8' },
          { label: 'Color', value: 'Customizable' },
        ],
        heroImage: '/products/ht-1-5t/hero.png',

        configurations: [
          {
            title: 'Operation console',
            image: '/products/ht-1-5t/4.png',
          },
          {
            title: 'Reinforced fork',
            image: '/products/ht-1-5t/3.png',
          },
          {
            title: 'Solid tires',
            image: '/products/ht-1-5t/6.png',
          },
          {
            title: 'Comfortable seat',
            image: '/products/ht-1-5t/5.png',
          },
          {
            title: 'Hydraulic cylinder',
            image: '/products/ht-1-5t/7.png',
          },
          {
            title: 'Lighting lamp',
            image: '/products/ht-1-5t/8.png',
          },
        ],
      },

      {
        slug: 'ht-1-6t',
        model: 'HT-1.6T',
        name: 'Electric Forklift 1.6T (3 wheels)',
        tagline: 'Driving progress and protecting the planet',
        capacityKg: 1600,
        wheels: 3,
        shortDescription: 'Compact 3-wheel model for tight spaces.',
        description:
          '1.6-ton electric forklift with reduced turning radius and hydraulic power steering system.',
        images: Array.from({ length: 3 }, (_, i) => `/products/ht-1-6t/${i + 1}.png`),
        specs: [
          { label: 'Rated capacity', value: '1600 kg' },
          { label: 'Lifting height', value: '3000 mm (customizable)' },
          { label: 'Overall height', value: '2050 mm' },
          { label: 'Length without forks', value: '1950 mm' },
          { label: 'Width', value: '1100 mm' },
          { label: 'Wheelbase', value: '1380 mm' },
          { label: 'Minimum turning radius', value: '1580 mm' },
          { label: 'Speed without load', value: '12 km/h' },
          { label: 'Operating speed', value: '10 km/h' },
          { label: 'Front wheel', value: '18x7-10' },
          { label: 'Rear wheel', value: '15x4.5-8' },
          { label: 'Color', value: 'Customizable' },
        ],
        heroImage: '/products/ht-1-6t/hero.png',

        configurations: [
          {
            title: 'Load fork',
            image: '/products/ht-1-6t/8.png',
          },
          {
            title: 'Mast carriage',
            image: '/products/ht-1-6t/4.png',
          },
          {
            title: 'Mast structure',
            image: '/products/ht-1-6t/6.png',
          },
          {
            title: 'Hydraulic cylinder',
            image: '/products/ht-1-6t/5.png',
          },
          {
            title: 'Instrument dashboard',
            image: '/products/ht-1-6t/7.png',
          },
        ],
      },
      {
  slug: 'ht-2-0t',
  model: 'HT-2.0T',
  name: 'Electric Forklift 2T',
  tagline: 'Upgraded high-performance version',
  capacityKg: 2000,
  wheels: 4,
  shortDescription:
    '2-ton electric forklift with reinforced structure.',
  description:
    '2-ton electric forklift with reinforced H-frame steel structure and high-power motor designed for industrial applications.',
  images: Array.from({ length: 3 }, (_, i) => `/products/ht-2-0t/${i + 1}.png`),
  specs: [
    { label: 'Rated capacity', value: '2000 kg' },
    { label: 'Machine weight', value: '2900 kg' },
    { label: 'Lifting height', value: '3000 mm (customizable)' },
    { label: 'Overall height', value: '2080 mm' },
    { label: 'Length without forks', value: '2050 mm' },
    { label: 'Width', value: '1150 mm' },
    { label: 'Motor', value: '5.5 kW' },
    { label: 'Speed without load', value: '14 km/h' },
    { label: 'Operating speed', value: '12 km/h' },
    { label: 'Front wheel', value: '650-10' },
    { label: 'Rear wheel', value: '500-8' },
    { label: 'Color', value: 'Customizable' },
  ],
  heroImage: '/products/ht-2-0t/hero.png',

  configurations: [
    {
      title: 'Operation console',
      image: '/products/ht-2-0t/4.png',
    },
    {
      title: 'Reinforced fork',
      image: '/products/ht-2-0t/5.png',
    },
    {
      title: 'Solid tires',
      image: '/products/ht-2-0t/7.png',
    },
    {
      title: 'Comfortable seat',
      image: '/products/ht-2-0t/6.png',
    },
    {
      title: 'Hydraulic cylinder',
      image: '/products/ht-2-0t/8.png',
    },
  ],
},

{
  slug: 'ht-2-0t-b',
  model: 'HT-2.0T-B',
  name: 'Electric Forklift 2.0T',
  tagline: 'Custom version',
  capacityKg: 2000,
  wheels: 4,
  shortDescription: 'Robust equipment with reinforced C-frame.',
  description:
    '2-ton electric forklift with high-power motor and reinforced steel structure.',
  images: Array.from({ length: 2 }, (_, i) => `/products/ht-2-0t-b/${i + 1}.png`),
  specs: [
    { label: 'Rated capacity', value: '2000 kg' },
    { label: 'Machine weight', value: '2600 kg' },
    { label: 'Lifting height', value: '3000 mm' },
    { label: 'Overall height', value: '1990 mm' },
    { label: 'Motor', value: '4 kW' },
    { label: 'Speed without load', value: '14 km/h' },
    { label: 'Operating speed', value: '12 km/h' },
    { label: 'Front wheel', value: '650-10' },
    { label: 'Rear wheel', value: '500-8' },
    { label: 'Color', value: 'Customizable' },
  ],
  heroImage: '/products/ht-2-0t-b/hero.png',

  configurations: [
    {
      title: 'Operation console',
      image: '/products/ht-2-0t-b/3.png',
    },
    {
      title: 'Reinforced fork',
      image: '/products/ht-2-0t-b/6.png',
    },
    {
      title: 'Solid tires',
      image: '/products/ht-2-0t-b/5.png',
    },
    {
      title: 'Comfortable seat',
      image: '/products/ht-2-0t-b/7.png',
    },
    {
      title: 'Hydraulic cylinder',
      image: '/products/ht-2-0t-b/4.png',
    },
  ],
},

{
  slug: 'ht-2-5t-b',
  model: 'HT-2.5T-B',
  name: 'Electric Forklift 2.5T',
  tagline: 'Driving progress and sustaining the planet',
  capacityKg: 2500,
  wheels: 4,
  shortDescription: 'High-performance industrial model.',
  description:
    '2.5-ton electric forklift with 5 kW lifting motor and reinforced structure.',
  images: Array.from({ length: 2 }, (_, i) => `/products/ht-2-5t-b/${i + 1}.png`),
  specs: [
    { label: 'Rated capacity', value: '2500 kg' },
    { label: 'Lifting height', value: '3000 mm (customizable)' },
    { label: 'Overall height', value: '2180 mm' },
    { label: 'Length without forks', value: '2550 mm' },
    { label: 'Width', value: '1120 mm' },
    { label: 'Lifting motor', value: '5 kW' },
    { label: 'Speed without load', value: '12 km/h' },
    { label: 'Operating speed', value: '10 km/h' },
    { label: 'Front wheel', value: '650-10' },
    { label: 'Rear wheel', value: '18x7-8' },
    { label: 'Color', value: 'Customizable' },
  ],
  heroImage: '/products/ht-2-5t-b/hero.png',

  configurations: [
    {
      title: 'LED instrument panel',
      image: '/products/ht-2-5t-b/8.png',
    },
    {
      title: 'Reinforced fork',
      image: '/products/ht-2-5t-b/5.png',
    },
    {
      title: 'Reinforced chain',
      image: '/products/ht-2-5t-b/4.png',
    },
    {
      title: 'Comfortable seats',
      image: '/products/ht-2-5t-b/3.png',
    },
    {
      title: 'Control platform',
      image: '/products/ht-2-5t-b/6.png',
    },
    {
      title: 'Solid tires',
      image: '/products/ht-2-5t-b/7.png',
    },
  ],
},
{
  slug: 'ht-3-0t-h',
  model: '3.0T-H',
  name: 'Electric Forklift 3T',
  tagline: 'Driving progress and sustaining the planet',
  capacityKg: 3000,
  wheels: 4,
  shortDescription:
    '3-ton electric forklift with reinforced structure.',
  description:
    '3-ton electric forklift designed for demanding industrial operations with customization options.',
  images: Array.from({ length: 2 }, (_, i) => `/products/ht-3-0t-h/${i + 1}.png`),
  specs: [
    { label: 'Rated capacity', value: '3000 kg' },
    { label: 'Lifting height', value: '3000 mm (customizable)' },
    { label: 'Overall height', value: '2150 mm' },
    { label: 'Length without forks', value: '2600 mm' },
    { label: 'Width', value: '1200 mm' },
    { label: 'Speed without load', value: '14 km/h' },
    { label: 'Operating speed', value: '12–14 km/h' },
    { label: 'Front wheel', value: '650-10' },
    { label: 'Rear wheel', value: '500-8' },
    { label: 'Color', value: 'Customizable' },
  ],
  heroImage: '/products/ht-3-0t-h/hero.png',

  configurations: [
    {
      title: 'Safety overhead guard',
      image: '/products/ht-3-0t-h/6.png',
    },
    {
      title: 'Wide-visibility mast',
      image: '/products/ht-3-0t-h/3.png',
    },
    {
      title: 'Reinforced fork',
      image: '/products/ht-3-0t-h/4.png',
    },
    {
      title: 'Hydraulic cylinder',
      image: '/products/ht-3-0t-h/8.png',
    },
    {
      title: 'Solid tires',
      image: '/products/ht-3-0t-h/5.png',
    },
  ],
},

{
  slug: 'ht-3-5t',
  model: 'HT-3.5T',
  name: 'Electric Forklift 3.5T',
  tagline: 'Industrial power and stability',
  capacityKg: 3500,
  wheels: 4,
  shortDescription: 'Electric solution for heavy loads.',
  description:
    '3.5-ton electric forklift with extended wheelbase and hydraulic steering.',
  images: Array.from({ length: 3 }, (_, i) => `/products/ht-3-5t/${i + 1}.png`),
  specs: [
    { label: 'Rated capacity', value: '3500 kg' },
    { label: 'Lifting height', value: '3000 mm (customizable)' },
    { label: 'Overall height', value: '2180 mm' },
    { label: 'Wheelbase', value: '1860 mm' },
    { label: 'Speed without load', value: '12 km/h' },
    { label: 'Operating speed', value: '10 km/h' },
    { label: 'Front wheel', value: '28x9-15' },
    { label: 'Rear wheel', value: '650-10' },
    { label: 'Color', value: 'Customizable' },
  ],
  heroImage: '/products/ht-3-5t/hero.png',

  configurations: [
    {
      title: 'Reinforced fork',
      image: '/products/ht-3-5t/4.png',
    },
    {
      title: 'Reinforced chain',
      image: '/products/ht-3-5t/7.png',
    },
    {
      title: 'Comfortable seats',
      image: '/products/ht-3-5t/8.png',
    },
    {
      title: 'Control platform',
      image: '/products/ht-3-5t/5.png',
    },
    {
      title: 'Solid tires',
      image: '/products/ht-3-5t/6.png',
    },
  ],
},

{
  slug: 'ht-4-0t',
  model: 'HT-4.0T',
  name: 'Electric Forklift 4T',
  tagline: 'Greater power and stability',
  capacityKg: 4000,
  wheels: 4,
  shortDescription: 'High-performance electric equipment.',
  description:
    '4-ton electric forklift with wide turning radius and reinforced structure.',
  images: Array.from({ length: 2 }, (_, i) => `/products/ht-4-0t/${i + 1}.png`),
  specs: [
    { label: 'Rated capacity', value: '4000 kg' },
    { label: 'Lifting height', value: '3000 mm (customizable)' },
    { label: 'Overall height', value: '2150 mm' },
    { label: 'Turning radius', value: '2670 mm' },
    { label: 'Speed without load', value: '14 km/h' },
    { label: 'Operating speed', value: '12 km/h' },
    { label: 'Front wheel', value: '28x9-15' },
    { label: 'Rear wheel', value: '650-10' },
    { label: 'Color', value: 'Customizable' },
  ],
  heroImage: '/products/ht-4-0t/hero.png',

  configurations: [
    {
      title: 'Side shift',
      image: '/products/ht-4-0t/4.png',
    },
    {
      title: 'Control platform',
      image: '/products/ht-4-0t/3.png',
    },
    {
      title: 'Solid tires',
      image: '/products/ht-3-5t/6.png',
    },
  ],
},

{
  slug: 'ht-5-0t',
  model: 'HT-5.0T',
  name: 'Electric Forklift 5T',
  tagline: 'Heavy-duty industrial performance',
  capacityKg: 5000,
  wheels: 4,
  shortDescription: 'High-capacity electric forklift.',
  description:
    '5-ton electric forklift with high-power AC motor and robust structure.',
  images: Array.from({ length: 2 }, (_, i) => `/products/ht-5-0t/${i + 1}.png`),
  specs: [
    { label: 'Rated capacity', value: '5000 kg' },
    { label: 'Lifting motor', value: 'AC 25.5 kW' },
    { label: 'Turning radius', value: '2750 mm' },
    { label: 'Overall height', value: '2250 mm' },
    { label: 'Speed without load', value: '14 km/h' },
    { label: 'Operating speed', value: '12 km/h' },
    { label: 'Front wheel', value: '28x9-15' },
    { label: 'Rear wheel', value: '700-12' },
    { label: 'Color', value: 'Customizable' },
  ],
  heroImage: '/products/ht-5-0t/hero.png',

  configurations: [
    {
      title: 'LED lighting',
      image: '/products/ht-5-0t/5.png',
    },
    {
      title: 'Side shift',
      image: '/products/ht-5-0t/6.png',
    },
    {
      title: 'Reinforced fork',
      image: '/products/ht-5-0t/4.png',
    },
    {
      title: 'Reinforced chain',
      image: '/products/ht-5-0t/3.png',
    },
    {
      title: 'Control platform',
      image: '/products/ht-5-0t/7.png',
    },
    {
      title: 'Solid tires',
      image: '/products/ht-5-0t/8.png',
    },
  ],
},
{
  slug: 'ht-7-0t',
  model: 'HT-7.0T',
  name: 'Electric Forklift 7T',
  tagline: 'Driving progress and sustaining the planet',
  capacityKg: 7000,
  wheels: 4,
  shortDescription:
    'High-capacity industrial electric forklift.',
  description:
    '7-ton electric forklift designed for heavy industrial operations with hydraulic power steering.',
  images: Array.from({ length: 2 }, (_, i) => `/products/ht-7-0t/${i + 1}.png`),
  specs: [
    { label: 'Rated capacity', value: '7000 kg' },
    { label: 'Lifting height', value: '3000 mm (customizable)' },
    { label: 'Overall height', value: '2260 mm' },
    { label: 'Length without forks', value: '3600 mm' },
    { label: 'Width', value: '1860 mm' },
    { label: 'Wheelbase', value: '2560 mm' },
    { label: 'Minimum turning radius', value: '2800 mm' },
    { label: 'Speed without load', value: '15 km/h' },
    { label: 'Operating speed', value: '13 km/h' },
    { label: 'Front wheel', value: '28x9-15 (dual)' },
    { label: 'Rear wheel', value: '27x10-12' },
    { label: 'Steering', value: 'Hydraulic power steering' },
    { label: 'Color', value: 'Customizable' },
  ],
  heroImage: '/products/ht-7-0t/hero.png',

  configurations: [
    {
      title: 'LED instrument panel',
      image: '/products/ht-7-0t/6.png',
    },
    {
      title: 'Removable body panel',
      image: '/products/ht-7-0t/3.png',
    },
    {
      title: 'Reinforced fork',
      image: '/products/ht-7-0t/9.png',
    },
    {
      title: 'Reinforced chain',
      image: '/products/ht-7-0t/4.png',
    },
    {
      title: 'Control platform',
      image: '/products/ht-7-0t/8.png',
    },
    {
      title: 'Solid tires',
      image: '/products/ht-7-0t/7.png',
    },
  ],
},

{
  slug: 'ht-10t',
  model: 'HT-10T',
  name: 'Electric Forklift 10T',
  tagline: 'Maximum industrial electric capacity',
  capacityKg: 10000,
  wheels: 4,
  shortDescription: 'Electric solution for ultra-heavy loads.',
  description:
    '10-ton electric forklift designed for large-scale industrial operations.',
  images: Array.from({ length: 3 }, (_, i) => `/products/ht-10t/${i + 1}.png`),
  specs: [
    { label: 'Rated capacity', value: '10000 kg' },
    { label: 'Traction motor power', value: '18 kW' },
    { label: 'Lifting height', value: '3000 mm (customizable)' },
    { label: 'Overall height', value: '2520 mm' },
    { label: 'Speed without load', value: '15 km/h' },
    { label: 'Operating speed', value: '14 km/h' },
    { label: 'Front wheel', value: '900-20' },
    { label: 'Rear wheel', value: '900-16' },
    { label: 'Color', value: 'Customizable' },
  ],
  heroImage: '/products/ht-10t/hero.png',

  configurations: [
    {
      title: 'Reinforced fork',
      image: '/products/ht-10t/6.png',
    },
    {
      title: 'Heavy-duty axle',
      image: '/products/ht-10t/5.png',
    },
    {
      title: 'Mast frame',
      image: '/products/ht-10t/7.png',
    },
    {
      title: 'Solid tires',
      image: '/products/ht-10t/8.png',
    },
    {
      title: 'Hydraulic cylinder',
      image: '/products/ht-10t/4.png',
    },
  ],
},
    ],
  },
  {
  slug: 'apilador',
  title: 'Stacker',
  description:
    'Industrial stackers ideal for load handling in confined spaces and logistics operations.',
  image: '/images/apilador.jpg',
  imageP: '/images/apilador.png',
  imageM: '/images/movil/apilador.jpg',
  functions: [
    {
      title: 'Efficient vertical stacking',
      description:
        'Allows goods to be organized at height within warehouses with maximum stability and precision.',
    },
    {
      title: 'Internal pallet transport',
      description:
        'Ideal for moving loads within logistics areas without the need for large equipment.',
    },
    {
      title: 'Warehouse space optimization',
      description:
        'Compact design that facilitates operation in narrow aisles and reduced storage areas.',
    },
    {
      title: 'Ergonomic operation',
      description:
        'Accessible controls and operator-oriented design for long working hours without fatigue.',
    },
    {
      title: 'Adaptability to different load formats',
      description:
        'Capable of adjusting to different pallet dimensions and storage configurations.',
    },
  ],
  advantages: [
    {
      title: 'Operator-focused design',
      description:
        'Comfortable handle and accessible controls that allow long working shifts without fatigue.',
      icon: 'ergonomic',
    },
    {
      title: 'High load capacity',
      description:
        'Robust structure designed to handle heavy loads with stability.',
      icon: 'capacity',
    },
    {
      title: 'Compact and maneuverable',
      description:
        'Ideal for narrow aisles and warehouses with limited space.',
      icon: 'compact',
    },
    {
      title: 'Low maintenance',
      description:
        'Components designed for durability and reduced operational costs.',
      icon: 'maintenance',
    },
    {
      title: 'Fork adaptability',
      description:
        'Adjustable forks that allow handling different load sizes.',
      icon: 'adjustable',
    },
  ],
  products: [
    {
      slug: 'ht-cdd5',
      model: 'HT-CDD5',
      name: 'Self-Supporting Stacker 0.5T–1.5T',
      tagline: 'Compact self-loading stacker',
      capacityKg: 1500,
      wheels: 4,
      shortDescription:
        'Compact stacker ideal for light loads and internal logistics.',
      description:
        'Self-supporting electric stacker with configurable capacities between 500 and 1500 kg. Available in automatic and semi-automatic versions.',
      images: Array.from({ length: 3 }, (_, i) => `/products/ht-cdd5/${i + 1}.png`),
      specs: [
        { label: 'Rated capacity', value: '500–1500 kg' },
        { label: 'Lifting height', value: '1600–2870 mm' },
        { label: 'Mast height (lowered)', value: '1107–1666 mm' },
        { label: 'Overall length', value: '1544–1676 mm' },
        { label: 'Overall width', value: '658–835 mm' },
        { label: 'Wheelbase', value: '787–974 mm' },
        { label: 'Turning radius', value: '1147–1173 mm' },
        { label: 'Operation type', value: 'Walkie' },
      ],
      heroImage: '/products/ht-cdd5/hero.png',

      configurations: [
        {
          title: 'Operation handle',
          image: '/products/ht-cdd5/4.png',
        },
        {
          title: 'Reinforced fork',
          image: '/products/ht-cdd5/5.png',
        },
        {
          title: 'Mast frame',
          image: '/products/ht-cdd5/6.png',
        },
        {
          title: 'Hydraulic cylinder',
          image: '/products/ht-cdd5/7.png',
        },
        {
          title: 'Steering wheels',
          image: '/products/ht-cdd5/8.png',
        },
      ],
    }, 
{
  slug: 'ht-cdd15',
  model: 'HT-CDD15',
  name: 'Electric Stacker 1.5T',
  tagline: 'Driving progress and sustaining the planet',
  capacityKg: 1500,
  wheels: 4,
  shortDescription:
    'High-reach industrial electric stacker.',
  description:
    '1.5-ton electric stacker with lifting height up to 6000 mm, ideal for high warehouse racks.',
  images: Array.from({ length: 2 }, (_, i) => `/products/ht-cdd15/${i + 1}.png`),
  specs: [
    { label: 'Rated capacity', value: '1500 kg' },
    { label: 'Lifting height', value: '3000–6000 mm' },
    { label: 'Mast height (lowered)', value: '2050 mm' },
    { label: 'Overall length', value: '1755 mm' },
    { label: 'Overall width', value: '800 mm' },
    { label: 'Wheelbase', value: '1240 mm' },
    { label: 'Fork size', value: '1150×160×60 mm' },
    { label: 'Turning radius', value: '1435 mm' },
    { label: 'Operation type', value: 'Walkie' },
  ],
  heroImage: '/products/ht-cdd15/hero.png',

  configurations: [
    {
      title: 'Smart operation handle',
      image: '/products/ht-cdd15/4.png',
    },
    {
      title: 'Forged fork',
      image: '/products/ht-cdd15/5.png',
    },
    {
      title: 'Steel chain',
      image: '/products/ht-cdd15/6.png',
    },
    {
      title: 'Mast frame',
      image: '/products/ht-cdd15/3.png',
    },
  ],
},

{
  slug: 'ht-cyd15',
  model: 'HT-CYD15',
  name: 'Rough Terrain Stacker 1.5T–3.0T',
  tagline: 'Driving progress and sustaining the planet',
  capacityKg: 3000,
  wheels: 4,
  shortDescription:
    'Rough terrain stacker designed for uneven surfaces.',
  description:
    'Rough terrain electric stacker with configurable capacity between 1500 and 3000 kg, ideal for outdoor operations and uneven terrain.',
  images: Array.from({ length: 2 }, (_, i) => `/products/ht-cyd15/${i + 1}.png`),
  specs: [
    { label: 'Rated capacity', value: '1500–3000 kg' },
    { label: 'Lifting height', value: '1600–3000 mm' },
    { label: 'Mast height (lowered)', value: '2080 mm' },
    { label: 'Overall length', value: '1720 mm' },
    { label: 'Overall width', value: '1574 mm' },
    { label: 'Fork size', value: '1070×100×35 mm' },
    { label: 'Turning radius', value: '1355 mm' },
    { label: 'Tire type', value: 'Polyurethane' },
    { label: 'Operation type', value: 'Walkie' },
  ],
  heroImage: '/products/ht-cyd15/hero.png',

  configurations: [
    {
      title: 'Forged fork',
      image: '/products/ht-cyd15/3.png',
    },
    {
      title: 'Stable chassis',
      image: '/products/ht-cyd15/4.png',
    },
    {
      title: 'Smart operation handle',
      image: '/products/ht-cyd15/5.png',
    },
  ],
},

{
  slug: 'ht-cqd16',
  model: 'HT-CQD16',
  name: 'Reach Stacker 1.6T',
  tagline: 'Vertical optimization in narrow aisles',
  capacityKg: 1600,
  wheels: 4,
  shortDescription:
    'Stand-up electric reach stacker.',
  description:
    '1.6-ton electric reach stacker designed for efficient vertical storage in warehouses.',
  images: Array.from({ length: 3 }, (_, i) => `/products/ht-cqd16/${i + 1}.png`),
  specs: [
    { label: 'Rated capacity', value: '1600 kg' },
    { label: 'Lifting height', value: '3000 mm' },
    { label: 'Mast height (lowered)', value: '2040 mm' },
    { label: 'Overall length', value: '2335–2750 mm' },
    { label: 'Overall width', value: '880–1030 mm' },
    { label: 'Wheelbase', value: '1440 mm' },
    { label: 'Fork size', value: '1070×100×40 mm' },
    { label: 'Turning radius', value: '1710–2145 mm' },
    { label: 'Operation type', value: 'Stand-up' },
  ],
  heroImage: '/products/ht-cqd16/hero.png',

  configurations: [
    {
      title: 'Battery',
      image: '/products/ht-cqd16/4.png',
    },
    {
      title: 'Forged fork',
      image: '/products/ht-cqd16/5.png',
    },
    {
      title: 'Pedals',
      image: '/products/ht-cqd16/6.png',
    },
    {
      title: 'Smart operation handle',
      image: '/products/ht-cqd16/7.png',
    },
    {
      title: 'Steel chain',
      image: '/products/ht-cqd16/8.png',
    },
    {
      title: 'Nylon / PU tires',
      image: '/products/ht-cqd16/9.png',
    },
    {
      title: 'Front mast',
      image: '/products/ht-cqd16/10.png',
    },
  ],
},
{
  slug: 'ht-cqd20',
  model: 'HT-CQD20',
  name: 'Reach Stacker 2.0T',
  tagline: 'Higher capacity and industrial performance',
  capacityKg: 2000,
  wheels: 4,
  shortDescription:
    'Electric reach stacker for intensive use.',
  description:
    '2-ton electric reach stacker with polyurethane tires and a design optimized for continuous operation.',
  images: Array.from({ length: 3 }, (_, i) => `/products/ht-cqd20/${i + 1}.png`),
  specs: [
    { label: 'Rated capacity', value: '2000 kg' },
    { label: 'Lifting height', value: '3000 mm' },
    { label: 'Mast height (lowered)', value: '2040 mm' },
    { label: 'Overall length', value: '2435–2870 mm' },
    { label: 'Overall width', value: '880–1030 mm' },
    { label: 'Wheelbase', value: '1640 mm' },
    { label: 'Fork size', value: '1070×122×40 mm' },
    { label: 'Turning radius', value: '1910–2340 mm' },
    { label: 'Tire type', value: 'Polyurethane' },
    { label: 'Operation type', value: 'Stand-up' },
  ],
  heroImage: '/products/ht-cqd20/hero.png',

  configurations: [
    {
      title: 'Battery',
      image: '/products/ht-cqd20/4.png',
    },
    {
      title: 'Forged fork',
      image: '/products/ht-cqd20/5.png',
    },
    {
      title: 'Pedals',
      image: '/products/ht-cqd20/6.png',
    },
    {
      title: 'Smart operation handle',
      image: '/products/ht-cqd20/7.png',
    },
    {
      title: 'Steel chain',
      image: '/products/ht-cqd20/8.png',
    },
    {
      title: 'Nylon / PU tires',
      image: '/products/ht-cqd20/9.png',
    },
    {
      title: 'Front mast',
      image: '/products/ht-cqd20/10.png',
    },
  ],
},

{
  slug: 'ht-cdd20',
  model: 'HT-CDD20',
  name: 'Electric Stacker 2.0T',
  tagline: 'Walk-behind electric stacker',
  capacityKg: 2000,
  wheels: 4,
  shortDescription:
    'Robust electric stacker for demanding logistics operations.',
  description:
    '2-ton electric stacker designed for stability and efficiency in warehouse operations.',
  images: Array.from({ length: 2 }, (_, i) => `/products/ht-cdd20/${i + 1}.png`),
  specs: [
    { label: 'Rated capacity', value: '2000 kg' },
    { label: 'Lifting height', value: '1600–3000 mm' },
    { label: 'Mast height (lowered)', value: '2070 mm' },
    { label: 'Overall length', value: '2210–2645 mm' },
    { label: 'Overall width', value: '880 mm' },
    { label: 'Wheelbase', value: '1500 mm' },
    { label: 'Fork size', value: '1220×185×55 mm' },
    { label: 'Turning radius', value: '1755–2200 mm' },
    { label: 'Operation type', value: 'Walkie' },
  ],
  heroImage: '/products/ht-1-6t/hero.png',

  configurations: [
    {
      title: 'Guard rail',
      image: '/products/ht-cdd20/3.png',
    },
    {
      title: 'Forged fork',
      image: '/products/ht-cdd20/4.png',
    },
    {
      title: 'Pedals',
      image: '/products/ht-cdd20/5.png',
    },
    {
      title: 'Smart operation handle',
      image: '/products/ht-cdd20/9.png',
    },
    {
      title: 'Steel chain',
      image: '/products/ht-cdd20/6.png',
    },
    {
      title: 'Nylon / PU tires',
      image: '/products/ht-cdd20/7.png',
    },
    {
      title: 'Mast frame',
      image: '/products/ht-cdd20/8.png',
    },
  ],
},


], },
{
  slug: 'plataforma-elevadora-de-tijera',
  title: 'Scissor Lift Platform',
  description:
    'Scissor lift platforms designed for working at height with maximum stability and safety.',
  image: '/images/tijera.jpg',
  imageP: '/images/tijera.png',
  imageM: '/images/movil/tijera.jpg',
  functions: [
    {
      title: 'Safe work at height',
      description:
        'Provide a stable platform for performing maintenance, construction, and installation tasks.',
    },
    {
      title: 'Lifting personnel and materials',
      description:
        'Allow operators to be elevated along with the tools and materials required for the operation.',
    },
    {
      title: 'Access to hard-to-reach areas',
      description:
        'Facilitate work in elevated areas within industrial and commercial environments.',
    },
    {
      title: 'Operational time optimization',
      description:
        'Reduce setup and dismantling times compared to traditional elevation methods.',
    },
    {
      title: 'Versatility in different environments',
      description:
        'Suitable for indoor and outdoor use depending on the selected configuration.',
    },
  ],
  advantages: [
    {
      title: 'Height versatility',
      description:
        'Ideal solution for maintenance, construction, and industrial operations.',
      icon: 'versatile',
    },
    {
      title: 'High-strength structure',
      description:
        'Designed to support heavy loads with maximum stability.',
      icon: 'capacity',
    },
    {
      title: 'Space optimization',
      description:
        'Compact design that allows work in limited areas.',
      icon: 'space',
    },
    {
      title: 'Industrial durability',
      description:
        'Manufactured with high-quality materials for intensive use.',
      icon: 'durable',
    },
    {
      title: 'Custom configuration',
      description:
        'Different capacities, heights, and options depending on requirements.',
      icon: 'custom',
    },
  ],
  products: [
    {
      slug: 'ht-mp',
      model: 'HT-MP',
      name: 'Mobile Scissor Lift Platform',
      tagline: 'Versatile solution for working at height',
      capacityKg: 1000,
      wheels: 4,
      shortDescription:
        'Mobile scissor lift platform for work at heights from 4 to 18 meters.',
      description:
        'Mobile scissor lift platform with capacity between 300 and 1000 kg, suitable for multiple operators and different power sources.',
      images: Array.from({ length: 3 }, (_, i) => `/products/ht-mp/${i + 1}.png`),
      specs: [
        { label: 'Rated capacity', value: '300–1000 kg' },
        { label: 'Platform height', value: '4–18 m' },
        { label: 'Working height', value: '6–20 m' },
        { label: 'Extended platform load', value: '113 kg' },
        { label: 'Platform extension', value: '0.9 m' },
        { label: 'Minimum ground clearance', value: '0.02–0.1 m' },
        { label: 'Turning radius', value: '0–2.2 m' },
        { label: 'Power options', value: '380V / 220V / DC / Combustion engine' },
        { label: 'Motor', value: 'Optional' },
        { label: 'Battery', value: 'Optional' },
        { label: 'Charger', value: 'Optional' },
      ],
      heroImage: '/products/ht-mp/hero.png',

      configurations: [
        {
          title: 'Work platform',
          image: '/products/ht-mp/4.png',
        },
        {
          title: 'Tires',
          image: '/products/ht-mp/5.png',
        },
        {
          title: 'Lift controller',
          image: '/products/ht-mp/6.png',
        },
        {
          title: 'Handles',
          image: '/products/ht-mp/7.png',
        },
        {
          title: 'Support legs',
          image: '/products/ht-mp/8.png',
        },
      ],
    }, 

{
  slug: 'ht-gtjz-tt',
  model: 'HT-GTJZ',
  name: 'Rough Terrain Scissor Lift',
  tagline: 'Extreme performance on uneven surfaces',
  capacityKg: 450,
  wheels: 4,
  shortDescription:
    'Rough terrain scissor lift platform for construction and outdoor use.',
  description:
    'Rough terrain lifting platform with capacity between 230 and 450 kg, equipped with an emergency lowering system and waterproof protection.',
  images: Array.from({ length: 2 }, (_, i) => `/products/ht-gtjz-tt/${i + 1}.png`),
  specs: [
    { label: 'Rated capacity', value: '230–450 kg' },
    { label: 'Platform height', value: '4.5–12 m' },
    { label: 'Working height', value: '6.5–14 m' },
    { label: 'Maximum slope', value: '30°' },
    { label: 'Extended platform load', value: '113 kg' },
    { label: 'Platform extension', value: '0.6–0.9 m' },
    { label: 'Motor', value: '48V / 4–4.5 kW' },
    { label: 'Battery', value: '12V/100Ah ×2 – 6V/200Ah ×8' },
    { label: 'Charger', value: '48V / 30A' },
  ],
  heroImage: '/products/ht-gtjz-tt/hero.png',

  configurations: [
    {
      title: 'Control switch',
      image: '/products/ht-gtjz-tt/3.png',
    },
    {
      title: 'Track',
      image: '/products/ht-gtjz-tt/4.png',
    },
    {
      title: 'Platform ladder',
      image: '/products/ht-gtjz-tt/5.png',
    },
    {
      title: 'Platform extension',
      image: '/products/ht-gtjz-tt/6.png',
    },
    {
      title: 'Support leg',
      image: '/products/ht-gtjz-tt/7.png',
    },
  ],
},

{
  slug: 'ht-gtjz-ruedas',
  model: 'HT-GTJZ',
  name: 'Compact Wheeled Scissor Lift',
  tagline: 'Compact and efficient for indoor use',
  capacityKg: 450,
  wheels: 4,
  shortDescription:
    'Compact scissor lift platform with quick extension system.',
  description:
    'Electric lifting platform with pedal-operated extension, ideal for indoor projects and industrial maintenance.',
  images: Array.from({ length: 2 }, (_, i) => `/products/ht-gtjz-ruedas/${i + 1}.png`),
  specs: [
    { label: 'Rated capacity', value: '230–450 kg' },
    { label: 'Platform height', value: '6–12 m' },
    { label: 'Working height', value: '8–14 m' },
    { label: 'Gradeability', value: '25%' },
    { label: 'Extended platform load', value: '113 kg' },
    { label: 'Platform extension', value: '0.9 m' },
    { label: 'Minimum ground clearance', value: '0.02–0.1 m' },
    { label: 'Motor', value: '24V / 4.5 kW' },
    { label: 'Battery', value: '4×6V/225Ah' },
    { label: 'Charger', value: '24V / 25A' },
  ],
  heroImage: '/products/ht-gtjz-ruedas/hero.png',

  configurations: [
    {
      title: 'Battery',
      image: '/products/ht-gtjz-ruedas/5.png',
    },
    {
      title: 'Silent tires',
      image: '/products/ht-gtjz-ruedas/6.png',
    },
    {
      title: 'Control switch',
      image: '/products/ht-gtjz-ruedas/7.png',
    },
    {
      title: 'Platform extension',
      image: '/products/ht-gtjz-ruedas/4.png',
    },
    {
      title: 'Extended platform',
      image: '/products/ht-gtjz-ruedas/3.png',
    },
  ],
},


], },

]