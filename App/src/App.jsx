import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Whislist from "./Whislist";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/whislist" element={<Whislist/>}/>
        </Routes>
      </BrowserRouter>
     
    </>
  );
};

export default App;
