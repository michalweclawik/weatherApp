import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import TodosList from "./containers/TodosList/TodosList";
function App() {
  const api_key = process.env.REACT_APP_API_KEY;

  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route
            excat
            path="/weatherApp/"
            element={<Home api_key={api_key} />}
          />
          <Route excat path="/todos" element={<TodosList />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
