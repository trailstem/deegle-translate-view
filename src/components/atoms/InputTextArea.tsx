import React from 'react';

export const InputTextArea = (props: any): JSX.Element => {
    const {ref, translate} = props;
  return (  
      <textarea defaultValue={ref} onChange={(e) => translate(e.target.value)} className='outline-none sm:w-1/3 w-full h-28 sm:h-56  md:h-56 border-2 rounded-lg'/>
  )
};

export default InputTextArea;