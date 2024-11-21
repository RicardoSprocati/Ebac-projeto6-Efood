import Button from '../Button'
import {
  CardContainer,
  Description,
  Image,
  LerMais,
  Modal,
  ModalContent,
  Title
} from './style'

import close from '../../assets/images/close.svg'
import { useState } from 'react'

type Props = {
  name: string
  image: string
  descriptionMenu: string
  price: number
  portion: string
  id: number
}

const CardMenu = ({ name, image, descriptionMenu, price, portion }: Props) => {
  const [modal, setModal] = useState({ isVisible: false })
  const [descriptionExpanded, setDescriptionExpanded] = useState(false)

  const toggleDescription = () => {
    setDescriptionExpanded(!descriptionExpanded)
  }

  const getDescription = () => {
    if (!descriptionExpanded && descriptionMenu.length > 243) {
      return (
        <>
          {descriptionMenu.slice(0, 243)}...{''}
          <LerMais type="button" onClick={toggleDescription}>
            Ler mais
          </LerMais>
        </>
      )
    }
    return (
      <>
        {descriptionMenu}
        {''}
        {descriptionExpanded && (
          <LerMais type="button" onClick={toggleDescription}>
            Ler menos
          </LerMais>
        )}
      </>
    )
  }

  return (
    <>
      <CardContainer>
        <Image src={image} alt="pizza" />
        <Title>{name}</Title>
        <Description>{getDescription()}</Description>
        <div className="container">
          <Button type="button" onClick={() => setModal({ isVisible: true })}>
            Adicionar ao carrinho
          </Button>
        </div>
      </CardContainer>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent>
          <img
            className="smallImage"
            src={close}
            alt="close"
            onClick={() => setModal({ isVisible: false })}
          />
          <div>
            <img className="bigImage" src={image} alt="pizza" />
          </div>
          <div>
            <h3>{name}</h3>
            <p>{descriptionMenu}</p> <br />
            <p>{portion}</p>
            <Button type="button" to="/">
              {`Adicionar ao carrinho - R$ ${price}`}
            </Button>
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModal({ isVisible: false })}
        ></div>
      </Modal>
    </>
  )
}

export default CardMenu
