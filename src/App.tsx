import "./App.css";
import { AboutSection } from "./components/aboutSection/AboutSection";
import { Baner } from "./components/baner/Baner";
import { CarsSection } from "./components/carsSection/CarsSection";
import { FaqSection } from "./components/faqSection/faqsSection";
import { Header } from "./components/header/Header";
import { Navigation } from "./components/navigation/navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <AboutSection />
      <CarsSection />
      <Baner />
      <FaqSection />
    </div>
  );
}

export default App;
