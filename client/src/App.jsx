import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chatbot from "./Chatbot";
import Home from "./Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/chatbot/:dealer_id" element={<Chatbot />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
