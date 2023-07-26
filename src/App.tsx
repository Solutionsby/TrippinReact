import "./App.css";
import { AboutSection } from "./components/aboutSection/aboutSection";
import { Header } from "./components/header/Header";
import { Navigation } from "./components/navigation/navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <AboutSection />
    </div>
  );
}

export default App;
