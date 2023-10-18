import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import FotosSection from "./components/FotosSection/FotosSection";
import WomenSection from "./components/WomenSection/WomenSection";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <FotosSection />
      <WomenSection />
    </div>
  );
}

export default App;
