import NavBar from "./components/Navigation/NavBar";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import SavingsAccount from "./components/SavingsAccount/SavingsAccount";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <SavingsAccount />
    </div>
  );
}
