import { styled } from "styled-components";
import MenuBar from "../../components/menuBar";
import SeuProjeto from "../../components/seuProjeto";
import EditorCodigo from "../../components/editorCodigo";

const Corpo = styled.section`
    display: grid;
    grid-template-rows: 100%;

    .item-1 {
        width: 100%;
        height: 50px;
        background: red;
    }
    
    
    .item-2 {
        width: 100%;
        height: 50px;
        background: blue;
    }

    @media screen and (min-width: 768px) {


    }

    @media screen and (min-width: 1440px) {
        display: grid;
        grid-template-columns: 20% auto 20%;
    
        .item-1 {
            width: 100%;
            height: 50px;
            background: red;
        }
        
        
        .item-2 {
            width: 100%;
            height: 50px;
            background: blue;
        }
        
    }


`

function PaginaInicial() {
    return (
        <Corpo>
            <MenuBar/>
            <EditorCodigo />
            <SeuProjeto />
            <div className="item-2"></div>
        </Corpo>
    )
}

export default PaginaInicial;