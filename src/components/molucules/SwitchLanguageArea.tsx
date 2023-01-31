import { memo } from "react";
import LanguageSwichingTab from "../atoms/LanguageSwichingTab";
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid'

export const SwichLanguageArea = memo(() => {
  return (
    <>
    <div className="w-2/12">
      <div className="flex justify-center my-5">
      <LanguageSwichingTab/>
        <ArrowsRightLeftIcon className="h-12 w-12 text-blue-500"/>
      <LanguageSwichingTab/>
    </div>
    </div>

    </>
  )
});