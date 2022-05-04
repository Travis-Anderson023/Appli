import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Nav } from "./components/misc/Nav";
import { Account, Applications, Home } from "./pages";
import Auth from "./utils/auth";

export const App = () => {
  const styles = {
    wrapper: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: ["column-reverse", "column"],
      overflow: "hidden",
      justifyContent: "space-between",
    },
  };
  const [appFilter, setAppFilter] = useState("");
  const [page, setPage] = useState(1);
  const isSmOrUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  //check login
  const RequiresLogin = ({ children }) => {
    const checkLogin = Auth.loggedIn();
    return checkLogin ? (
      children
    ) : (
      <Navigate to={`${process.env.PUBLIC_URL}`} />
    );
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Box sx={styles.wrapper}>
        <Routes>
          <Route path="/" element={<Home isSmOrUp={isSmOrUp} />} />
          <Route
            path="/applications"
            appFilter={appFilter}
            isSmOrUp={isSmOrUp}
            element={
              <RequiresLogin>
                {window.location.pathname !== "/" ? (
                  <Nav
                    setAppFilter={setAppFilter}
                    isSmOrUp={isSmOrUp}
                    page={page}
                    setPage={setPage}
                  />
                ) : undefined}
                <Applications />
              </RequiresLogin>
            }
          />
          <Route
            path="/account"
            appFilter={appFilter}
            isSmOrUp={isSmOrUp}
            element={
              <RequiresLogin>
                {window.location.pathname !== "/" ? (
                  <Nav
                    setAppFilter={setAppFilter}
                    isSmOrUp={isSmOrUp}
                    page={page}
                    setPage={setPage}
                  />
                ) : undefined}
                <Account />
              </RequiresLogin>
            }
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};
