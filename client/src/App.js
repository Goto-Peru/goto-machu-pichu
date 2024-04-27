import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Details from "./pages/Details";

import Admin from "./pages/Admin";
import PostTuristic from "./pages/PostTuristic";
import CardAdmin from "./pages/CardAdmin";
import AllReservation from "./pages/AllReservation";
import AbouUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";



function App() {


  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />}>
            <Route index element={<PostTuristic />} />

            <Route path='publicar' element={<PostTuristic />} />
            <Route path='publicaciones' element={<CardAdmin />} />
            <Route path='reservaciones' element={<AllReservation />} />



          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={< Home />} />
          <Route path="/sobre-nosotros" element={< AbouUs />} />
          <Route path="/contactanos" element={< ContactUs />} />


          <Route path="/detalles/:turisticId" element={<Details />} />







        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
