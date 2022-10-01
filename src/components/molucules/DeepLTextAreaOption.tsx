import { memo } from "react";
import { TextCopyIcon } from "../atoms/TextCopyIcon";
import { ThumbsUpIcon } from "../atoms/ThumbUpIcon";

export const DeepLTextAreaOption = memo(() => {
  return (
    <div>
      <ThumbsUpIcon />
      <TextCopyIcon />
    </div>
  )
})