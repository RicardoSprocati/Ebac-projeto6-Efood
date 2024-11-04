import styled from 'styled-components'

import bannerTrattoria from '../../assets/images/Fundo-trattoria.svg'
import { Cores } from '../../GlobalStyles'

export const Banner = styled.div`
  background-image: url(${bannerTrattoria});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 280px;
  display: flex;
  justify-content: center;

  .container {
    max-width: 1024px;
    width: 100%;
    color: ${Cores.branco};
  }
`

export const SpanCategoria = styled.span`
  position: absolute;
  font-size: 32px;
  font-weight: 100;
  line-height: 37px;
  top: 25px;
`
export const SpanTitulo = styled.span`
  position: absolute;
  font-size: 32px;
  font-weight: 900px;
  line-height: 37px;
  bottom: 32px;
`
