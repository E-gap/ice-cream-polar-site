import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import FotosSection from "./components/FotosSection/FotosSection";
import WomenSection from "./components/WomenSection/WomenSection";
import MenSection from "./components/MenSection/MenSection";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <FotosSection />
      <WomenSection />
      <MenSection />
    </div>
  );
}

export default App;
