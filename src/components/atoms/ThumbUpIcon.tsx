import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

export const ThumbsUpIcon = memo(() => {
  return (
    <div>

        <FontAwesomeIcon icon={faThumbsUp} className=""/>
    </div>
  )
})