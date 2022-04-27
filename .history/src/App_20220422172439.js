import { Card, CardTopo, Img } from "./Styles";
import Ani from './Images/Ani.png';

function App() {
  return (
    <>
      <Card>
        <CardTopo>
          <h1>Olá</h1>
          <h1>Olá</h1>
          <CardTopo>
          <Img src={Ani} width="500px"/>
          </CardTopo>
          
        </CardTopo>
      </Card>
    </>
  );
}

export default App;
