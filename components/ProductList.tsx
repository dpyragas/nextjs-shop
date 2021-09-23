import Card from './card';
import { IProduct } from '../models/product';

// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   img: string;
// }

// type Props = {
//   products: {
//     id: number;
//     name: string;
//     price: string;
//     img: string;
//   },
//   any []
// };

type Props = any[] | any; //This solves underline but why is it working???

const ProductList: React.FC<Props> = ({ title, products }) => {
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

export default ProductList;
