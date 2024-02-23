import * as S from './styles'
import Photo2 from '../assets/photo2.svg'
import Check from '../assets/check.svg'
import ArrowLeft from '../assets/arrowLeft.svg'
import ArrowRight from '../assets/arrowRight.svg'
import ArrowRight2 from '../assets/arrowRight2.svg'

const ContentBottom2 = () => {
  return (
    <S.Wrapper>
      <S.Line />
      <S.GuideTitle>
        <S.Latest />
        <S.Title>
          Mais recentes:
        </S.Title>
      </S.GuideTitle>
      <S.GuideRelated>
        <S.Card>
          <div>
            <img
              src={Photo2}
              alt="Fotografia"
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
              Novidades 2023
            </S.TitleCard>
            <S.Description>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam eget ligula eu lectus
              lobortis condimentum. Aliquam nonummy
              auctor massa. Pellentesque...
            </S.Description>
            <S.Button>
              <S.SubmitButton
                href="/">Continuar lendo
              </S.SubmitButton>
              <span>
                <img
                  src={ArrowRight2}
                  alt="Continue lendo"
                />
              </span>
            </S.Button>
            <S.Date>
              18/12/2022
            </S.Date>
          </S.InfoCard>
        </S.Card>
        <S.Card>
          <div>
            <img
              src={Photo2}
              alt="Fotografia"
            />
            
          </div>
          <S.InfoCard>
            <S.TitleCard>
              Agora você
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
                <img
                  src={ArrowRight2}
                  alt="Continue lendo"
                />
            </S.Button>
            <S.Date>
              16/12/2022
            </S.Date>
          </S.InfoCard>
        </S.Card>
      </S.GuideRelated>
      <S.Pages>
        <S.ArrowLeft>
          <img
            src={ArrowLeft}
            alt="Retroceder a página"
          />
        </S.ArrowLeft>
        <S.Guide />
        <S.ArrowRight>
          <img
            src={ArrowRight}
            alt="Avançar a página"
          />
        </S.ArrowRight>
      </S.Pages>
    </S.Wrapper>
  )
}

export default ContentBottom2
