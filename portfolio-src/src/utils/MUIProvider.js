//react imports
import React, { useState, useMemo, createContext, useEffect } from "react";

//MUI Imports
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const MUIProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");

  useEffect(() => {
    if (localStorage.getItem("mode")) {
      setMode(localStorage.getItem("mode"));
    } else {
      localStorage.setItem("mode", mode);
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          localStorage.setItem("mode", prevMode === "light" ? "dark" : "light");
          return prevMode === "light" ? "dark" : "light";
        });
      },
    }),
    []
  );

  const theme = createTheme({
    typography: {
      fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#7043db",
              light: "#c2aff0",
              dark: "#6f2da8",
              contrastText: "#fff",
            },
          }
        : {
            primary: {
              main: "rgba(255, 255, 255, 0.08)",
            },
          }),
    },
  });

  return (
    <ColorModeContext.Provider value={{ colorMode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default MUIProvider;

export { ColorModeContext };
