import { Body, Main, PokeDex } from "./Styles";
import Header from "./Header";
import Charmander from "./Charmander";
import Menu from "./Menu";
import { Routes, Link, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Body>
        <Main>
          <PokeDex>
            <Header/>
            <Routes>
            <Route path="/" element={<Header />} />
            <Route path="Projetos" element={<Charmander />} />
            </Routes>
            <Menu/>
          </PokeDex>
        </Main>
      </Body>
    </>
  );
}

export default App;
