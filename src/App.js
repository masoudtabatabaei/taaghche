import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Layout , LeafContext} from './pages/Layout';
import LeafHistory from './LeafHistory/LeafHistory';
import Cards from './Cards/Cards';
import CardDetail from "./CardDetail/CardDetail";
import './App.css';

function App() {
  return (
    <myLeafContext>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="history" element={<LeafHistory/>} />
              <Route path="card" element={<Cards/>} />
              <Route path="/card/:id" element={<CardDetail/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </myLeafContext>
  );
}

export default App;