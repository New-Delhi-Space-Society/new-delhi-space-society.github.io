import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "../ThemeConfig";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="content">
      <Head>
        <title>New Delhi Space Society</title>
        <meta
          property="og:title"
          content="New Delhi Space Society"
          key="title"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  );
}
