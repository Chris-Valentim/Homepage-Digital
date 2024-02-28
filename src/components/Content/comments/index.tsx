import * as S from './styles'
import Avatar2 from '../../../assets/avatar2.svg'

export const Comments = () => {
  return (
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
  )
}
