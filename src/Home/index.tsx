import Restaurant from '../models/Restaurantes'
import Header from '../components/Header'
import Cards from '../components/Cards'

import sushi from '../assets/images/sushi.svg'
import trattoria from '../assets/images/trattoria.svg'

const restaurant: Restaurant[] = [
  {
    title: 'Hioki Sushi ',
    infos: ['Destaque da semana', 'japonesa'],
    assessment: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    id: 1
  },
  {
    title: 'La Dolce Vita Trattoria ',
    infos: ['Italiana'],
    assessment: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    id: 2
  },
  {
    title: 'La Dolce Vita Trattoria ',
    infos: ['Italiana'],
    assessment: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    id: 3
  },
  {
    title: 'La Dolce Vita Trattoria ',
    infos: ['Italiana'],
    assessment: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    id: 4
  },
  {
    title: 'La Dolce Vita Trattoria ',
    infos: ['Italiana'],
    assessment: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    id: 5
  },
  {
    title: 'La Dolce Vita Trattoria ',
    infos: ['Italiana'],
    assessment: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    id: 6
  }
]

const Home = () => (
  <>
    <Header />
    <Cards restaurants={restaurant} />
  </>
)

export default Home
