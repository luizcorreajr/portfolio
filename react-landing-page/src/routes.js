import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';


function RoutesApp() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutesApp