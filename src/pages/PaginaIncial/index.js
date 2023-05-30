import { styled } from "styled-components";
import MenuBar from "../../components/menuBar";

const Corpo = styled.section`
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

`

function PaginaInicial() {
    return (
        <Corpo>
            <MenuBar/>
            <div className="item-2"></div>
        </Corpo>
    )
}

export default PaginaInicial;