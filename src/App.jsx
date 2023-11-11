import AnimatedGifSection from "./components/AnimatedGifSection";
import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <main className="overflow-x-hidden overflow-y-hidden">
        <NavBar />
        <Jumbotron />
        <AnimatedGifSection />
      </main>
    </>
  );
}

export default App;
