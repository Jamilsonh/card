import { Body, Cartao, CartaoTopo, Detalhes, Habilidades, HabilidadesUl, Imagem, Infromacoes, Main, Nome, Status, Tipo } from "./Styles";
import Pica from './Images/pikachu.png'

function App() {
  return (
    <>
      <Body>
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
              <h3>Status</h3>
                <ul>
                    <li>HP: 300</li>
                    <li>Ataque: 600</li>
                    <li>Defesa: 500</li>
                    <li>Velocidade: 300</li>
                    <li>Total: 1700</li>
                </ul>
              </Status>

              <Habilidades>
              <h3>Habilidades</h3>

                <HabilidadesUl>
                    <li>Choque do trovão</li>
                    <li>Cabeçada</li>
                </HabilidadesUl>
              </Habilidades>
            </Infromacoes>
          </Cartao>
        </Main>
      </Body>
    </>
  );
}

export default App;
