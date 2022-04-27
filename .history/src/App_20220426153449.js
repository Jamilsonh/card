import { Cartao, CartaoTopo, Detalhes, Imagem, Main, Nome, Tipo } from "./Styles";
import Pica from './Images/pikachu.png'

function App() {
  return (
    <>
      <Main>
        <Cartao>
          <CartaoTopo>
            <Detalhes>
              <Nome>
                Pikachu
                <span>#001</span>
              </Nome>
            </Detalhes>
            <span><Tipo>elétrico</Tipo></span>
            <Imagem src={Pica}>
            </Imagem>
          </CartaoTopo>
        </Cartao>
      </Main>
    </>
  );
}

export default App;
