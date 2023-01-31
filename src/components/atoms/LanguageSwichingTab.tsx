import React from 'react';
import { memo } from "react"

import { Select, Option } from "@material-tailwind/react";

const LanguageSwichingTab = memo((): JSX.Element => {

  return (
    <div className="flex items-end gap-4 mt-10">
      <Select variant="standard" label="">
        <Option value="JA">日本語</Option>
        <Option value="EN">英語</Option>
      </Select>
    </div>
  );
})

export default LanguageSwichingTab