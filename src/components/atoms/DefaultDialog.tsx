import { memo, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { ThumbsUpIcon } from "./ThumbUpIcon";

export  const DefaultDialg = memo((props:any) =>{

  const {transType} = props;

  const [open, setOpen] = useState(false);

  const [test,setTest] = useState("");

  const handleOpen = () => {

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: headers,
    };
    
    setOpen(!open)
    fetch(`http://localhost:8080/test`, requestOptions)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setTest(data.likeCount)
    }).catch ((err) => {
      setTest(err)
    })
  };

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
      <ThumbsUpIcon/>
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>いいねありがとうございます😁</DialogHeader>
        <DialogBody divider>
          {transType}のいいね数は:{test}です
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>戻る</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
})