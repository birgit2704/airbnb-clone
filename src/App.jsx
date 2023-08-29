import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="general-container">
      <Header />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
