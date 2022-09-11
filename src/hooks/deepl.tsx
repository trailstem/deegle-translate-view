import type { NextApiRequest, NextApiResponse } from 'next'

export  const DeepLAPI = async (inputText: any, setAftTranDeepl: any) : Promise<void> => {

  console.log("--------");
  console.log(inputText.target.value);
  console.log("--------");

  const API_Key = process.env.NEXT_PUBLIC_DeepL_API_KEY;
  const API_URL = "https://api-free.deepl.com/v2/translate";

  let content = encodeURI(
    "auth_key=" +
      API_Key +
      "&text=" +
      inputText.target.value +
      "&source_lang=JA&target_lang=EN"
  );

  let url = API_URL + "?" + content;

  await fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(
        `Could not reach the API:${API_Key} `+ response.statusText
      );
    }
  })
  .then((data) => {
    let tran = data["translations"][0]["text"];
      setAftTranDeepl(tran);
  })
}
export default DeepLAPI