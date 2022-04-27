import { Cartao, CartaoTopo, Detalhes, Main, Nome } from "./Styles";

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
            <span>elétrico</span>
          </CartaoTopo>
        </Cartao>
      </Main>
    </>
  );
}

export default App;
