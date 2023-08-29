import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Hero from "./components/Hero";
import experiences from "./data";

function App() {
  const cards = experiences.map((exp) => <Card key={exp.id} {...exp} />);

  return (
    <div className="general-container">
      <Header />
      <Hero />
      <section className="cards-container">{cards}</section>
    </div>
  );
}

export default App;
