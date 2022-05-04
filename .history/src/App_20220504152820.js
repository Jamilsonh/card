import { Body, Main, PokeDex } from "./Styles";
import Header from "./Header";
import Charmander from "./Telas/Charmander";
import Menu from "./Menu";
import { Routes, Link, Route} from "react-router-dom";
import Bulbasaur from "./Telas/Bulbasaur";

function App() {
  return (
    <>
      <Body>
        <Main>
          <PokeDex>
            <Routes>
            <Route path="/" element={<Header />} />
            <Route path="Charmander" element={<Charmander />} />
            <Route path="Bulbasaur" element={<Bulbasaur />} />
            </Routes>
            <Menu/>
          </PokeDex>
        </Main>
      </Body>
    </>
  );
}

export default App;
