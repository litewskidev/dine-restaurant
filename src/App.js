import Booking from "./components/Booking/Booking";
import Home from "./components/Home/Home";
import { Routes, Route } from 'react-router-dom';
import Container from "./components/Container/Container";

const App = () => {
  return (
    <main>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
