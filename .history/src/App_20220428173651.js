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
        </Main>
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/Charmander" element={<Charmander/>} />
        </Routes>
        <Link to ="/">Home</Link>
        <Link to ="/Charmander">Charmander</Link>
      </Body>
    </>
  );
}

export default App;
