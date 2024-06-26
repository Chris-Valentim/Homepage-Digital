import Photo2 from '../assets/photo2.svg'

export interface RelatedContentProps {
  title: string;
  description: string;
  date: string;
  image: string;
  wasViewed: boolean;
  link: string;
  id: number;
}

export interface latestContentProps {
  title: string;
  description: string;
  date: string;
  image: string;
  wasViewed: boolean;
  link: string;
  id: number;
}

export const relatedContent: RelatedContentProps[] = [
  {
    title: 'APP React',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque...',
    date: '20/12/2022',
    image: Photo2,
    wasViewed: true,
    link: '#',
    id: Math.random()
  },
  {
    title: 'Novidades 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque...',
    date: '18/12/2022',
    image: Photo2,
    wasViewed: false,
    link: '#',
    id: Math.random()
  },
  {
    title: 'Agora você',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque...',
    date: '16/12/2022',
    image: Photo2,
    wasViewed: true,
    link: '#',
    id: Math.random()
  },
  {
    title: 'Inauguração',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque...',
    date: '14/12/2022',
    image: Photo2,
    wasViewed: false,
    link: '#',
    id: Math.random()
  },
  {
    title: 'Novidades Conti Cas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque...',
    date: '12/12/2022',
    image: Photo2,
    wasViewed: true,
    link: '#',
    id: Math.random()
  },
] 

export const latestContent: latestContentProps[] = [
  {
    title: 'Vacina',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque...',
    date: '28/12/2022',
    image: Photo2,
    wasViewed: false,
    link: '#',
    id: Math.random()
  },
  {
    title: 'Novidades 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque...',
    date: '26/12/2022',
    image: Photo2,
    wasViewed: true,
    link: '#',
    id: Math.random()
  },
  {
    title: 'Agora você',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque...',
    date: '24/12/2022',
    image: Photo2,
    wasViewed: false,
    link: '#',
    id: Math.random()
  },
  {
    title: 'Novas politicas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque...',
    date: '22/12/2022',
    image: Photo2,
    wasViewed: true,
    link: '#',
    id: Math.random()
  },
  {
    title: 'Novo visual do React',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque...',
    date: '20/12/2022',
    image: Photo2,
    wasViewed: false,
    link: '#',
    id: Math.random()
  },
] 

