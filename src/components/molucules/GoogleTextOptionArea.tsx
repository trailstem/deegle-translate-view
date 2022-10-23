import { memo } from "react";
import { TextCopyIcon } from "../atoms/TextCopyIcon";
import { ThumbsUpIcon } from "../atoms/ThumbUpIcon";

export const GoogleTextOptionArea = memo(() => {
  return (
    <div className="sm:flex gap-2 sm:gap-4">
      <ThumbsUpIcon />
      <TextCopyIcon />
    </div>
  )
})