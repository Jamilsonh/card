import { CartaoDragao, CartaoTopo, Detalhes, InfromacoesH3, InformacoesUlLi, Habilidades, HabilidadesUl, Imagem, Infromacoes, Nome, Status, Tipo } from "../Styles";
import DragoniteImage from '../Images/dragonite.png'

export default function Dragonite() {
    return (
        <>
            <CartaoDragao>
              <CartaoTopo>
                <Detalhes>
                  <Nome><h2>Dragonite</h2></Nome>
                  <span>#004</span>
                </Detalhes>

                <Tipo><span>Dragão</span></Tipo>
                <Imagem src={DragoniteImage}></Imagem>
              </CartaoTopo>

              <Infromacoes>
                <Status>
                <InfromacoesH3>Status</InfromacoesH3>
                      <InformacoesUlLi>HP: 400</InformacoesUlLi>
                      <InformacoesUlLi>Ataque: 500</InformacoesUlLi>
                      <InformacoesUlLi>Defesa: 350</InformacoesUlLi>
                      <InformacoesUlLi>Velocidade: 200</InformacoesUlLi>
                      <InformacoesUlLi>Total: 1450</InformacoesUlLi>
                </Status>

                <Habilidades>
                <InfromacoesH3>Habilidades</InfromacoesH3>
                      <HabilidadesUl>Rabada</HabilidadesUl>
                      <HabilidadesUl>Ataque Psiquico</HabilidadesUl>
                </Habilidades>
              </Infromacoes>
            </CartaoDragao>
        </>
    )
}