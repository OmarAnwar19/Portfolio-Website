//react imports
import { Box } from "@mui/material";
import React from "react";

//component imports
import Layout from "../src/components/layout/Layout";
import MUIProvider from "../src/utils/MUIProvider";

//style imports
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MUIProvider>
  );
}
