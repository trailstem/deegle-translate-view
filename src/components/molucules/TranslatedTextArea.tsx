import React, { useCallback, useRef }  from "react";
import { useState } from "react";
import DeepLAPI from "../../hooks/useDeepLAPI";
import GoogleAPI from "../../hooks/useGoogleAPI";
import InputTextArea from "../atoms/InputTextArea";
import OutputTextArea from "../atoms/OutputTextArea";

export const TranslatedTextArea = (props: any) => {

      //ユーザの入力値
      const inputText = useRef<string>(null);
      const [googleText, setGoogleText] = useState<string>("");

      const [deepLText, setDeepLText] = useState<string>("");
      
      const translate = useCallback((e: any) => {
        setTimeout(async () => {
          // setUserInputText(e);
          const gText = await GoogleAPI(e);
          const dText = await DeepLAPI(e);
          setGoogleText(gText);
          setDeepLText(dText);
          // alert("翻訳完了しました");
        }, 800)
      }, [inputText]);

  return (
    <>
      <div className="">
      <InputTextArea inputText={inputText} translate={translate}/>
      </div>
      <OutputTextArea translatedText={googleText} color="blue"/>
      <OutputTextArea translatedText={deepLText} color="yellow"/>
    </>
  )
}