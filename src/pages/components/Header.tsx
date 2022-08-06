import React from 'react';


const Header = () => {
  return (      
    <header className="bg-blue-600  text-white p-4">
      <nav className="flex justify-between mx-auto container items-center">
        <div className="text-4xl">Deegle</div>
          <div className='space-x-12 font-bold'>
            <a href="" className="hover:text-green-200 transision-all duration-300">ホーム</a>
            <a href="" className="hover:text-green-200 transision-all duration-300">問い合わせ</a>
          </div>
      </nav>
    </header>
  );
}

export default Header