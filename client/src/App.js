
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <route path="/" element={<Books />} />
          <route path="/add" element={<Add />} />
          <route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
