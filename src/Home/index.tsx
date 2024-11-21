import Header from '../components/Header'
import Cards from '../components/Cards'
import { useEffect, useState } from 'react'

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
  const [restaurant, setRestaurant] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])

  return (
    <>
      <Header />
      <Cards restaurants={restaurant} />
    </>
  )
}

export default Home
