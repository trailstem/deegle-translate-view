import { memo, useRef } from "react";
import { useState } from "react";
import { IconButton } from "@material-tailwind/react";
import { ThumbsUpIcon } from "./ThumbUpIcon";
import axios from "axios";



export const HeartButton = memo((props: any) => {

  const [good, setGood] = useState<string>("");const { color } = props;
  
  const handleSubmit = async (event: { preventDefault: () => void; }): Promise<any>  => {
    event.preventDefault();
    const res = await axios.get("http://localhost:8080/test")
    const item = res.data["message"];
    setGood(item);
    console.log(good);
  }


  return (
    <div className="flex md:justify-center mt-4">
        <IconButton onClick={handleSubmit} type="submit" color={color} > 
          <ThumbsUpIcon/>
        </IconButton>
    </div>
  );
})