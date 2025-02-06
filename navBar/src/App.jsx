import Navbar from "./components/navbar/Navbar";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <main className="w-full flex flex-col bg-neutral-50 min-h-screen">
          {/* NavBar */}
          <Navbar/>
          {/* Routing */}
          {/* Routes
          <Route path="/" element={<div>Home</div>} */}
          {/* Routes */}

          {/* Footer */}
        </main>
      </Router>
    </>
  );
};

export default App;
