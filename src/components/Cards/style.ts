import styled from 'styled-components'
import { Cores } from '../../GlobalStyles'

type Props = {
  isHome: boolean
}

export const Body = styled.body`
  background-color: ${Cores.fundo};
  display: flex;
  justify-content: center;
`

export const Container = styled.div<Props>`
  background-color: ${Cores.fundo};
  max-width: 1024px;
  width: 100%;
  padding: 80px 0;
  display: grid;

  grid-template-columns: ${(props) =>
    props.isHome ? '1fr 1fr' : '1fr 1fr 1fr'};

  gap: ${(props) => (props.isHome ? '40px 80px' : '32px')};
`
