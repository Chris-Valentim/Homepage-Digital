import Photo2 from '../assets/photo2.svg'

export interface RelatedContentProps {
  title: string;
  description: string;
  date: string;
  image: React.ReactNode;
  wasViewed: boolean;
  link: string;
}

export const relatedContent: RelatedContentProps[] = [
  {
    title: 'APP CDC',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque...',
    date: '20/12/2022',
    image: <img src={Photo2} alt=''/>,
    wasViewed: true,
    link: 'Continue lendo'
  },
  {
    title: 'Novidades 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque...',
    date: '18/12/2022',
    image: <img src={Photo2} alt=''/>,
    wasViewed: false,
    link: 'Continue lendo'
  },
  {
    title: 'Agora você',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque...',
    date: '16/12/2022',
    image: <img src={Photo2} alt=''/>,
    wasViewed: true,
    link: 'Continue lendo'
  },
  {
    title: 'Inauguração',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque...',
    date: '14/12/2022',
    image: <img src={Photo2} alt=''/>,
    wasViewed: false,
    link: 'Continue lendo'
  },
  {
    title: 'Novidades Conti Cas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque...',
    date: '12/12/2022',
    image: <img src={Photo2} alt=''/>,
    wasViewed: true,
    link: 'Continue lendo'
  },
] 