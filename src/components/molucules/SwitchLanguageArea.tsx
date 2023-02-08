import { memo, useContext } from "react";
import LanguageSwichingTab from "../atoms/LanguageSwichingTab";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";

import { FromToContext } from "../../pages/home";

export const SwichLanguageArea = memo((props: any): JSX.Element => {
  const context = useContext(FromToContext);
  const {fromLang, setFromLang, toLang,setToLang } = context;
  return (
    <>
      <div className="w-2/12">
        <div className="flex justify-center my-5">
          <LanguageSwichingTab onChange={setFromLang}  value={fromLang}/>
          <ArrowsRightLeftIcon className="h-12 w-12 text-blue-500" />
          <LanguageSwichingTab onChange={setToLang} value={toLang} />
        </div>
      </div>
    </>
  );
});
