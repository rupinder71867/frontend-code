import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddVenu from "./pages/general/AddVenu";
import General from "./pages/general/General"
import Header from "./Header";
import Footer from "./Footer";
import MarketingAutomation from "./pages/marketing/MarketingAutomation";
import Availability from "./pages/availability/Availability";
import Rooms from "./pages/floorplan/Rooms"


export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-venu" element={<AddVenu />} />
          <Route path="/avaliability" element={<Availability />} />
          <Route path="/general" element={<General />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/marketing" element={<MarketingAutomation />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>

  );
}

