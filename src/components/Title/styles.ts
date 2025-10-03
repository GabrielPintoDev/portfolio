import styled from 'styled-components'
import { Props } from '.'

declare module 'styled-components' {
  export interface DefaultTheme {
    corPrincipal: string
  }
}

export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
