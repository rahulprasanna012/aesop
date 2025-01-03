import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Home from "./pages/Home"; // Example page component
// import About from "./pages/About"; // Example page component

const App = () => {
  return (
    <div>
  
      <Navbar />
      
      
      
      <Routes>
        {<Route path="/" element={<Home />} />
        }
      </Routes>
    </div>
  );
};

export default App;
