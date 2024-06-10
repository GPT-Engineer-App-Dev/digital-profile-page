import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ConfettiPage from "./pages/ConfettiPage.jsx";
import Navbar from "./components/Navbar.jsx";
import KanbanBoard from "./pages/KanbanBoard.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/confetti" element={<ConfettiPage />} />
      <Route path="/kanban" element={<KanbanBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
