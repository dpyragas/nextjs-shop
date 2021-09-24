import Product from '../../components/product';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { IProduct } from '../../models/product';

import SuggestedProducts from '../../components/SuggestedProducts';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
// export const getStaticPaths = async () => {
//   const res = await fetch(
//     `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/all`
//   );
//   const data = await res.json();

//   const paths = data.map((product: { id: { toString: () => any } }) => {
//     return {
//       params: { id: product.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context: { params: { id: any } }) => {
//   const id = context.params.id;
//   const res = await fetch(
//     `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product/${id}`
//   );
//   console.log(res);
//   const data = await res.json();

//   return {
//     props: {
//       product: data,
//     },
//   };
// };
export default function ProductPage() {
  const [product, setProduct] = useState<IProduct>();
  const [similarProducts, setSimilarProducts] = useState<IProduct[]>([]);
  // const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  function shuffle(a: any) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await (
        await fetch(
          `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product/${id}`
        )
      ).json();
      await setProduct(res[0]);
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await (
        await fetch(
          `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/${product?.gender}/all/${product?.category}`
        )
      ).json();
      const shuffledRes = shuffle(res);
      setSimilarProducts(shuffledRes);
    };

    fetchProducts();
  }, [product]);

  return (
    <div>
      <main className='px-10 py-6 flex flex-col flex-1'>
        {product ? (
          <Product product={product} />
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
      </main>
      <SuggestedProducts
        products={similarProducts.slice(0, 4)}
        title='Suggested Products'
      />
    </div>
  );
}
