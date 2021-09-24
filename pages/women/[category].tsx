// import ProductList from '../../components/ProductList';

// export const getStaticPaths = async () => {
//   const res = await fetch(
//     `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/women/all`
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
//     `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/women/all/${category}`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       product: data,
//     },
//   };
// };

// export default function ProductPage({ product }: any) {
//   return (
//     <div className='text-3xl'>
//       <ProductList products={product} title={`Women ${product[0].category}`} />
//     </div>
//   );
// }

import ProductList from '../../components/ProductList';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { IProduct } from '../../models/product';
import { Pagination } from '../../components/Pagination';
import Loader from 'react-loader-spinner';

export default function WomenProductsByCategory() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [slice, setSlice] = useState(12);

  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await (
        await fetch(
          `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/women/all/${category}`
        )
      ).json();

      setProducts(res);
    };

    fetchProducts();
  }, [category]);
  const handleLoadMore = () => {
    setSlice(slice + 12);
  };

  return (
    <div className='text-3xl'>
      {products ? (
        <ProductList
          products={products.slice(0, slice)}
          title={`Women ${category}`}
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
