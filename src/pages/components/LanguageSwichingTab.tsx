import React from 'react';
import { memo } from "react"

const LanguageSwichingTab = memo((): JSX.Element => {
  return (
  <ul className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 pb-5">
    <div className="flex justify-center">
      <li className="mr-2 px-4">
        <button className="inline-block py-3 px-4 text-white bg-blue-600 rounded-lg active">Japanese</button>
      </li>
      <li className="px-4">
        <button className="inline-block py-3 px-4 text-white bg-blue-600 rounded-lg active">English</button>
      </li>
    </div>
  </ul>
  );
})

export default LanguageSwichingTab