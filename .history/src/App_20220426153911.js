import { Cartao, CartaoTopo, Detalhes, Imagem, Infromacoes, Main, Nome, Status, Tipo } from "./Styles";
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

          <Infromacoes>
            <Status>
              
            </Status>
          </Infromacoes>
        </Cartao>
      </Main>
    </>
  );
}

export default App;
