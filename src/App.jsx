import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import Home from './pages/Home';
import { Container, GlobalStyle } from "./styles";
import Carrinho from './pages/Carrinho';

function App() {
  return (
    <Router>
      <Header />
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/carrinho' element={<Carrinho />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
