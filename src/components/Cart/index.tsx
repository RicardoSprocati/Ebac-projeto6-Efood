import Button from '../Button'
import { CartContainer, CartItem, Overlay, SideBar, ValorTotal } from './style'

import cancel from '../../assets/images/lixeira.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../store'
import { close, remove } from '../store/reducers/cart'
import { formataPreco } from '../Cards'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const CloseCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPreco = () => {
    return items.reduce((acumulador, valorAtual) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={CloseCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h4>{item.nome}</h4>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <img
                onClick={() => removeItem(item.id)}
                className="smallImage"
                src={cancel}
                alt="close"
              />
            </CartItem>
          ))}
        </ul>
        <ValorTotal>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPreco())}</p>
        </ValorTotal>
        <Button type="button">Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
