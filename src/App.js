import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
    
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      
  
    </div>
  );
}

export default App;
