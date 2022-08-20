import React from 'react';
import { memo } from "react"
const Footer = memo((): JSX.Element => {
  return (
    <footer className="fixed bottom-0 sm:flex sm:items-center  bg-gray-200 w-full">
      <div className="font-semibold text-center p-2">
        <span>&copy; 2022 Deegle: </span>
        <a className="" href="">Google翻訳 DeepL比較アプリ</a>
      </div>
    </footer>
  );
})
export default Footer;