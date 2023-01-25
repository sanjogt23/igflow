import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";

import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
