import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #373737;
    color: #373737;
    margin: 0;
    font-family: "Roboto", sans-serif
  }
`

export const GlobalTheme = {
    primaryColor: '#5181b8',
    secondaryColor: '#ff1553'
}
