import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Details from './RadishDetails';
import BeetDetails from './BeetDetails';
import RadishDetails from './RadishDetails';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/beets" element={<BeetDetails />} />
        <Route path="/details/radishes" element={<RadishDetails />} />
     </Routes>
    </div>
  )
}

export default App;
