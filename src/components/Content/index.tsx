import * as S from './styles'
import Emoji from '../assets/emoji.svg'
import Photo1 from '../assets/photo1.svg'
import Avatar2 from '../assets/avatar2.svg'


const Content = () => {
  return (
    <div>
      <S.Header>
        <S.LineLeft />
        <S.Title>
          Notícias
        </S.Title>
        <S.LineRight />
      </S.Header>
      <S.Container>
        <S.Subtitle>
          Novo visual do CDC digital
        </S.Subtitle>
        <S.Date>
          26/12/2022 15h05
        </S.Date>
      </S.Container>
      <S.Division />
      <S.Photo>
        <img src={Photo1} alt="Fotográfia" />
        <S.DescriptionPhoto>
          foto tirada pelo fotógrafo Carlos no dia 01/01/2022
        </S.DescriptionPhoto>
      </S.Photo>
      <S.Description>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quis nobis suscipit sequi necessitatibus facilis. Soluta quos animi nulla in harum, commodi blanditiis repellat deleniti ducimus consequuntur molestias consectetur molestiae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quis nobis suscipit sequi necessitatibus facilis. Soluta quos animi nulla in harum, commodi blanditiis repellat deleniti ducimus consequuntur molestias consectetur molestiae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quis nobis suscipit sequi necessitatibus facilis. Soluta quos animi nulla in harum, commodi blanditiis repellat deleniti ducimus consequuntur molestias consectetur molestiae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quis nobis suscipit sequi necessitatibus facilis. Soluta quos animi nulla in harum, commodi blanditiis repellat deleniti ducimus consequuntur molestias consectetur molestiae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quis nobis suscipit sequi necessitatibus facilis. Soluta quos animi nulla in harum, commodi blanditiis repellat deleniti ducimus consequuntur molestias consectetur molestiae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quis nobis suscipit sequi necessitatibus facilis. Soluta quos animi nulla in harum, commodi blanditiis repellat deleniti ducimus consequuntur molestias consectetur molestiae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quis nobis suscipit sequi necessitatibus facilis. Soluta quos animi nulla in harum, commodi blanditiis repellat deleniti ducimus consequuntur molestias consectetur molestiae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quis nobis suscipit sequi necessitatibus facilis. Soluta quos animi nulla in harum, commodi blanditiis repellat deleniti ducimus consequuntur molestias consectetur molestiae?
        </p>
        <S.ReactButton>
          <S.ButtonLike>
            <img 
              src={Emoji} 
              alt="Botão de gostei" 
            />
          </S.ButtonLike>
          <S.ButtonDeslike>
            <img 
              src={Emoji} 
              alt="Botão de não gostei" 
            />
          </S.ButtonDeslike>
        </S.ReactButton>
        <S.Comments>
          <img 
            src={Avatar2} 
            alt="avatar" 
          />
          <S.Input 
            type="text" 
            placeholder='Adicione um comentário'
          />
        </S.Comments>
      </S.Description>
    </div>
  )
}

export default Content
