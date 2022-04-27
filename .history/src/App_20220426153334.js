import { Cartao, CartaoTopo, Detalhes, Imagem, Main, Nome, Tipo } from "./Styles";

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
            <Imagem>
              <img src="src/imagens/pikachu.png" alt="Imagem Pikachu">
            </Imagem>
          </CartaoTopo>
        </Cartao>
      </Main>
    </>
  );
}

export default App;
