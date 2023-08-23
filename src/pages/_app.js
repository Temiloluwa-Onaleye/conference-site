import "@/styles/globals.css";
import "../../public/static/bootstrap.css";
import "../../public/static/site.css";
import React from "react";

export const ConfigContext = React.createContext();

const configValue = {
  showSignUp: false,
  showSpeakerSpeakingDays: true,
};

export default function App({ Component, pageProps }) {
  return (
    <ConfigContext.Provider value={configValue}>
      <Component {...pageProps} />;
    </ConfigContext.Provider>
  );
}
