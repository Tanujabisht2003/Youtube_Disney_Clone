import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header.js";
import './App.css';
import Home from "./components/Home.js";
import Detail from "./components/Detail.js";

function App() {
  return (
    <div className="App">
      {/* react router allows us to do go back between any pages without any refresh  */}
      <Router>
        <Header />
        {/* A container for defining all the routes in your app */}
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
