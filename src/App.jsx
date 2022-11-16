import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodosList from "./containers/TodosList/TodosList";
function App() {
  const api_key = process.env.REACT_APP_API_KEY;

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route excat path="/" element={<Home api_key={api_key} />} />
          <Route excat path="/todos" element={<TodosList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
