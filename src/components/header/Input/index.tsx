import * as S from './styles'

export const Input = () => {
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
