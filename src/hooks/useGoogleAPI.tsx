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
  const result = await fetch(`http://localhost:8080/google_translate?source=${text}`).then(
    (response) => {
      return response.json();
    }
  );
  console.log(result);
  let transData: gConversionType =
    result["reqGTxt"]["data"]["translations"][0]["translatedText"];
  return transData;
};
export default GoogleAPI;
