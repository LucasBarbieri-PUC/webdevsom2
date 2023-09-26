import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Cadastro from './pages/cadastro';
import Login from './pages/login/login';

function App() {
  return
    <Home />
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path='/' element={<Login/>} />
  //       <Route path='/cadastro' element={<Cadastro/>} />
  //       <Route path='/login' element={<Home/>} />
  //     </Routes>
  //   </Router>
  // );
}

export default App;
