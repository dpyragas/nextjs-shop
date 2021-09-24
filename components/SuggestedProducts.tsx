import Link from 'next/link';
import Image from 'next/image';
import { IProduct } from '../models/product';

type Props = any[] | any; //This solves underline but why is it working???

const Card: React.FC<{
  id: number;
  name: string;
  price: string;
  img: string;
}> = ({ id, name, price, img }) => {
  return (
    <div>
      <Link href={`/product/${id}`}>
        <a href='' className='group'>
          <div className='w-full bg-gray-200 rounded-3xl overflow-hidden'>
            <div className='relative group-hover:opacity-75 h-72'>
              <Image src={img} alt={name} layout='fill' objectFit='cover' />
            </div>
          </div>
          <h3 className='mt-4 text-lg font-medium text-gray-900'>{name}</h3>
          <p className='mt-1 text-sm text-gray-700'>£{price}</p>
        </a>
      </Link>
    </div>
  );
};

const SuggestedProducts: React.FC<Props> = ({ title, products }) => {
  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-extrabold text-gray-900 mb-6'>{title}</h2>
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {products.map((product: IProduct) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              img={product.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestedProducts;
