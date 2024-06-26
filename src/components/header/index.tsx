import { useEffect, useState } from 'react'
import * as S from './styles'

import logo from '../../assets/logo.svg'
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
                  src={logo}
                  alt="logo da empresa"
                  className='logo'
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
              src={logo}
              alt="logo da empresa" 
              className='logo'
            />
            <Input />
            <Profile />
          </S.HeaderTop>
          <Navegation />
        </>
      }
    </header>
  )
}
