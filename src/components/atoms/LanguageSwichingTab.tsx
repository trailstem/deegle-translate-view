import React, { useRef } from 'react';
import { memo } from "react"

import { Select, Option } from "@material-tailwind/react";

const LanguageSwichingTab = memo((): JSX.Element => {

  // 規模が小さいことを想定し、日本語と英語のみ対応するため固定値
  // const data = [
  //   {
  //     label: "Japanese",
  //     value: "JA",
  //   },
  //   {
  //     label: "English",
  //     value: "EN",
  //   },
  // ];

  // //不要なレンダリングが発生しないようにuseRef使用
  // const languageData = useRef(data);
  // const changeTab = (e: any) => {
  //   // if (e.dataset.value === "EN") {
  //   //   e.data_value == "JA";
  //   // }
  //   console.log("changeTab", e.dataset.value);
  // }

  return (
    <div className="flex w-full items-end gap-4">
      <Select variant="standard" label="">
        <Option>{null}</Option>
        <Option value="JA">日本語</Option>
        <Option value="EN">英語</Option>
      </Select>
    </div>
  );
})

export default LanguageSwichingTab