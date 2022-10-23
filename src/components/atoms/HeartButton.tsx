import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import { IconButton } from "@material-tailwind/react";
import { ThumbsUpIcon } from "./ThumbUpIcon";


export const HeartButton = memo((props: any) => {
  const { color } = props;
  return (
    <div className="flex md:justify-center mt-4">
      <IconButton color={color}> 
        <ThumbsUpIcon/>
      </IconButton>
    </div>
  );
})




