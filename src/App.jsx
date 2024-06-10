import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ConfettiPage from "./pages/ConfettiPage.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/confetti" element={<ConfettiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
