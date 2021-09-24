// import Link from 'next/link';
// import { IProduct } from '../models/product';

// const Product = ({ product }: any) => {
//   return (
//     <div>
//       <a>
//         <div className='m-3 w-96 text-left no-underline border border-solid border-gray-200 rounded-lg hover:shadow-md focus:shadow-md focus:outline-none'>
//           <div
//             id='image'
//             className='h-64 rounded-t-lg flex items-center justify-center'
//           >
//             <span className='material-icons text-6xl text-white'>None</span>
//           </div>
//           <div className='p-5'>
//             <h2 className='m0 mb-4 text-2xl font-medium'>{product.name}</h2>
//             <p className='m-0 text-sm'>
//               {(product.gender = 'male' ? 'Mens' : 'Women')}
//             </p>
//             <p className='m-0 text-xl'>£{product.price}</p>
//           </div>
//         </div>
//       </a>
//     </div>
//   );
// };

// export default Product;
import { useState, useContext } from 'react';
import Image from 'next/image';
import React from 'react';

const product = ({ product }: any) => {
  const [productCounter, setProductCounter] = useState(1);
  const addToCart = () => {
    localStorage.setItem(`productName[${productCounter}]`, product.name);
    localStorage.setItem(`productPrice[${productCounter}]`, product.price);
    localStorage.setItem(`productImg[${productCounter}]`, product.img);
  };
  return (
    <div className='flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto'>
      <div className='w-full max-w-md overflow-hidden  md:w-1/2'>
        <div className='relative h-auto w-auto'>
          <Image
            width='550'
            height='700'
            src={product.img}
            alt={product.name}
          />
        </div>
      </div>
      <div className=' p-4 flex flex-col w-full md:w-1/3'>
        <span className=' pb-1'>
          {product.gender.toUpperCase()} #{product.id}
        </span>
        <h2 className='pb-2 text-2xl font-bold'>{product.name}</h2>

        <span className=' pb-6'>£{product.price}</span>

        <p className='pb-6'>{product.desc}</p>
        <span>Available Sizes:</span>
        <fieldset>
          <legend className='text-xl font-semibold'></legend>
          <div className='inline-flex items-center flex-wrap'>
            <label>
              <input className='sr-only' type='radio' name='S' value='small' />
              <div className='p-2 my-3 text-lg block cursor-pointer mr-3 text-white bg-gray-900 hover:text-black hover:bg-white hover:border-black border-2'>
                <span className='px-2'>S</span>
              </div>
            </label>
            <label>
              <input className='sr-only' type='radio' name='S' value='small' />
              <div className='p-2 my-3 text-lg block cursor-pointer mr-3 text-white bg-gray-900 hover:text-black hover:bg-white hover:border-black border-2'>
                <span className='px-2'>M</span>
              </div>
            </label>
            <label>
              <input className='sr-only' type='radio' name='S' value='small' />
              <div className='p-2 my-3 text-lg block cursor-pointer mr-3 text-white bg-gray-900 hover:text-black hover:bg-white hover:border-black border-2'>
                <span className='px-2'>L</span>
              </div>
            </label>
            <label>
              <input className='sr-only' type='radio' name='S' value='small' />
              <div className='p-2 my-3 text-lg block cursor-pointer mr-3 text-white bg-gray-900 hover:text-black hover:bg-white hover:border-black border-2'>
                <span className='px-2'>XL</span>
              </div>
            </label>
          </div>
          <button
            onClick={addToCart}
            className='p-2 my-3 text-lg block cursor-pointer mr-3 text-white bg-gray-900 hover:text-black hover:bg-white hover:border-black border-2'
          >
            Add To Cart
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default product;
