import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection";
import AdvantagesSection from "./components/AdvantagesSection/AdvantagesSection";
import DetailsSection from "./components/DetailsSection/DetailsSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <AdvantagesSection />
      <DetailsSection />
      <ProductsSection />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
