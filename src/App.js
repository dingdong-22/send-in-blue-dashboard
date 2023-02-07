import "./App.css";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import VerticalNavBar from "./components/VerticalNavbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="remaining_container">
        <VerticalNavBar />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
