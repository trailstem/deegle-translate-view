import { Fragment, memo, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export  const DefaultDialg = memo(() =>{

  const [open, setOpen] = useState(false);

  const [test,setTest] = useState([]);

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
      console.log(data.message);
      setTest(data.message)
    }).catch ((err) => {
      setTest(err)
    })
  };

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>
          {test}
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>{test}</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
})