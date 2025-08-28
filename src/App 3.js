import StarMoon from "./components/0827/StarMoon";
import CompleteTest from "./components/0827/CompleteTest";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CompleteTest />} />
      <Route path="/cc" element={<StarMoon />} />
    </Routes>
  );
}

export default App;
