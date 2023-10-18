import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import FotosSection from "./components/FotosSection/FotosSection";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <FotosSection />
    </div>
  );
}

export default App;
