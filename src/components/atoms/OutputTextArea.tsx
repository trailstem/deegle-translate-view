import { Textarea } from "@material-tailwind/react";
import { memo } from "react";

export const OutputTextArea = memo((props: any) => {

  const { translatedText, color } = props;

  return (
    <>
    <div className={`border-${color}-500`}>
        <Textarea value={translatedText} disabled />
    </div>
    </>
  );
});

export default OutputTextArea