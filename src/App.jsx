import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import Home from './pages/Home';
import { GlobalStyle } from "./styles";
import Carrinho from './pages/Carrinho';
import DetalhesProduto from './containers/DetalhesProduto';

function App() {
  return (
    <Router>
      <Header />
      <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/carrinho' element={<Carrinho />} />
          <Route path='/produto/:id' element={<DetalhesProduto />} />
        </Routes>
    </Router>
  );
}

export default App;
