import { Routes, Route } from "react-router-dom";
import Meme from "./components/Meme";
import MemeGenerated from "./MemeGenerated";

const App = () => {
  return (
    <>
    <h1 className="text-4xl text-bold text-blue-600 bg-gray-900 text-center p-[2vh]">Meme Creator</h1>
    <Routes>
      <Route path="/" exact element={<Meme />} />
      <Route path="/generated" element={<MemeGenerated />} />
    </Routes>
    </>
  );
};

export default App;
