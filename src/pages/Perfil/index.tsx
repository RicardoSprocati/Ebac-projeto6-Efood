import BannerHeader from '../../components/Banner'
import Cards from '../../components/Cards'
import HeaderPerfil from '../../components/HeaderPerfil'

import { useParams } from 'react-router-dom'
import { useGetMenuQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: onMenu } = useGetMenuQuery(id!)

  if (!onMenu) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <HeaderPerfil />

      <BannerHeader
        title={onMenu.titulo}
        cover={onMenu.capa}
        type={onMenu.tipo}
      />

      <Cards id="on-menu" menus={onMenu.cardapio} />
    </>
  )
}

export default Perfil
