import React from 'react';
import { memo } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCopy} from "@fortawesome/free-regular-svg-icons";


const GoogleTextCopy = memo((props): JSX.Element => {

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

export default GoogleTextCopy