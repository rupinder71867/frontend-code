import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import Menu from './pages/menu/Menu';
import Login from './pages/Login';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('uname');
  return (isAuthenticated === 'superadmin@gmail.com') ? children : <Navigate to="/" replace />;
};
const PublicRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('uname');
  console.log(isAuthenticated);
  return (isAuthenticated != null && isAuthenticated === 'superadmin@gmail.com') ? <Navigate to="/home" replace /> : children;
};


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/add-venu" element={<ProtectedRoute><Header /><AddVenu /><Footer /></ProtectedRoute>} />
          <Route path="/avaliability" element={<ProtectedRoute><Header /><Availability /><Footer /></ProtectedRoute>} />
          <Route path="/general" element={<ProtectedRoute><Header /><General /><Footer /></ProtectedRoute>} />
          <Route path="/rooms" element={<ProtectedRoute><Header /><Rooms /><Footer /></ProtectedRoute>} />
          <Route path="/marketing" element={<ProtectedRoute><Header /><MarketingAutomation /><Footer /></ProtectedRoute>} />
          <Route path="/people" element={<ProtectedRoute><Header /><People /><Footer /></ProtectedRoute>} />
          <Route path="/guest" element={<ProtectedRoute><Header /><GuestList /><Footer /></ProtectedRoute>} />
          <Route path="/report" element={<ProtectedRoute><Header /><Report /><Footer /></ProtectedRoute>} />
          <Route path="/integration" element={<ProtectedRoute><Header /><Integration /><Footer /></ProtectedRoute>} />
          <Route path="/payment" element={<ProtectedRoute><Header /><Payment /><Footer /></ProtectedRoute>} />
          <Route path="/menu" element={<ProtectedRoute><Header /><Menu /><Footer /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Header /><Home /><Footer /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

