import { Body, Main, PokeDex } from "./Styles";
import Header from "./Header";
import Menu from "./Menu";

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
      </Body>
    </>
  );
}

export default App;
