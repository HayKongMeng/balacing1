import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./pages/Example";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
