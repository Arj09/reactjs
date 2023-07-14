import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import TopNav from './components/TopNav';
import Products from './pages/Products';
import Cart from './pages/Cart';


function App() {

  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route exact path='/' element={< Products/>}></Route>
        <Route exact path='/cart' element={< Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
