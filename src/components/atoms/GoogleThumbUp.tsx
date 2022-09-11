import React from 'react';
import { memo } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const GoogleThumbUp = memo((): JSX.Element => {
  return (
<div>
    <FontAwesomeIcon icon={faThumbsUp} className=" hover:text-blue-500 transision-all duration-300 cursor-pointer mr-3" color=''/>
</div>
  );
})

export default GoogleThumbUp