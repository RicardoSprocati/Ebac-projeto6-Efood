import Button from '../Button'
import { CardContainer, Description, Image, Title } from './style'

type Props = {
  title: string
  image: string
  description: string
}

const CardMenu = ({ title, image, description }: Props) => (
  <CardContainer>
    <Image src={image} alt="pizza" />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <div className="container">
      <Button to="/">Adicionar ao carrinho</Button>
    </div>
  </CardContainer>
)

export default CardMenu
