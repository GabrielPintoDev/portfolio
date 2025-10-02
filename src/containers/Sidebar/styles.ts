import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  font-size: 10;
  font-weight: bold;
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  background-color: #282a35;
  cursor: pointer;
`

export const SideBarContainer = styled.div`
  position: sticky;
  left: 0;
  top: 80px;
`
