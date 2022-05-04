import { ImagemNav, ListPokemon, Listagem } from "./Styles";
import CabecaPikachu from './Images/cabeca-pikachu.png'
import CabecaGyarados from './Images/cabeca-gyarados.png'
import CabecaGengar from './Images/cabeca-gengar.png'
import CabecaDragonite from './Images/cabeca-dragonite.png'
import CabecaCharmander from './Images/cabeca-charmander.png'
import CabecaBulbasaur from './Images/cabeca-bulbasaur.png'
import { Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Charmander from "./Telas/Charmander";

export default function Menu() {
    return (
        <>
            <nav>
                <Listagem>
                  <ListPokemon>
                    <ImagemNav src={CabecaPikachu}></ImagemNav>
                    <Link to="/Pikachu"><span>PIKACHU</span></Link>
                  </ListPokemon>
                  <ListPokemon>
                    <ImagemNav src={CabecaGyarados}></ImagemNav>
                    <Link to ="/Gyarados"><span>GYARADOS</span></Link>
                  </ListPokemon>
                  <ListPokemon>
                    <ImagemNav src={CabecaGengar}></ImagemNav>
                    <Link to ="/Gengar"><span>GENGAR</span></Link>
                  </ListPokemon>
                  <ListPokemon>
                    <ImagemNav src={CabecaDragonite}></ImagemNav>
                    <Link to ="/Dragonite"><span>Dragonite</span></Link>
                  </ListPokemon>
                  <ListPokemon>
                    <ImagemNav src={CabecaCharmander}></ImagemNav>
                    <Link to ="/Charmander"><span>Charmander</span></Link>
                  </ListPokemon>
                  <ListPokemon>
                    <ImagemNav src={CabecaBulbasaur}></ImagemNav>
                    <Link to ="/Bulbasaur"><span>Bulbsaur</span></Link>
                  </ListPokemon>
                </Listagem>
                
              </nav>
        </>
    )
}