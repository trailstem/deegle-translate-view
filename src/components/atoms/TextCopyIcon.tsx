import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import {faCopy} from "@fortawesome/free-regular-svg-icons";

export const TextCopyIcon = memo((props: any) => {
  const {} = props;
  const copyToClipboard = () => {
  }
  return (
    <>
      <div>
        <FontAwesomeIcon icon={faCopy} onClick={copyToClipboard}/>
      </div>
    </>
  );
})