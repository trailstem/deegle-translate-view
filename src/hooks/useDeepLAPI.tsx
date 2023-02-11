//deepL用翻訳変換後の型を定義
export interface dConversionType {
  translations: [
    {
      text: {
        text2: string;
      };
    }
  ];
}
//テキストを受け取り、DeepLAPIで翻訳する関数
export const DeepLAPI = async (text: string): Promise<dConversionType> => {
  const API_Key = process.env.NEXT_PUBLIC_DeepL_API_KEY;
  const API_URL = process.env.NEXT_PUBLIC_DeepL_API_URL;

  let content = encodeURI(
    "auth_key=" + API_Key + "&text=" + text + "&source_lang=JA&target_lang=EN"
  );
  let url = API_URL + "?" + content;

  const result = await fetch(url).then((response) => {
    return response.json();
  });
  let transData: dConversionType = result["translations"][0]["text"];
  return transData;
};
export default DeepLAPI;
