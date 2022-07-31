import React from 'react';


export const UserTranslationText = (props: any) => {
  const {inputText, translate} = props;
  return (
            <div className="">
              <textarea id="" onChange={translate} className='border-4 md:w-full w-36 h-28 ms:h-56 
               rounded-lg' value={inputText}></textarea>
            </div>
  );

}

export default UserTranslationText;