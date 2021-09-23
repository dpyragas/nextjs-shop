import { useState, useEffect } from 'react';
import { IProduct } from '../../models/product';
import ProductList from '../../components/ProductList';
import { Pagination } from '../../components/Pagination';

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [secondSlice, setSecondSlice] = useState(12);

  //Shuffle the products for the main page
  function shuffle(a: any) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const handleLoadMore = () => {
    setSecondSlice(secondSlice + 12);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await (await fetch(`/api/men/all`)).json();
      const shuffledRes = shuffle(res);
      setProducts(shuffledRes);
    };

    fetchProducts();
  }, []);

  return (
    <div className='text-3xl'>
      <ProductList
        products={products.slice(0, secondSlice)}
        title='Men Products'
      />
      <Pagination onClick={handleLoadMore} />
    </div>
  );
}
