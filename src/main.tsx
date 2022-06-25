import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import mobileBackground from './assets/img/pattern-background-mobile.svg'
import RHDMedium from './assets/fonts/RedHatDisplay-Medium.ttf'
import RHDBold from './assets/fonts/RedHatDisplay-Bold.ttf'
import RHDBlack from './assets/fonts/RedHatDisplay-Black.ttf'
import App from './App'
import { colors } from './helpers/colors'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Red Hat Display';
        font-weight: 500;
        src: local('Red Hat Display'), url(${RHDMedium}) format('opentype');
    }

    @font-face {
        font-family: 'Red Hat Display';
        font-weight: 700;
        src: local('Red Hat Display'), url(${RHDBold}) format('opentype');
    }

    @font-face {
        font-family: 'Red Hat Display';
        font-weight: 900;
        src: local('Red Hat Display'), url(${RHDBlack}) format('opentype');
    }
    body {
        height: 100vh;
        margin: 0;
        background-image: url(${mobileBackground});
        background-repeat: no-repeat;
        background-color:  ${colors.pale_blue};
        font-family: 'Red Hat Display';
    }

    #root {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
)
