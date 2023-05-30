import { styled } from "styled-components"

//imagens
import iconeEditorCodigo from "./img/icone-editor-codigo.svg"
import iconeComunidade from "./img/icone-comunidade.svg"

const MenuBarEstilo = styled.div`
    display: none;
    
    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1440px) {
        display: block;
        .titulo_menu {
            font-family: var(--font-texto);
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 0.4em;
            color: var(--cor-texto);
            margin: 0 0 2em 2em;
        }

        .opcoes {
            opacity: 0.56;

            display: flex;
            margin: 0 0 1em 1em;
            gap: 1em;
            background: none;
            border: none;

            p {
                font-family: var(--font-texto);
                line-height: 24px;
                font-weight: 400;
                color: var(--cor-texto);
            }
        }

        .opcoes:focus {
            opacity: 1;
        }
    }
    
`

function MenuBar() {
    return (
        <MenuBarEstilo>
            <h2 className="titulo_menu">MENU</h2>
            <button className="opcoes">
                <img src={iconeEditorCodigo} alt="Icone Editor" />
                <p>Editor de código</p>
            </button>
            <button className="opcoes">
                <img src={iconeComunidade} alt="Icone Editor" />
                <p>Comunidade</p>
            </button>
        </MenuBarEstilo>
    )
}

export default MenuBar