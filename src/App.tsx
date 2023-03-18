import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import styled from "styled-components";

export default function App() {
  const MainContainer = styled.main`
    height: 1000px;
  `;

  return (
    <>
      <NavBar />
      <MainContainer>
        
      </MainContainer>
    </>
  );
}
