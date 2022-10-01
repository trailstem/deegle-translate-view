import type { NextApiRequest, NextApiResponse } from 'next'

//テキストを受け取り、DeepLAPIで翻訳する関数
export  const DeepLAPI = async(text: string) => {

  const API_Key = process.env.NEXT_PUBLIC_DeepL_API_KEY;
  const API_URL = "https://api-free.deepl.com/v2/translate";
  let content = encodeURI(
    "auth_key=" +
      API_Key +
      "&text=" +
      text +
      "&source_lang=EN&target_lang=JA"
      // "&source_lang=JA&target_lang=EN"
  );
  let url = API_URL + "?" + content;

    const data = await fetch(url).then(response => {  return response.json(); });
    let tran: string = data["translations"][0]["text"];
    return tran;
}
export default DeepLAPI