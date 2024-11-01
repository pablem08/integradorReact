import "./App.css";
import { Hero } from "./Components/Hero";

function App() {
  return (
    <Hero
      title="Tu universo de cómics en un solo lugar!"
      subtitle="Explora nuestro amplio catálogo!."
      backgroundImage="/public/FondoHero.jpeg"
      buttonLabel="Explore Now"
      onButtonClick={() => alert("Button clicked!")}
    />
  );
}

export default App;
