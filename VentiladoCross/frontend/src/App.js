import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Nav/>
 <Routes>
  <Route path='/' element={<LoginPage />} />
 </Routes>
 <Footer/>
 </BrowserRouter>
    </div>

  );
}

export default App;
