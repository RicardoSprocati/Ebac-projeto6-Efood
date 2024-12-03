import Header from '../components/Header'
import Cards from '../components/Cards'

import { useGetRestaurantesQuery } from '../services/api'

export type Menu = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  descricao: string
  avaliacao: string
  capa: string
  tipo: string
  destacado: boolean
  cardapio: Menu[]
}

const Home = () => {
  const { data: onRestaurantes } = useGetRestaurantesQuery()

  if (!onRestaurantes) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Header />
      <Cards id="on-restaurantes" restaurants={onRestaurantes} />
    </>
  )
}

export default Home
