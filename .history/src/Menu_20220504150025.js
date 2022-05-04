import { ImagemNav, ListPokemon, Listagem } from "./Styles";
import CabecaPikachu from './Images/cabeca-pikachu.png'
import CabecaGyarados from './Images/cabeca-gyarados.png'
import CabecaGengar from './Images/cabeca-gengar.png'
import CabecaDragonite from './Images/cabeca-dragonite.png'
import CabecaCharmander from './Images/cabeca-charmander.png'
import CabecaBulbasaur from './Images/cabeca-bulbasaur.png'
import { Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Charmander from "./Charmander";

export default function Menu() {
    return (
        <>
            <nav>
                <Listagem>
                  <ListPokemon>
                    <ImagemNav src={CabecaPikachu}></ImagemNav>
                    <Link to="/Projetos"><span>PIKACHU</span></Link>
                  </ListPokemon>
                  <ListPokemon>
                    <ImagemNav src={CabecaGyarados}></ImagemNav>
                    <span>GYARADOS</span>
                  </ListPokemon>
                  <ListPokemon>
                    <ImagemNav src={CabecaGengar}></ImagemNav>
                    <span>GENGAR</span>
                  </ListPokemon>
                  <ListPokemon>
                    <ImagemNav src={CabecaDragonite}></ImagemNav>
                    <span>DRAGONITE</span>
                  </ListPokemon>
                  <ListPokemon>
                    <ImagemNav src={CabecaCharmander}></ImagemNav>
                    <span>CHARMANDER</span>
                  </ListPokemon>
                  <ListPokemon>
                    <ImagemNav src={CabecaBulbasaur}></ImagemNav>
                    <span>BULBASAUR</span>
                  </ListPokemon>
                </Listagem>
                
              </nav>
        </>
    )
}