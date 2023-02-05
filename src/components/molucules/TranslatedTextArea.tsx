import React, { useCallback, useRef }  from "react";
import { useState } from "react";
import DeepLAPI, { dConversionType } from "../../hooks/useDeepLAPI";
import GoogleAPI, {gConversionType} from "../../hooks/useGoogleAPI";
import { HeartButton } from "../atoms/HeartButton";
import InputTextArea from "../atoms/InputTextArea";
import OutputTextArea from "../atoms/OutputTextArea";


export const TranslatedTextArea = (props: any) => {

      //ユーザの入力値
      let inputText = useRef<string>(null);
      //Google翻訳後に使用するテキスト
      const [googleText, setGoogleText] = useState<gConversionType>();
      //deepL翻訳後に使用するテキスト
      const [deepLText, setDeepLText] = useState<dConversionType>();
      
      //ユーザが入力したテキストを翻訳する処理
      const translate = useCallback((e: any) => {
        setTimeout(async () => {
          const gText = await GoogleAPI(e);
          const dText = await DeepLAPI(e);
          setGoogleText(gText);
          setDeepLText(dText);
        }, 1)
      }, [inputText]);

  return (
    <>
      <div className="flex justify-center my-5">
        <div className="md:w-2/6 md:mb-36">
          <InputTextArea inputText={inputText} translate={translate}/>
        </div>
      </div>

      <div className="sm:flex justify-center">
        <div className="md:w-2/6 mx-20 my-2"> 
          <OutputTextArea
          transTool={"Google翻訳"} 
          translatedText={googleText} color="blue"/>
        </div>
        <div className="md:w-2/6 mx-20 my-2">
          <OutputTextArea
          transTool={"DeepL"} 
          translatedText={deepLText} color="yellow"/>
        </div>
      </div>
    </>
  )
}