import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { GlobalStyle, GlobalTheme } from './theme/theme'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
    <ThemeProvider theme={GlobalTheme}>
        <GlobalStyle/>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
)
