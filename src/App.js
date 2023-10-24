import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection";
import AdvantagesSection from "./components/AdvantagesSection/AdvantagesSection";
import ProductSection from "./components/ProductSection/ProductSection";
import PricingSection from "./components/PricingSection/PricingSection";
import OrderSection from "./components/OrderSection/OrderSection";
import ContactSection from "./components/ContactSection/ContactSection";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <AdvantagesSection />
      <ProductSection />
      <PricingSection />
      <OrderSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
