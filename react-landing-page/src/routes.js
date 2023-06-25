import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';

function RoutesApp() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          {/* <Route path="/" element={}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutesApp