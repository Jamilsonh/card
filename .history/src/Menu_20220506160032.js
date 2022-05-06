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
  &.active {
    background-color: white;
  }
`

const Fundo = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    background-color: #6B727A;
    color: #FFFFFF;
    padding: 0 5px;
    cursor: pointer;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    min-height: 70px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.15s ease-in-out;
    &.active{
      background-color: red;
    }
`

export default function Menu() {
    return (
        <>
            <nav>
                <Listagem>
                
                <Fundo to="/">
                    <ImagemNav src={CabecaPikachu}></ImagemNav>
                    <LinkMenu to="/"><span>PIKACHU</span></LinkMenu>
                </Fundo>
                  
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