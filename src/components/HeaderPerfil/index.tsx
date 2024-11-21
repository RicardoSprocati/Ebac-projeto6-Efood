import logo from '../../assets/images/logo.svg'
import Button from '../Button'
import { LinkCart, PerfilHeader } from './style'

import cart from '../../assets/images/shopping-cart.svg'

const HeaderPerfil = () => (
  <PerfilHeader>
    <div className="container">
      <Button type="link" to="/">
        Restaurantes
      </Button>
      <img src={logo} alt="logo" />
      <LinkCart>
        0 - produto(s)
        <img src={cart} alt="carrinho" />
      </LinkCart>
    </div>
  </PerfilHeader>
)

export default HeaderPerfil
