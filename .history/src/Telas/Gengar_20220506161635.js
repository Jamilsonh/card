import { Cartao, CartaoTrevas, CartaoTopo, Detalhes, InfromacoesH3, InformacoesUlLi, Habilidades, HabilidadesUl, Imagem, Infromacoes, Nome, Status, Tipo } from "../Styles";
import GengarImage from '../Images/gengar.png'

export default function Gengar() {
    return (
        <>
            <CartaoTrevas>
              <CartaoTopo>
                <Detalhes>
                  <Nome><h2>Gengar</h2></Nome>
                  <span>#003</span>
                </Detalhes>

                <Tipo><span>Trevas</span></Tipo>
                <Imagem src={GengarImage}></Imagem>
              </CartaoTopo>

              <Infromacoes>
                <Status>
                <InfromacoesH3>Status</InfromacoesH3>
                      <InformacoesUlLi>HP: 200</InformacoesUlLi>
                      <InformacoesUlLi>Ataque: 400</InformacoesUlLi>
                      <InformacoesUlLi>Defesa: 400</InformacoesUlLi>
                      <InformacoesUlLi>Velocidade: 400</InformacoesUlLi>
                      <InformacoesUlLi>Total: 1400</InformacoesUlLi>
                </Status>

                <Habilidades>
                <InfromacoesH3>Habilidades</InfromacoesH3>
                      <HabilidadesUl>Terror</HabilidadesUl>
                      <HabilidadesUl>Patada</HabilidadesUl>
                </Habilidades>
              </Infromacoes>
            </CartaoTrevas>
        </>
    )
}