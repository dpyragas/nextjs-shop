import ProductList from '../components/ProductList';
import { GetStaticPaths } from 'next';
import Product from '../components/product';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { IProduct } from '../models/product';
import Loader from 'react-loader-spinner';
import { Pagination } from '../components/Pagination';

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(
//     `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/all`
//   );
//   const data = await res.json();

//   const paths = data.map((product: { category: { toString: () => any } }) => {
//     return {
//       params: { category: product.category.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context: {
//   params: { category: any };
// }) => {
//   const category = context.params.category;

//   const res = await fetch(
//     `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/all/${category}`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       product: data,
//     },
//   };
// };
export default function ProductsByCategory() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [secondSlice, setSecondSlice] = useState(12);

  const router = useRouter();
  const { category } = router.query;

  function shuffle(a: any) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await (
        await fetch(
          `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/all/${category}`
        )
      ).json();
      const shuffledRes = shuffle(res);
      setProducts(shuffledRes);
    };

    fetchProducts();
  }, [category]);
  const handleLoadMore = () => {
    setSecondSlice(secondSlice + 12);
  };

  return (
    <div className='text-3xl'>
      {products ? (
        <ProductList
          products={products.slice(0, secondSlice)}
          title={`All ${category == 'tshirt' ? 'T-Shirt' : category}`}
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
      <Pagination onClick={handleLoadMore} />
    </div>
  );
}

// function ProductPage({ product }: any) {
//   return (
//     <div className='text-3xl'>
//       <ProductList products={product} title={`All ${product[0].category}`} />
//     </div>
//   );
// }
// export default ProductPage;
