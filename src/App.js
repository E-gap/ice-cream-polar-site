import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import FotosSection from "./components/FotosSection/FotosSection";
import WomenSection from "./components/WomenSection/WomenSection";
import MenSection from "./components/MenSection/MenSection";
import StylesSection from "./components/StylesSection/StylesSection";
import CollectionSection from "./components/CollectionSection/CollectionSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <FotosSection />
      <WomenSection />
      <MenSection />
      <StylesSection />
      <CollectionSection />
      <Footer />
    </div>
  );
}

export default App;
