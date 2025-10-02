import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Title'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Gabriel Andrade</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        GabrielPintoDev
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Fullstack Python
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
