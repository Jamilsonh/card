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
            <Menu/>
          </PokeDex>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="Projetos" element={<Charmander />} />
          </Routes>
        </Main>
      </Body>
    </>
  );
}

export default App;
