import Link from 'next/link';
import Image from 'next/image';

const Card: React.FC<{ id: number; name: string; price: string; img: string }> =
  ({ id, name, price, img }) => {
    return (
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
    );
  };

export default Card;
