import "./App.css";
import CardComponent from "./Components/Card";
import NavbarComponent from "./Components/Navbar";
import FooterComponent from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <CardComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
