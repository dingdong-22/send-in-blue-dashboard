import "./App.css";
import MainSection from "./components/MainSection";
import HorizontalNavbar from "./components/HorizontalNavbar";
import VerticalNavBar from "./components/VerticalNavbar";

function App() {
  return (
    <div className="App">
      <HorizontalNavbar />
      <div className="remaining_container">
        <VerticalNavBar />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
