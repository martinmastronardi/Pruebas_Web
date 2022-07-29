  import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import ServiciosPage from './pages/ServiciosPage';
import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';

function App() {
  return (
    
    <div className="App">
      <Header />
      <BrowserRouter> 
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/servicios' element={<ServiciosPage />} />
        <Route path='/contacto' element={<ContactoPage />} />
        <Route path='/nosotros' element={<NosotrosPage />} />
      </Routes>
      </BrowserRouter>
      
        <Footer />
      
    </div>

   
    
  );
}


export default App;
