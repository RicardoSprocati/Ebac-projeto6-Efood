import Card from '../Card'
import { Body, Container } from './style'

import { useLocation } from 'react-router-dom'
import CardMenu from '../CardMenu'
import { Menu, Restaurant } from '../../Home'

export type Props = {
  restaurants?: Restaurant[]
  menus?: Menu[]
}

const Cards = ({ restaurants = [], menus = [] }: Props) => {
  const location = useLocation()

  return (
    <Body>
      <Container isHome={location.pathname === '/'}>
        {location.pathname === '/' && restaurants
          ? restaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                title={restaurant.titulo}
                description={restaurant.descricao}
                assessment={restaurant.avaliacao}
                cover={restaurant.capa}
                typeFood={restaurant.tipo}
                highlights={restaurant.destacado}
                id={restaurant.id}
              />
            ))
          : menus?.length
          ? menus.map((menu: Menu) => (
              <li key={menu.id}>
                <CardMenu
                  name={menu.nome}
                  image={menu.foto}
                  descriptionMenu={menu.descricao}
                  price={menu.preco}
                  portion={menu.porcao}
                  id={menu.id}
                />
              </li>
            ))
          : null}
      </Container>
    </Body>
  )
}

export default Cards
