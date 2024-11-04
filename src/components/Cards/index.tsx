import Card from '../Card'
import { Body, Container } from './style'
import Restaurant from '../../models/Restaurantes'
import { useLocation } from 'react-router-dom'
import CardMenu from '../CardMenu'
import Menu from '../../models/Menu'

export type Props = {
  restaurants?: Restaurant[]
  menus?: Menu[]
}

const Cards = ({ restaurants, menus }: Props) => {
  const location = useLocation()

  return (
    <Body>
      <Container isHome={location.pathname === '/'}>
        {location.pathname === '/' && restaurants
          ? restaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                title={restaurant.title}
                description={restaurant.description}
                assessment={restaurant.assessment}
                image={restaurant.image}
                infos={restaurant.infos}
              />
            ))
          : menus
          ? menus.map(({ image, id, title, description }) => (
              <CardMenu
                key={id}
                title={title}
                image={image}
                description={description}
              />
            ))
          : null}
      </Container>
    </Body>
  )
}

export default Cards
