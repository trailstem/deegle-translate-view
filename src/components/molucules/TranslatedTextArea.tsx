import React, { useCallback, useContext, useRef } from "react";
import { useState } from "react";
import DeepLAPI, { dConversionType } from "../../hooks/useDeepLAPI";
import GoogleAPI, { gConversionType } from "../../hooks/useGoogleAPI";
import InputTextArea from "../atoms/InputTextArea";
import OutputTextArea from "../atoms/OutputTextArea";
import { DefaultDialg } from "../atoms/DefaultDialog";
import { FromToContext } from "../../pages/home";

export const TranslatedTextArea = (props: any) => {
  // //ユーザの入力値
  // let inputText = useRef<string>(null);
    //ユーザの入力値
    const [inputText, setInputText] = useState<string>("");
  //Google翻訳後に使用するテキスト
  const [googleText, setGoogleText] = useState<gConversionType>();
  //deepL翻訳後に使用するテキスト
  const [deepLText, setDeepLText] = useState<dConversionType>();

  const context = useContext(FromToContext);
  const { fromLang, toLang } = context;

  //ユーザが入力したテキストを翻訳する処理
  const translate = useCallback(
    (e: any) => {
      setTimeout(async () => {
        console.log(`重要！！！！！！！！！！${fromLang} ${toLang}`);
        const gText = await GoogleAPI(e, fromLang, toLang);
        const dText = await DeepLAPI(e, fromLang, toLang);
        setGoogleText(gText);
        setDeepLText(dText);
      });
    },
    [inputText]
  );

  return (
    <>
      <div className="flex justify-center my-5">
        <div className="md:w-2/6 md:mb-36">
          <InputTextArea inputText={inputText} translate={translate} />
        </div>
      </div>

      <div className="sm:flex justify-center">
        <div className="md:w-2/6 mx-20 my-2 flex-auto">
          <OutputTextArea
            translatedText={googleText}
            color="blue"
            transType="Google翻訳"
          />
          <div>
            <div className="mx-3 sm:mt-5 flex justify-center">
              <DefaultDialg transType="Google翻訳" />
            </div>
          </div>
        </div>

        <div className="md:w-2/6 mx-20 my-2 flex-auto">
          <OutputTextArea
            translatedText={deepLText}
            color="yellow"
            transType="DeepL"
          />
          <div>
            <div className="mx-3 sm:mt-5 flex justify-center">
              <DefaultDialg transType="DeepL" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-5"></div>
    </>
  );
};
