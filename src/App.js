import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Today from "./components/Today";
import Records from "./components/Records";
import Habits from "./components/Habits";

import styled from "styled-components";
import { useState } from "react";

import { LoginContext } from "./contexts/LoginContext";

function App() {

  const [loginReceveidInfo, setLoginReceivedInfo] = useState({})

  return (
    <StyledApp>
      <LoginContext.Provider
        value={{loginReceveidInfo,setLoginReceivedInfo}}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Login />}
            />
            <Route
              path="/cadastro"
              element={<Register />}
            />
            <Route
              path="/hoje"
              element={<Today />}
            />
            <Route
              path="/habitos"
              element={<Habits />}
            />
            <Route
              path="/historicos"
              element={<Records />}
            />
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.main`
`
