import star from '../../assets/images/star.svg'
import Button from '../Button'
import Tag from '../Tag'

import {
  ContainerCard,
  DescricaoCard,
  HeaderCard,
  Imagem,
  Nota,
  Paragrafo
} from './style'

type Props = {
  title: string
  infos: string[]
  assessment: string
  description: string
  image: string
}

const Card = ({ title, infos, assessment, description, image }: Props) => (
  <ContainerCard>
    <Imagem Image={image}>
      <div
        style={{
          display: 'flex',
          gap: '8px',
          position: 'absolute',
          top: '16px',
          right: '16px'
        }}
      >
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </div>
    </Imagem>
    <DescricaoCard>
      <HeaderCard>
        <h3>{title}</h3>
        <Nota>
          <p>{assessment}</p>
          <img src={star} alt="star" />
        </Nota>
      </HeaderCard>
      <Paragrafo>{description}</Paragrafo>
      <div className="container">
        <Button to="/Perfil">Saiba mais</Button>
      </div>
    </DescricaoCard>
  </ContainerCard>
)

export default Card
