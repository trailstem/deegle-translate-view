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
  const result = await fetch(`http://localhost:8080/deepL_translate?source=${text}`).then((response) => {
    return response.json();
  });
  console.log(result);
  let transData: dConversionType = result["reqDTxt"]["translations"][0]["text"];
  return transData;
};
export default DeepLAPI;
