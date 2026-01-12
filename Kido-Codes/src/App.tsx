import "./App.css"
import HeroSection from './Components/HeroSection';
import About from './Components/About';
{/*import Testimonials from "./Components/Testimonials";*/}
import Subjects from "./Components/Subjects";
function App() {
  return(
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="w-full">
        <HeroSection />
        <About />
        <Subjects />
        {/*<Testimonials />*/}
      </div>
    </div>
  )
}

export default App;
