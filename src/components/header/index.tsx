import { useEffect, useState } from 'react'
import * as S from './styles'

import cdcDigital from '../../assets/cdcDigital.svg'
import { Input } from './Input'
import { Profile } from './Profile'
import { Navegation } from './Navegation'

export const Header = () => {
  const [widthViewPort, setWidthViewPort] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidthViewPort(window.innerWidth)
    });
    return () => window.removeEventListener('resize', () => {})
  }, [widthViewPort])

  return (
    <header>
      {widthViewPort <= 968 &&
        <>
          <S.HeaderTop>
            <S.HeaderTopMobile>
              <S.Logotipo>
                <img
                  src={cdcDigital}
                  alt="logo da empresa"
                />
              </S.Logotipo>
              <Profile />
            </S.HeaderTopMobile>
            <Input />
          </S.HeaderTop>
          <Navegation />
        </>
      }
      {widthViewPort >= 969 &&
        <>
          <S.HeaderTop>
            <img
              src={cdcDigital}
              alt="logo da empresa" />
            <Input />
            <Profile />
          </S.HeaderTop>
          <Navegation />
        </>
      }
    </header>
  )
}
