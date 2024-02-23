import * as S from './styles'
import Photo2 from '../assets/photo2.svg'
import Check from '../assets/check.svg'
import ArrowRight2 from '../assets/arrowRight2.svg'

const Card = () => {
  return (
    <S.Card>
      <div>
        <img
          src={Photo2}
          alt="Fotografia"
        />
        <S.Check
          src={Check}
          alt="Visualizado"
        />
      </div>
      <S.InfoCard>
        <S.TitleCard>
          APP CDC
        </S.TitleCard>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam eget ligula eu lectus
          lobortis condimentum. Aliquam nonummy
          auctor massa. Pellentesque...
        </S.Description>
        <S.Button>
          <S.SubmitButton href="/">
            Continuar lendo
          </S.SubmitButton>
          <span>
            <img
              src={ArrowRight2}
              alt="Continue lendo"
            />
          </span>
        </S.Button>
        <S.Date>
          20/12/2022
        </S.Date>
      </S.InfoCard>
    </S.Card>
  )
}

export default Card
