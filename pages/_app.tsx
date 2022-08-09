import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto">
      <Component {...pageProps} />
    </div>
  );
}

export default App;
