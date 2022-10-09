import { memo } from "react";
import LanguageSwichingTab from "../atoms/LanguageSwichingTab";
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid'

export const SwichLanguageArea = memo(() => {
  return (
    <>
    <div className="flex">
      <LanguageSwichingTab/>
      <ArrowsRightLeftIcon className="h-12 w-12 text-blue-500"/>
      <LanguageSwichingTab/>
    </div>


    </>
  )
});