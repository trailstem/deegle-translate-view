import { Textarea } from "@material-tailwind/react";
import { memo } from "react";

export const OutputTextArea = memo((props: any) => {

  const { translatedText, color, transTool } = props;

  return (
    <>
    <div className={`border-${color}-500`}>
        <Textarea label={transTool} className="md:h-64" value={translatedText} readOnly/>
    </div>
    </>
  );
});

export default OutputTextArea