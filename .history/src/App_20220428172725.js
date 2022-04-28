import { Body, Main, PokeDex } from "./Styles";
import Header from "./Header";
import Charmander from "./Charmander";
import Menu from "./Menu";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Body>
        <Main>
          <PokeDex>
            <Menu/>
            <Routes>
              <Route path="/" element={<Header/>} />
              <Route path="Home" element={<Charmander/>} />
            </Routes>
          </PokeDex>
        </Main>
      </Body>
    </>
  );
}

export default App;
