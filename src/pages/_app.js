import "@/styles/globals.css";
import "../../public/static/bootstrap.css";
import "../../public/static/site.css";
import React from "react";
import { GlobalProvider } from "@/components/GlobalState";

export const ConfigContext = React.createContext();

const configValue = {
  showSignUp: true,
  showSpeakerSpeakingDays: true,
};

export default function App({ Component, pageProps }) {
  return (
    <ConfigContext.Provider value={configValue}>
      <GlobalProvider>
        {" "}
        <Component {...pageProps} />;
      </GlobalProvider>
    </ConfigContext.Provider>
  );
}
