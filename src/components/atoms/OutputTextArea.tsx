import { memo } from "react";

export const OutputTextArea = memo((props: any) => {

  const { translatedText, color } = props;

  // const color = "green";

  return (
    <div>
      <textarea className={`border-2 mx-8 md:h-40
        border-${color}-500 rounded-lg md:w-1/3 outline-none`} value={translatedText} />
    </div>
  );
});

export default OutputTextArea