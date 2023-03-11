import './App.css';
//import Accueil from './page/accueil/accueil';
import {
  BrowserRouter as Router,
  Route,
  Routes
  //Link
} from "react-router-dom";

import './style/style.scss';
import Accueil from './page/accueil/accueil';
import Contact from './page/accueil/contact';
import Portfolio from './page/accueil/portfolio';
import Login from './page/auth/login';
import Register from './page/auth/register';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login/>}> </Route>
          <Route path="/login" element={<Login/>}> </Route>
          <Route path="/accueil" element={<Accueil/>}> </Route>
          <Route path="/contact" element={<Contact/>}> </Route>
          <Route path="/portfolio" element={<Portfolio/>}> </Route>
          <Route path="/register" element={<Register/>}> </Route>
        </Routes>
    </Router>
  );
}



