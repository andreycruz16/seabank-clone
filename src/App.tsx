import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import styled from "styled-components";

export default function App() {
  const MainContainer = styled.main`
    height: 1000px;
  `;

  return (
    <div className="App">
      <NavBar />
      <MainContainer />
    </div>
  );
}
