import type { NextApiRequest, NextApiResponse } from 'next'

export const DeepLAPI = (e : { target: { value: string; }; }, setAftTranDeepl: any) : void => {

  const API_Key = process.env.NEXT_PUBLIC_DeepL_API_KEY;
  const API_URL = "https://api-free.deepl.com/v2/translate";
  console.log(API_Key)

  let content = encodeURI(
    "auth_key=" +
      API_Key +
      "&text=" +
      e.target.value +
      "&source_lang=JA&target_lang=EN"
  );

  let url = API_URL + "?" + content;

  fetch(url)
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(
        `Could not reach the API:${API_Key} `+ response.statusText
      );
    }
  })
  .then(function (data) {
    let tran = data["translations"][0]["text"];
      setAftTranDeepl(tran);
  })
}
export default DeepLAPI