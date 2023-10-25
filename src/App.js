import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero";
import Intro from "./Components/Intro/Intro";
import Feature from "./Components/Feature/Feature";
import Gallery from "./Components/Gallery/Gallery";
import Team from "./Components/Team/Team";
import HappyClient from "./Components/HappyClient/HappyClient";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Intro />
      <Feature />
      <Gallery />
      <HappyClient />
      <Team />
    </div>
  );
}

export default App;
