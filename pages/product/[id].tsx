import Product from '../../components/product';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { IProduct } from '../../models/product';
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
  // const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await (
        await fetch(
          `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product/${id}`
        )
      ).json();
      await setProduct(res[0]);
      console.log(res);
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <main className='px-10 py-6 flex flex-col flex-1'>
        {product ? <Product product={product} /> : 'Loading...'}
      </main>
    </div>
  );
}
