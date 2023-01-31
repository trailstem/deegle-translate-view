import { memo } from "react";

import Footer from "../components/organisms/layout/Footer";
import Header from "../components/organisms/layout/Header";
import { TranslatedTextArea } from "../components/molucules/TranslatedTextArea";
import { SwichLanguageArea } from "../components/molucules/SwitchLanguageArea";
import { DefaultDialg } from "../components/atoms/DefaultDialog";

export const Home = memo(() => {
  return (
    <>
      <div className="overflow-auto">
        <Header />
        <div className="flex justify-center my-5">
          <SwichLanguageArea />
        </div>
        <TranslatedTextArea />

        <div className="flex justify-center my-5">
          <DefaultDialg />
        </div>
        <Footer />
      </div>
    </>
  );
});
export default Home;
