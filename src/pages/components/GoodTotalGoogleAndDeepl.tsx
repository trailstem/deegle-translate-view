import React from 'react';
import { memo } from "react"

const GoodTotalGoogleAndDeepl = memo((): JSX.Element => {
  return (

  <div className="flex justify-center">
    <p>いいね総数</p>
    <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 rounded-md">Google</div>
    <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 rounded-md">DeepL</div>
  </div>
  );
})

export default GoodTotalGoogleAndDeepl