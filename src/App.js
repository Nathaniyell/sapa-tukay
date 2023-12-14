import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionTwo from "./components/SectionTwo";




function App() {
  return (
    <div className="bg-[#ebfbb3] pb-10">
      <Header />
      <Hero />
      <div className="relative -top-64 md:-top-0">
      <SectionTwo />
      </div>
    </div>
  );
}

export default App;
