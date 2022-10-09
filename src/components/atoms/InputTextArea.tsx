import { Textarea } from '@material-tailwind/react';
import React from 'react';

export const InputTextArea = (props: any): JSX.Element => {
    const {ref, translate} = props;
  return (  
      <Textarea defaultValue={ref} onChange={(e) => translate(e.target.value)}
      variant="standard" color="purple" label="翻訳したいテキストを入力してください" />
    
  )
};

export default InputTextArea;