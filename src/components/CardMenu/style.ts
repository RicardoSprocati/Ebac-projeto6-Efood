import styled from 'styled-components'
import { Cores } from '../../GlobalStyles'
import { ButtonLink } from '../Button/style'

export const CardContainer = styled.div`
  background-color: ${Cores.salmao};
  height: 338px;
  max-width: 320px;
  width: 100%;
  color: ${Cores.salmaoClaro};
  display: flex;
  flex-direction: column;

  .container {
    padding: 0 8px;
  }

  ${ButtonLink} {
    background-color: ${Cores.salmaoClaro};
    color: ${Cores.salmao};
    font-weight: 700px;
    line-height: 16px;
    font-size: 14px;
    justify-content: center;
  }
`

export const Image = styled.img`
  width: 100%;
  padding: 8px;
`

export const Title = styled.h3`
  padding: 0 8px;
  font-size: 16px;
  font-weight: 900px;
  line-height: 18.75px;
`

export const Description = styled.p`
  font-size: 14px;
  padding: 8px;
  font-weight: 400px;
  line-height: 22px;
`
