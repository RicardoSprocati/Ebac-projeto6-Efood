import { useEffect, useState } from 'react'
import BannerHeader from '../../components/Banner'
import Cards from '../../components/Cards'
import HeaderPerfil from '../../components/HeaderPerfil'
import { Menu, Restaurant } from '../../Home'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()

  const [menu, setMenu] = useState<Menu[]>([])
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setMenu(res.cardapio)
        setRestaurant(res)
      })
  }, [id])

  return (
    <>
      <HeaderPerfil />
      {restaurant && (
        <BannerHeader
          title={restaurant.titulo}
          cover={restaurant.capa}
          type={restaurant.tipo}
        />
      )}

      <Cards menus={menu} />
    </>
  )
}

export default Perfil
