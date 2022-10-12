import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppContextProvider } from "../context/AppContext";
import { AuthContextProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
