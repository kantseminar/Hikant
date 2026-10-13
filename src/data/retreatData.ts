export interface PagePicture {
  src: string;
  alt: string;
  caption?: string;
}

export interface PageData {
  id: string;
  name: string;
  navTitle: string;
  pictures: PagePicture[];
  hidden?: boolean;
}

export const RETREAT_PAGES: PageData[] = [
  {
    id: 'home',
    name: 'Home',
    navTitle: 'Home',
    pictures: [
      {
        src: '/home_scree_mountain.jpg?v=5',
        alt: 'Val Maira alpine mountain landscape',
      },
      {
        src: '/home_alpine_trail.jpg?v=5',
        alt: 'Percorsi Occitani hiking trail along rocky mountain slopes (IMG_1308)',
      },
      {
        src: '/home_monastery_library.jpg?v=5',
        alt: 'Padre Sergio’s authentic monastic library in Borgata Superiore',
      },
      {
        src: '/home_marmora_village.jpg?v=5',
        alt: 'Borgata Superiore, Marmora church bell tower and valley ridge (IMG_1348)',
      },
    ],
  },
  {
    id: 'location',
    name: 'Location',
    navTitle: 'Location',
    pictures: [
      {
        src: '/Location_1.jpeg?v=5',
        alt: 'Location — Padre Sergio’s former monastery in Borgata Superiore, Marmora',
      },
      {
        src: '/Location_2.jpeg?v=5',
        alt: 'Location — Monastery indoor and outdoor spaces',
      },
      {
        src: '/Location_3.jpeg?v=5',
        alt: 'Location — Library and study environment',
      },
      {
        src: '/Location_4.jpeg?v=5',
        alt: 'Location — Panoramic mountain views from the monastery',
      },
    ],
  },
  {
    id: 'accommodation',
    name: 'Accommodation',
    navTitle: 'Accommodation',
    pictures: [
      {
        src: '/Acco_1.jpg?v=5',
        alt: 'Triple room',
        caption: 'Triple room',
      },
      {
        src: '/Acco_2.jpeg?v=5',
        alt: 'Double room',
        caption: 'Double room',
      },
      {
        src: '/Acco_3.jpeg?v=5',
        alt: 'Kitchen',
        caption: 'Kitchen',
      },
      {
        src: '/Acco_4.jpeg?v=5',
        alt: 'Terrace',
        caption: 'Terrace',
      },
    ],
  },
  {
    id: 'program',
    name: 'Program',
    navTitle: 'Program',
    pictures: [
      {
        src: '/Program_1.jpg?v=5',
        alt: 'Program — Meeting and departure to Marmora',
      },
      {
        src: '/Program_2.jpg?v=5',
        alt: 'Program — Philosophical reading and discussion sessions',
      },
      {
        src: '/Program_3.jpeg?v=5',
        alt: 'Program — The alpine hike in Val Maira',
      },
      {
        src: '/Program_4.jpeg?v=5',
        alt: 'Program — Community, reflection and conclusion',
      },
    ],
  },
  {
    id: 'costs',
    name: 'Costs',
    navTitle: 'Costs',
    pictures: [
      {
        src: '/Cost_1.jpeg?v=5',
        alt: 'Costs — Shared journey and transport arrangements',
      },
      {
        src: '/Cost_2.jpeg?v=5',
        alt: 'Costs — Shared meals and food preparation',
      },
      {
        src: '/Cost_3.jpeg?v=5',
        alt: 'Costs — Accommodation at Padre Sergio’s former monastery',
      },
      {
        src: '/Cost_4.jpeg?v=5',
        alt: 'Costs — Association membership and cultural spaces',
      },
    ],
  },
  {
    id: 'equipment',
    name: 'Equipment',
    navTitle: 'Equipment',
    pictures: [
      {
        src: '/equi_1.jpeg?v=5',
        alt: 'Equipment — Sturdy mountain hiking footwear',
      },
      {
        src: '/equi_2.jpeg?v=5',
        alt: 'Equipment — Comfortable daypack and trail equipment',
      },
      {
        src: '/equi_3.jpeg?v=5',
        alt: 'Equipment — Mountain weather protection and jacket',
      },
      {
        src: '/equi_4.jpeg?v=5',
        alt: 'Equipment — Alpine trail accessories and sun protection',
      },
    ],
  },
  {
    id: 'download',
    name: 'Download',
    navTitle: 'Download',
    hidden: true,
    pictures: [
      {
        src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1400&q=85',
        alt: 'Reading texts, syllabus and papers on wooden desk',
      },
      {
        src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=85',
        alt: 'Monastic library texts and archives',
      },
      {
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85',
        alt: 'Valley overview of Marmora and mountain slopes',
      },
      {
        src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=85',
        alt: 'Study desk and archive documents',
      },
    ],
  },
];

export const RETREAT_INFO = {
  title: 'hiKant',
  dates: 'September 6 – September 9, 2027',
  location: 'Borgata Superiore, Marmora, Val Maira (CN), Italy',
  elevation: '1,580 m a.s.l.',
  venue: 'Former Benedictine Monastery (Padre Sergio De Piccoli)',
  association: 'Associazione Luoghi di Passaggio',
  library: 'Approx. 62,500 volumes',
  rooms: '4 shared rooms, 9 beds in total (three double rooms, one triple room)',
  bathrooms: '2 shared bathrooms',
  costs: {
    membership: '€15 membership fee (Associazione Luoghi di Passaggio)',
    accommodation: '€15 per night for accommodation (3 nights = €45)',
    travel: 'Contribution to shared travel from Turin to Marmora',
    food: 'Contribution to shared food expenses (bought and prepared together)',
  },
  contactEmail: 'hikant.seminar@gmail.com',
  organizers: [
    'Serena Feloj (University of Pavia)',
    'Luigi Filieri (Scuola Normale Superiore, Pisa)',
    'Gabriele Gava (University of Turin)',
    'João Lemos (University of Turin)',
  ],
};
