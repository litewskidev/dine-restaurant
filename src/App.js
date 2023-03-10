import Booking from "./components/Booking/Booking";
import Home from "./components/Home/Home";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </main>
  );
};

export default App;
