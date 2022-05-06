import { Cartao, CartaoTopo, Detalhes, InfromacoesH3, InformacoesUlLi, Habilidades, HabilidadesUl, Imagem, Infromacoes, Nome, Status, Tipo } from "../Styles";
import PikachuImage from '../Images/pikachu.png'

export default function Pikachu() {
    return (
        <>
            <Cartao>
              <CartaoTopo>
                <Detalhes>
                  <Nome><h2>Pikachu</h2></Nome>
                  <span>#001</span>
                </Detalhes>

                <Tipo><span>Elétrico</span></Tipo>
                <Imagem src={PikachuImage}></Imagem>
              </CartaoTopo>

              <Infromacoes>
                <Status>
                <InfromacoesH3>Status</InfromacoesH3>
                      <InformacoesUlLi>HP: 300</InformacoesUlLi>
                      <InformacoesUlLi>Ataque: 600</InformacoesUlLi>
                      <InformacoesUlLi>Defesa: 500</InformacoesUlLi>
                      <InformacoesUlLi>Velocidade: 300</InformacoesUlLi>
                      <InformacoesUlLi>Total: 1700</InformacoesUlLi>
                </Status>

                <Habilidades>
                <InfromacoesH3>Habilidades</InfromacoesH3>
                      <HabilidadesUl>Choque do trovão</HabilidadesUl>
                      <HabilidadesUl>Investida</HabilidadesUl>
                </Habilidades>
              </Infromacoes>
            </Cartao>
        </>
    )
}