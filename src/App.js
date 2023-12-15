import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionTwo from "./components/SectionTwo";




function App() {
  return (
    <div className="bg-[#ebfbb3] pb-10 relative">
      <Header />
      <Hero />
      <div className="relative top-28">
         <SectionTwo />
         </div>
       </div>
  );
}

export default App;
