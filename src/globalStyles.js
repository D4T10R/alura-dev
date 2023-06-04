import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: #051D3B;
    }

    :root {
        --cor-barra-pesquisa: rgba(255, 255, 255, 0.16);
        --cor-texto: #FFFFFF;
        --cor-texto-cinza: rgba(255, 255, 255, 0.56);
        --cor-botao: #5081FB;
        --cor-texto-botao: #051D3B;

        --font-texto: 'Inter', sem serifa;
    }

`