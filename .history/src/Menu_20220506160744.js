import { ImagemNav, ListPokemon, Listagem } from "./Styles";
import CabecaPikachu from './Images/cabeca-pikachu.png'
import CabecaGyarados from './Images/cabeca-gyarados.png'
import CabecaGengar from './Images/cabeca-gengar.png'
import CabecaDragonite from './Images/cabeca-dragonite.png'
import CabecaCharmander from './Images/cabeca-charmander.png'
import CabecaBulbasaur from './Images/cabeca-bulbasaur.png'
import { Link, Route, Routes, NavLink } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Charmander from "./Telas/Charmander";

const LinkMenu = styled(NavLink)`
  width: 200px;
  text-decoration: none;
  color: black;
  padding-left: 10px;
`
export default function Menu() {
    return (
        <>
            <nav>
                <Listagem>
                
                <ListPokemon to="/">
                    <ImagemNav src={CabecaPikachu}></ImagemNav>
                    <LinkMenu to="/"><span>PIKACHU</span></LinkMenu>
                </ListPokemon>
                  
                  <ListPokemon to="/Gyarados">
                    <ImagemNav src={CabecaGyarados}></ImagemNav>
                    <LinkMenu to ="/Gyarados"><span>GYARADOS</span></LinkMenu>
                  </ListPokemon>
                  
                  <ListPokemon to ="/Gengar">
                    <ImagemNav src={CabecaGengar}></ImagemNav>
                    <LinkMenu to ="/Gengar"><span>GENGAR</span></LinkMenu>
                  </ListPokemon>

                  <ListPokemon to ="/Dragonite">
                    <ImagemNav src={CabecaDragonite}></ImagemNav>
                    <LinkMenu to ="/Dragonite"><span>DRAGONITE</span></LinkMenu>
                  </ListPokemon>

                  <ListPokemon to ="/Charmander">
                    <ImagemNav src={CabecaCharmander}></ImagemNav>
                    <LinkMenu to ="/Charmander"><span>CHARMADER</span></LinkMenu>
                  </ListPokemon>

                  <ListPokemon to ="/Bulbasaur">
                    <ImagemNav src={CabecaBulbasaur}></ImagemNav>
                    <LinkMenu to ="/Bulbasaur"><span>BULBASAUR</span></LinkMenu>
                  </ListPokemon>

                </Listagem>
                
              </nav>
        </>
    )
}