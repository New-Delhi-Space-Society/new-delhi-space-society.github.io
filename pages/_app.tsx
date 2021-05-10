import type { AppProps } from "next/app";
import Layout from "../components/Layout";

// ? Use when implementing Theme switching (if implementing)
/* const [theme, setTheme] = useState("light");

const toggleTheme = () => {
  theme === 'light' ? setTheme("dark") : setTheme("light");
}; */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
