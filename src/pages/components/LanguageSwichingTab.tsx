import React from 'react';

const LanguageSwichingTab = () => {
  return (
    <ul className="text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      <div className="flex justify-center">
        <li className="mr-2 px-4">
          <a href="#" className="inline-block py-3 px-4 text-white bg-blue-600 rounded-lg active" aria-current="page">Japanese</a>
        </li>
        <li className="px-4">
          <a href="#" className="inline-block py-3 px-4 text-white bg-blue-600 rounded-lg active" aria-current="page">English</a>
        </li>
      </div>
    </ul>
  );
}

export default LanguageSwichingTab