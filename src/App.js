import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection";
import AdvantagesSection from "./components/AdvantagesSection/AdvantagesSection";
import DetailsSection from "./components/DetailsSection/DetailsSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import OrderSection from "./components/OrderSection/OrderSection";
import QuestionSection from "./components/QuestionSection/QuestionSection";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <AdvantagesSection />
      <DetailsSection />
      <ProductsSection />
      <OrderSection />
      <QuestionSection />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
