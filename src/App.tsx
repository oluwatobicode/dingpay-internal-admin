import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EventDashboard from "./pages/EventDashboard";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/home/create-event" element={<CreateEvent />} />
        <Route path="/home/event" element={<EventDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
