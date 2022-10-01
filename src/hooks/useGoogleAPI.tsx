import { useEffect } from "react";
import { transpile } from "typescript";


//テキストを受け取り、GoogleAPIで翻訳する関数
export const  GoogleAPI = async(text: string) => {

  const API_Key_G = process.env.NEXT_PUBLIC_GoogleTranslation_API_KEY;
  const API_URL_G = "https://translate.googleapis.com/language/translate/v2";

  let content_G = encodeURI(
    "key=" +
    API_Key_G +
    "&q=" +
    text +
    // "&cheese&target=EN"
    "&cheese&target=JA"
);

let googleURL = API_URL_G + "?" + content_G;
  const data = await fetch(googleURL).then(response => { return response.json();});
  let tran: string = data["data"]["translations"][0]["translatedText"];
  return tran;
}

export default GoogleAPI