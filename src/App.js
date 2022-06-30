import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Program from './Components/Program';
import Registration from './Components/Regeitration';
import Gallery from './Components/Gallery';
import About from './Components/About';
import Error404 from './Components/Error404';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/program' element={<Program />}></Route>
        <Route exact path='/registration' element={<Registration />}></Route>
        <Route exact path='/gallery' element={<Gallery />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
