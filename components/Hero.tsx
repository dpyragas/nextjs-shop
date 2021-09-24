import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// const Hero = () => {
//   return (
//     <div>
//       <div
//         className='bg-white h-screen flex flex-col justify-center items-center bg-cover bg-center'
//         style={{ backgroundImage: `${heroImage}` }}
//       >
//         <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white'>
//           Yet Another E-Shop
//         </h1>
//         {/* <img src={heroImage} alt='..' className='' /> */}
//         <div className='py-6 px-10 bg-yellow-500 roundend-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce'>
//           <Link href='/'>Order Now</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <div className='my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center'>
      <h1 className='font-extrabold text-gray-900'>
        <p className='text-3xl sm:text-3xl md:text-6xl pb-6'>
          Pyragas E-Commerce
        </p>
        <p className=' text-2xl sm:text-2xl md:text-3xl'>
          Made for learning purposes
        </p>
      </h1>
      {/* <h2 className='mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl'>
        Shops
      </h2> */}
      <div className='mt-5 max-w mx-auto flex justify-center items-center md:mt-8'>
        <Link href='/women'>
          <a className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-black bg-yellow-500 hover:bg-yellow-300'>
            Shop Women
          </a>
        </Link>
        <Link href='/men'>
          <a className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-black bg-yellow-500 hover:bg-yellow-300'>
            Shop Men
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
