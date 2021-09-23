import Link from 'next/link';
import { IProduct } from '../models/product';

const Product = ({ product }) => {
  return (
    <div>
      <a>
        <div className='m-3 w-96 text-left no-underline border border-solid border-gray-200 rounded-lg hover:shadow-md focus:shadow-md focus:outline-none'>
          <div
            id='image'
            className='h-64 rounded-t-lg flex items-center justify-center'
          >
            <span className='material-icons text-6xl text-white'>None</span>
          </div>
          <div className='p-5'>
            <h2 className='m0 mb-4 text-2xl font-medium'>{product.name}</h2>
            <p className='m-0 text-sm'>
              {(product.gender = 'male' ? 'Mens' : 'Women')}
            </p>
            <p className='m-0 text-xl'>£{product.price}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Product;
