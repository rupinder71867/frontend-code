import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddVenu from "./pages/AddVenu";
import Shifts from "./pages/availability/Shifts";
import OnlineInventory from "./pages/availability/OnlineInventory";
import Waitlist from "./pages/availability/Waitlist";
import AddBlock from "./pages/availability/AddBlock";
import Rooms from "./pages/floorplan/Rooms";
import AddTables from "./pages/floorplan/AddTables";
//  import Tables from "./pages/floorplan/Tables";
import Permissions from "./pages/people/Permissions";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/add-venu" element = {<AddVenu/>} />
          <Route path = "/shifts" element = {<Shifts/>} />
          <Route path = "/inventory" element = {<OnlineInventory/>} />
          <Route path = "/waitlist" element = {<Waitlist/>} />
          <Route path = "/add-block" element = {<AddBlock/>} />
          <Route path = "/rooms" element = {<Rooms/>} />
          <Route path = "/tables" element = {<AddTables/>} />
          <Route path = "/permissions" element = {<Permissions/>} />
      </Routes>
    </BrowserRouter>
  );
}

