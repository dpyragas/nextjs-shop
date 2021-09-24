import { useState, useEffect } from 'react';
import { IProduct } from '../models/product';
import { Pagination } from '../components/Pagination';
import ProductList from '../components/ProductList';
import Loader from 'react-loader-spinner';
import Hero from '../components/Hero';

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const [slice, setSlice] = useState(12);
  //Shuffle the products for the main page
  function shuffle(a: any) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await (await fetch(`/api/all`)).json();
      const shuffledRes = shuffle(res);
      setProducts(shuffledRes);
    };

    fetchProducts();
  }, []);
  const handleLoadMore = () => {
    setSlice(slice + 12);
  };

  return (
    <div className='text-3xl'>
      <Hero />
      {products ? (
        <ProductList
          products={products.slice(0, 8)}
          title='Featured Products'
        />
      ) : (
        <div className='flex items-center justify-center'>
          <Loader
            type='ThreeDots'
            color='black'
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      )}
      {/* <Pagination onClick={handleLoadMore} /> */}
    </div>
  );
}
