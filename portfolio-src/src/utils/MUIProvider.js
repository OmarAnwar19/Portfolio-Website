//react imports
import React, { useState, useMemo, createContext } from "react";

//MUI Imports
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const MUIProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#fcba03",
      },
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Paper>{children}</Paper>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default MUIProvider;

export { ColorModeContext };
