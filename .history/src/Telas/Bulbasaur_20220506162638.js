import { CartaoGrama, CartaoTopo, Detalhes, InfromacoesH3, InformacoesUlLi, Habilidades, HabilidadesUl, Imagem, Infromacoes, Nome, Status, Tipo } from "../Styles";
import Bulba from '../Images/bulbasaur.png'

export default function Bulbasaur() {
    return (
        <>
            <CartaoGrama>
              <CartaoTopo>
                <Detalhes>
                  <Nome><h2>Bulbasaur</h2></Nome>
                  <span>#006</span>
                </Detalhes>

                <Tipo><span>Grama</span></Tipo>
                <Imagem src={Bulba}></Imagem>
              </CartaoTopo>

              <Infromacoes>
                <Status>
                <InfromacoesH3>Status</InfromacoesH3>
                      <InformacoesUlLi>HP: 400</InformacoesUlLi>
                      <InformacoesUlLi>Ataque: 500</InformacoesUlLi>
                      <InformacoesUlLi>Defesa: 400</InformacoesUlLi>
                      <InformacoesUlLi>Velocidade: 200</InformacoesUlLi>
                      <InformacoesUlLi>Total: 1500</InformacoesUlLi>
                </Status>

                <Habilidades>
                <InfromacoesH3>Habilidades</InfromacoesH3>
                      <HabilidadesUl>Chicote de cipó</HabilidadesUl>
                      <HabilidadesUl>Investida</HabilidadesUl>
                </Habilidades>
              </Infromacoes>
            </CartaoGrama>
        </>
    )
}