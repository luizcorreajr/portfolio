import './index.css';
import RoutesApp from './routes';

import Circulo from './images/circulo.png';

function App() {
  return (
    <div>
      <RoutesApp/>
      <h2>Welcome</h2>
      <img src={Circulo}/>
    </div>
  );
}

export default App;