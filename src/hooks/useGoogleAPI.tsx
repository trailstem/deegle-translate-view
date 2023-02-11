//Google翻訳用変換後の型を定義
export interface gConversionType {
  data: {
    translations: [
      {
        text: {
          text2: string;
        };
      }
    ];
  };
}

export const GoogleAPI = async (
  text: string): Promise<gConversionType> => {
  const API_Key_G = process.env.NEXT_PUBLIC_GoogleTranslation_API_KEY;
  const API_URL_G = process.env.NEXT_PUBLIC_GoogleTranslation_API_URL;

  const URL =
    API_URL_G +
    "?key=" +
    API_Key_G +
    "&q=" +
    encodeURI(text) +
    "&source=" +
    "JA" +
    "&target=" +
    "EN";
  const result = await fetch(URL).then((response) => {
    return response.json();
  });

  let transData: gConversionType =
    result["data"]["translations"][0]["translatedText"];
  return transData;
};
export default GoogleAPI;
