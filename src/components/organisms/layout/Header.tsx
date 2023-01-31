import Link from 'next/link';
import React, { memo } from 'react';


const Header = memo((): JSX.Element => {
  return (      
    <header className="bg-blue-600  text-white p-4">
      <nav className="flex justify-between mx-auto container items-center">
      <div className="text-2xl sm:text-4xl font-bold">
        <Link href="/">Deegle</Link></div>

          <div className='sm:space-x-12 sm:text-2xl'>
            <a href="" className="hover:text-green-200 transision-all duration-300 pr-1">ホーム</a>
            <a href="" className="hover:text-green-200 transision-all duration-300">問い合わせ</a>
          </div>
      </nav>
    </header>
  );
})

export default Header