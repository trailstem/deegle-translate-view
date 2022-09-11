export const GoogleAPI = (inputText: any, setAftTranGoogle: any) : void => {

  // console.log(inputText);

  const API_Key_G = process.env.NEXT_PUBLIC_GoogleTranslation_API_KEY;
  const API_URL_G = "https://translate.googleapis.com/language/translate/v2";

  let content_G = encodeURI(
        "key=" +
        API_Key_G +
        "&q=" +
        inputText.target.value +
        "&cheese&target=EN"
  );

  let googleURL = API_URL_G + "?" + content_G;

  fetch(googleURL)
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(
        `Could not reach the API:${API_Key_G}`+ response.statusText
      );
    }
  })
    .then(function (data) {
      let tran = data["data"]["translations"][0]["translatedText"];
      // console.log(tran);
        setAftTranGoogle(tran);
    })
};

export default GoogleAPI