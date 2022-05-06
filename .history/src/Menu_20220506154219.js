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
  text-decoration: none;
  color: black;
  &.active {
    background-color: white;
  }
`

export default function Menu() {
    return (
        <>
            <nav>
                <Listagem>
                <LinkMenu to="/">
                  <ListPokemon>
                    <ImagemNav src={CabecaPikachu}></ImagemNav>
                    <span>PIKACHU</span>
                
                  </ListPokemon>
                  </LinkMenu>
                  <LinkMenu to ="/Gyarados">
                  <ListPokemon>
                    <ImagemNav src={CabecaGyarados}></ImagemNav>
                   <span>GYARADOS</span>
                  </ListPokemon>
                  </LinkMenu>
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