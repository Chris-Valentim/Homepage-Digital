import { useState } from 'react'
import * as S from './styles'
import { FaBars } from 'react-icons/fa'
import { Sidebar } from './Sidebar' 

export const MenuBurguer = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <S.Container>
      <FaBars onClick={showSiderbar}/>
      {sidebar && <Sidebar active={setSidebar}/>}
    </S.Container>
  )
}