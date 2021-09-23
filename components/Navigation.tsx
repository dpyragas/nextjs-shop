import React from 'react';
import Link from 'next/link';
import DropdownMen from './DropdownMen';
import DropdownWomen from './DropdownWomen';
import DropdownAll from './DropdownAll';

const Navigation = () => {
  return (
    <header className='border-b sticky top-0 z-20 bg-white'>
      <div className='flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl'>
        <Link href='/' passHref>
          <a className='cursor-pointer'>
            <span className='text-lg pt-1 font-bold'>Phony Hilfiger</span>
          </a>
        </Link>
        <div className='flex flex-end'>
          <DropdownAll />
          <DropdownWomen />
          <DropdownMen />
        </div>
        <a className='text-md font-bold cursor-pointer'>Cart</a>
      </div>
    </header>
  );
};

export default Navigation;
