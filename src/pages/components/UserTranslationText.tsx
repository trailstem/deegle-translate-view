import React from 'react';
import { memo } from "react"

export const UserTranslationText = memo((props : any): JSX.Element => {
  const {inputText, translate} = props;
  return (
    <div className="flex justify-center text-center px-4 py-6 m-2  boder-2 rounded-md">
      <textarea id="" onChange={translate} className='outline-none sm:w-1/3 w-full h-28 sm:h-56  md:h-56 border-2 rounded-lg'>{inputText}
      </textarea>
    </div>
  );
})

export default UserTranslationText;