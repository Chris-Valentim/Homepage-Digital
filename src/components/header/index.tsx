import * as S from './styles'
import cdcDigital from '../assets/cdcDigital.svg'
import avatar from '../assets/avatar.svg'
import rectangle from '../assets/rectangle.svg'

const Header = () => {
  return (
    <div>
      <div>
        <img 
          src={cdcDigital} 
          alt="logo da empresa" 
        />
        <input type="text" />
        <div>
          <p>
            Olá, Marco Antônio! Design, Casa Di Condi
          </p>
          <img src={avatar} alt="Avatar" />
        </div>
      </div>
      <nav>
        <div>
          <img src={rectangle} alt="Ícone do Menu" />
          <p></p>
         <div>vector</div>
        </div>
        <p>Página principal</p>
        <p>Notícias</p>
        <p>Caixa de entrada</p>
        <p>Oportunidades internas</p>
        <p>Conti Cast</p>
        <p>Telefone/Ramais</p>
        <p>Aniversariantes do Mês</p>
        <p>Fale conosco</p>
        <div>vector</div>
        <h3>#SOMOS TODOS CDC</h3>
      </nav>
    </div>
  )
}

export default Header
