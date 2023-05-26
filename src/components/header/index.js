
import { styled } from "styled-components"

import logo from "../../img/Logo.svg"
import iconePesquisa from "./img/icone-pesquisa.svg"
import iconeHamburguer from "./img/icone-hamburguer.svg"
import iconePerfil from "./img/Photo.svg"

const Cabecalho = styled.header`
    display: flex;
    margin: 1.5em 0;
    padding: 0 1em;
    justify-content: space-between;
    align-items: center;

    .div__logo {
        width: 20%;
    }

    .div__opcoes {
        display: flex;
        width: 25%;
        justify-content: space-between;
    }

    .perfil, .barra__pesquisa {
        display: none;
    }

    @media screen and (min-width: 768px) {
        margin: 2.5em 0;

        .div__opcoes {
            width: 5%;
        }

        .icone__pesquisa {
            display: none;
        }

        .barra__pesquisa {
            display: block;
            position: absolute;
            top: 2.2em;
            left: 27%;
            width: 55%;
            height: 55px;
            padding: 0 1em;
            background: rgba(255, 255, 255, 0.16);
            border: none;
            border-radius: 8px;
            color: var(--cor-texto);
        }

        .barra__pesquisa::placeholder {
            color: var(--cor-texto-cinza);
        }
    }

    @media screen and (min-width: 1440px) {

        .barra__pesquisa {
            top: 3em;
        }
        
        .icone__hamburguer {
            display: none;
        }

        .perfil {
            display: flex;
            gap: 0.5em;
            color: var(--cor-texto);
        }

    }

`

function Header() {
    return (
        <Cabecalho>
            <div className="div__logo">
                <img src={logo} alt="Logo-alura_dev" />
            </div>
            <form>
                <input type="text" placeholder="Busque por algo" className="barra__pesquisa"/>
            </form>

            <div className="div__opcoes">
                <img src={iconePesquisa} alt="Botão para pesquisa" className="icone__pesquisa"/>
                <img src={iconeHamburguer} alt="Menu de opções" className="icone__hamburguer"/>
                <div className="perfil">
                    <img src={iconePerfil} alt="Icone perfil" />
                    <p>Harry</p>
                </div>
            </div>
        </Cabecalho>
    )
}

export default Header;