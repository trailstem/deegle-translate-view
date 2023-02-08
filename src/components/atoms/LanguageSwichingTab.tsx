import React from 'react';
import { memo, useContext } from "react"
import { FromToContext } from "../../pages/home";

import { Select, Option } from "@material-tailwind/react";

const LanguageSwichingTab = memo((props: any): JSX.Element => {
const {onChange} = props; 
  return (
    <div className="flex items-end gap-4 mt-10">
      <Select variant="standard" label="" value="JA" onChange={(e) => onChange(e)}>
        <Option value="JA">日本語</Option> 
        <Option value="EN">英語</Option>
      </Select>
    </div>
  );
})

export default LanguageSwichingTab