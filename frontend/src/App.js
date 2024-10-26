
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './general_component/Header/Header';
import Footer from './general_component/Footer/Footer';
import Container from './general_component/Container/Container';
import {Home} from './general_component/pages/Home/Home';
import About from './general_component/pages/About/About';
import Shop from './general_component/pages/Shop/Shope';
import Blog from './general_component/pages/Blog/Blog';
import Contact from './general_component/pages/Contact/Contact';

function App() {
  return (
    <>
    
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Shop" element={<Shop/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
     </>
  );
}

export default App;
