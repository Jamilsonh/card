import { Cartao, CartaoTopo, Detalhes, Main, Nome, Tipo } from "./Styles";

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
          </CartaoTopo>
        </Cartao>
      </Main>
    </>
  );
}

export default App;
