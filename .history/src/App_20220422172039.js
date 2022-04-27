import { Card, CardTopo, Img } from "./Styles";
import Ani from './Images/Ani.png';

function App() {
  return (
    <>
      <Card>
        <CardTopo>
          <Img src={Ani} width="500px" height="400px"/>
        </CardTopo>
      </Card>
    </>
  );
}

export default App;
