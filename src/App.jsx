import Hero from "./components/Hero";
import About from "./components/About";
import Areas from "./components/Areas";
import WhyChoose from "./components/WhyChoose";
import Partnerships from "./components/Partnerships";
import Manifesto from "./components/Manifesto";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <main className="landing-page">
      <div className="landing-container">
        <Hero />
        <About />
        <Areas />
        <WhyChoose />
        <Partnerships />
        <Manifesto />
        <Footer />
      </div>
    </main>
  );
}

export default App;