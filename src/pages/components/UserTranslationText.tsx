import React from 'react';


export const UserTranslationText = (props: any) => {
  const {inputText, translate} = props;
  return (
            <div className="sm:flex justify-center ms:px-24">
              <textarea id="" onChange={translate} className='border-4 sm:w-1/3 w-full h-28 sm:h-56  md:h-56 mx-8 
               rounded-lg' value={inputText}></textarea>
            </div>
  );

}

export default UserTranslationText;