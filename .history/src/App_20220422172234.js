import { Card, CardTopo, Img } from "./Styles";
import Ani from './Images/Ani.png';

function App() {
  return (
    <>
      <Card>
        <CardTopo>
          <h1>Olá</h1>
          <Img src={Ani} width="500px"/>
          <h1>Olá</h1>
        </CardTopo>
      </Card>
    </>
  );
}

export default App;
