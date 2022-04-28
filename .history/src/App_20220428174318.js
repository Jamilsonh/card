import { Body, Main, PokeDex } from "./Styles";
import Header from "./Header";
import Charmander from "./Charmander";
import Menu from "./Menu";
import { Routes, Link, Route} from "react-router-dom";
import styled from 'styled-components';

const Escolhas = styled.div`
  width: 200px;
  height: 100px;
`

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
        <Escolhas>
        <Routes>
          <Route path="/" element={<Charmander/>} />
          <Route path="/Charmander" element={<Charmander/>} />
        </Routes>
        <Link to ="/">Home</Link>
        <Link to ="/Charmander">Charmander</Link>
        </Escolhas>
      </Body>
    </>
  );
}

export default App;
