import styled from 'styled-components'
import bannerHome from '../../assets/images/Vector.svg'
import { Cores } from '../../GlobalStyles'

export const PerfilHeader = styled.header`
  background-image: url(${bannerHome});
  background-repeat: no-repeat;
  background-size: cover;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Cores.salmao};

  .container {
    max-width: 1024px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const LinkCart = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`
