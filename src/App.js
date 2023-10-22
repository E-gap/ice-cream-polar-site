import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection";
import AdvantagesSection from "./components/AdvantagesSection/AdvantagesSection";
import DetailsSection from "./components/DetailsSection/DetailsSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <AdvantagesSection />
      <DetailsSection />
      <ProductsSection />
      <Carousel />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
