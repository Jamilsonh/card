import { CartaoFogo, CartaoTopo, Detalhes, InfromacoesH3, InformacoesUlLi, Habilidades, HabilidadesUl, Imagem, Infromacoes, Nome, Status, Tipo } from "../Styles";
import Charmand from '../Images/charmander.png'

export default function Charmander() {
    return (
        <>
            <CartaoFogo>
              <CartaoTopo>
                <Detalhes>
                  <Nome><h2>Charmander</h2></Nome>
                  <span>#003</span>
                </Detalhes>

                <Tipo><span>Fogo</span></Tipo>
                <Imagem src={Charmand}></Imagem>
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
            </CartaoFogo>
        </>
    )
}