import { Textarea } from "@material-tailwind/react";
import { memo } from "react";

export const OutputTextArea = memo((props: any) => {

  const { translatedText, color, transType } = props;

  return (
    <>
    <div className={`border-${color}-500`}>
        <Textarea  className="md:h-64" value={translatedText} label={transType} readOnly/>
    </div>
    </>
  );
});

export default OutputTextArea