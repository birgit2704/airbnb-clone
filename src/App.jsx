import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Hero from "./components/Hero";
import experiences from "./data";

function App() {
  const cards = experiences.map((exp) => (
    <Card
      img={exp.coverImg}
      rating={exp.stats.rating}
      reviewCount={exp.stats.reviewCount}
      location={exp.location}
      title={exp.title}
      price={exp.price}
    />
  ));

  return (
    <div className="general-container">
      <Header />
      <Hero />
      {cards}
    </div>
  );
}

export default App;
