import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddVenu from "./pages/general/AddVenu";
import General from "./pages/general/General"
import Header from "./Header";
import Footer from "./Footer";
import MarketingAutomation from "./pages/marketing/MarketingAutomation";
import Availability from "./pages/availability/Availability";
import Rooms from "./pages/floorplan/Rooms"
import People from "./pages/people/People";
import GuestList from "./pages/guest/GuestList";
import Report from './pages/report/Report';
import Integration from './pages/Integraion/Integration';
import Payment from './pages/payment/payment';


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
          <Route path="/people" element={<People />} />
          <Route path="/guest" element={<GuestList />} />
          <Route path="/report" element={<Report />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>

  );
}

