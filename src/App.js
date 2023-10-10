
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import NewArrivals from './pages/NewArrivals';
import BookingsForm from './pages/BookingsForm';
import Contact from './pages/Contact';
import Confirmation from './pages/Confirmation';
import AboutPage from './pages/About';
import Menu from './pages/MenuPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
          <Routes>
              <Route path="/" exact element = {<Home/>}></Route>
              <Route path="/about" element = {<AboutPage />}></Route>
              <Route path="/menu" element = {<Menu />}></Route>
              <Route path="/new" element = {<NewArrivals />}></Route>
              <Route path="/booking" element = {<BookingsForm />}></Route>
              <Route path="/contact" element = {<Contact />}></Route>
              <Route path="/Confirmation" element = {<Confirmation />}></Route>
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
