import { Cartao, CartaoTopo, Detalhes, InfromacoesH3, InformacoesUlLi, Habilidades, HabilidadesUl, Imagem, Infromacoes, Nome, Status, Tipo } from "../Styles";
import GengarImage from '../Images/gengar.png'

export default function Gengar() {
    return (
        <>
            <Cartao>
              <CartaoTopo>
                <Detalhes>
                  <Nome><h2>Gengar</h2></Nome>
                  <span>#005</span>
                </Detalhes>

                <Tipo><span>Fogo</span></Tipo>
                <Imagem src={GengarImage}></Imagem>
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
                      <HabilidadesUl>Carga de fogo</HabilidadesUl>
                      <HabilidadesUl>Estouro de chama</HabilidadesUl>
                </Habilidades>
              </Infromacoes>
            </Cartao>
        </>
    )
}