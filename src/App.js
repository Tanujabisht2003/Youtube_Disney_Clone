import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header.js";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* react router allows us to do go back between any pages without any refresh  */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
