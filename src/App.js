import React from "react";
import background from "assets/images/background-stars.svg";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import Nav from "components/Nav/Nav";
import PlanetDetail from "components/PlanetDetail/PlanetDetail";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          <Background>
            <Nav />
            <Routes>
              <Route path="planets/:id" element={<PlanetDetail />} />
            </Routes>
          </Background>
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #070724;
  position: relative;
`;
export const Background = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-image: url(${background});
`;
export default App;
