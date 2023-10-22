import Header from "./components/Header";
import Slogan from "./components/Slogan";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Slogan />
        <About />
        <Gallery />
        <Map />
      </main>
      <Footer />
    </>
  );
}

export default App;
