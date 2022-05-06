import { ImagemNav, ListPokemon, Listagem } from "./Styles";
import CabecaPikachu from './Images/cabeca-pikachu.png'
import CabecaGyarados from './Images/cabeca-gyarados.png'
import CabecaGengar from './Images/cabeca-gengar.png'
import CabecaDragonite from './Images/cabeca-dragonite.png'
import CabecaCharmander from './Images/cabeca-charmander.png'
import CabecaBulbasaur from './Images/cabeca-bulbasaur.png'
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Charmander from "./Telas/Charmander";

const LinkMenu = styled(Link)`
  text-decoration: none;
  color: black;
`

export default function Menu() {
    return (
        <>
            <nav>
                <Listagem>
                  <ListPokemon>
                    <ImagemNav src={CabecaPikachu}></ImagemNav>
                    <LinkMenu to="/"><span>PIKACHU</span></LinkMenu>
                  </ListPokemon>
                  <ListPokemon>
                    <ImagemNav src={CabecaGyarados}></ImagemNav>
                    <LinkMenu to ="/Gyarados"><span>GYARADOS</span></LinkMenu>
                  </ListPokemon>
                  <ListPokemon>
                    <ImagemNav src={CabecaGengar}></ImagemNav>
                    <LinkMenu to ="/Gengar"><span>GENGAR</span></LinkMenu>
                  </ListPokemon>
                  <ListPokemon>
                    <ImagemNav src={CabecaDragonite}></ImagemNav>
                    <LinkMenu to ="/Dragonite"><span>Dragonite</span></LinkMenu>
                  </ListPokemon>
                  <ListPokemon>
                    <ImagemNav src={CabecaCharmander}></ImagemNav>
                    <LinkMenu to ="/Charmander"><span>Charmander</span></LinkMenu>
                  </ListPokemon>
                  <ListPokemon>
                    <ImagemNav src={CabecaBulbasaur}></ImagemNav>
                    <LinkMenu to ="/Bulbasaur"><span>Bulbsaur</span></LinkMenu>
                  </ListPokemon>
                </Listagem>
                
              </nav>
        </>
    )
}