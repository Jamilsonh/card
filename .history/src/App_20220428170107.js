import { Body, ImagemNav, ListPokemon, Listagem, Main, PokeDex } from "./Styles";
import CabecaPikachu from './Images/cabeca-pikachu.png'
import CabecaGyarados from './Images/cabeca-gyarados.png'
import CabecaGengar from './Images/cabeca-gengar.png'
import CabecaDragonite from './Images/cabeca-dragonite.png'
import CabecaCharmander from './Images/cabeca-charmander.png'
import CabecaBulbasaur from './Images/cabeca-bulbasaur.png'
import Header from "./Header";

function App() {
  return (
    <>
      <Body>
        <Main>
          <PokeDex>
            <Header/>
              <nav>
                <Listagem>
                  <ListPokemon>
                    <ImagemNav src={CabecaPikachu}></ImagemNav>
                    <span>PIKACHU</span>
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
          </PokeDex>
        </Main>
      </Body>
    </>
  );
}

export default App;
