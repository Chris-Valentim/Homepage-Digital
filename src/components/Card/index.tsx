import * as S from './styles'
import { RelatedContentProps } from '../../mock'
import { MdOutlineArrowRight } from "react-icons/md"

export const Card = ({ wasViewed, date, description, image, link, title }: RelatedContentProps) => {
  return (
    <S.Card>
      <div>
        {image}
        {wasViewed && <S.Check/>}
      </div>
      <div>
      <S.Title>
        {title}
      </S.Title>
      <S.InfoCard>
        <S.Description>
         {description}
        </S.Description>
        <S.Button>
          <S.Link href="/">
            {link}
          </S.Link>
          <span>
            <MdOutlineArrowRight color='#000480'/>
          </span>
        </S.Button>
        <S.Date> 
          {date}
        </S.Date>
      </S.InfoCard>
      </div>
    </S.Card>
  )
}
