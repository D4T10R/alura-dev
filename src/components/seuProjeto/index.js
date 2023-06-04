import { styled } from "styled-components";
import React, {useState} from "react";

const SeuProjetoEstilo = styled.div`
    .titulos {
        font-family: var(--font-texto);
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.4em;
        color: var(--cor-texto);
    }

    .formulario {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .inputs {
        height: 56px;
        background: var(--cor-barra-pesquisa);
        border: none;
        border-radius: 8px;
        font-family: var(--font-texto);
        color: var(--cor-texto);
        padding: 0 1em;
    }

    option {
        width: 100px;
        background: blue;
    }

    .campo_descricao {
        text-align: initial;
        height: 80px;
    }

    .botao_enviar {
        height: 56px;
        border: none;
        border-radius: 8px;
        font-family: var(--font-texto);
        background: var(--cor-botao);
        color: var(--cor-texto-botao);
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
    }

    @media screen and (min-width: 1440px) {
        .botao_enviar {
            width: 100%;
        }
    }
`

function SeuProjeto() {
    const [color, setColor] = useState('#FFFFFF')

    const mudarCor = (corSelecionada) => {
        setColor(corSelecionada)
    }

    return (
        <SeuProjetoEstilo>
            <h2 className="titulos">SEU PROJETO</h2>
            <form className="formulario">
                <input type="text" placeholder="Nome do seu projeto" className="inputs"></input>
                <input type="text" placeholder="Descrição do seu projeto" className="inputs campo_descricao"></input>
                <h3 className="titulos">PERSONALIZAÇÃO</h3>
                <select className="inputs ">
                    <option>HTML</option>
                    <option>CSS</option>
                    <option>JavaScript</option>
                </select>
                <div style={{ marginTop: '20px', backgroundColor: color, width: '100%', height: '50px' }}></div>
                <input type="submit" value="Salvar projeto" className="botao_enviar" />
            </form>
        </SeuProjetoEstilo>
    )
}

export default SeuProjeto;