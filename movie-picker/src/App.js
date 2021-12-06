import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Catalog from './components/Catalog';
import PickMovie from './components/PickMovie';
import AddMovie from './components/AddMovie';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element= {<Catalog/>}></Route>
          <Route path="/movie" element={<PickMovie/>}></Route>
          <Route path="/add" element={<AddMovie/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
