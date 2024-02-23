import * as S from './styles'

const Input = () => {
  return (
    <S.Search>
      <S.ImageSearch />
      <S.Input
        type="text"
        placeholder='buscar...'
      />
    </S.Search>
  )
}

export default Input

