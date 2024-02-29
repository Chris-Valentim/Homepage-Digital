import * as S from './styles'
import { RelatedContentProps } from '../../mock'
import { MdOutlineArrowRight } from "react-icons/md"

export const Card = ({ wasViewed, date, description, image, link, title }: RelatedContentProps) => {
  return (
    <S.Card>
      <S.Image>
        <img src={image} alt="" style={{width: '100%'}}/>
        {wasViewed && <S.Check />}
      </S.Image>
      <S.InfoCard>
        <S.Title>
          {title}
        </S.Title>
        <S.Description>
          {description}
        </S.Description>
        <S.Button>
          <S.Link href={link}>
            Continue lendo
          </S.Link>
          <span>
            <MdOutlineArrowRight color='#000480' />
          </span>
        </S.Button>
        <S.Date>
          <p>
            {date}
          </p>
        </S.Date>
      </S.InfoCard>
    </S.Card>
  )
}
