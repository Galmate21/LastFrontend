import './App.css';
import Navbarcomps from './Components/Navbarcomp';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Errorpage from './Components/Errorpage';
import Szerkesztes from './Components/Szerkesztes';
import Uj from './Components/Uj';
import Single from './Components/Single';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbarcomps />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/szerkesztes/:termekId" element={<Szerkesztes/>}></Route>
          <Route path="/uj" element={<Uj/>}></Route>
          <Route path="*" element={<Errorpage/>} />
          <Route path="/single/:termekId" element={<Single/>}></Route>
        </Routes>
      </div>

      
    </BrowserRouter>
  );
}

export default App;
