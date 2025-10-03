import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

declare module 'styled-components' {
  export interface DefaultTheme {
    corDeFundo: string
    corPrincipal: string
  }
}

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  font-size: 10;
  font-weight: bold;
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`

export const SideBarContainer = styled.div`
  position: sticky;
  left: 0;
  top: 80px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
