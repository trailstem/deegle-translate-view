import { createContext, memo, useState } from "react";

import Footer from "../components/organisms/layout/Footer";
import Header from "../components/organisms/layout/Header";
import { TranslatedTextArea } from "../components/molucules/TranslatedTextArea";
import { SwichLanguageArea } from "../components/molucules/SwitchLanguageArea";

type ThemeContextType = any;
export const FromToContext = createContext<ThemeContextType>({});

export const home = memo(() => {
  const [fromLang, setFromLang] = useState([]);
  const [toLang, setToLang] = useState([]);

  const state = {
    fromLang,
    setFromLang,
    toLang,
    setToLang,
  };

  return (
    <>
      <div className="overflow-auto">
        <Header />

        <FromToContext.Provider
          value={state}
        >
          <div className="flex justify-center my-5">
            <SwichLanguageArea />
          </div>
          <TranslatedTextArea />
        </FromToContext.Provider>

        <Footer />
      </div>
    </>
  );
});
export default home;
