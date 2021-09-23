// import ProductList from '../../components/ProductList';

// export const getStaticPaths = async () => {
//   const res = await fetch(
//     `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/men/all`
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
//     `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/men/all/${category}`
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
//       <ProductList products={product} title={`Men ${product[0].category}`} />
//     </div>
//   );
// }

import ProductList from '../../components/ProductList';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { IProduct } from '../../models/product';

export default function MenProductsByCategory() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await (
        await fetch(
          `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/men/all/${category}`
        )
      ).json();

      setProducts(res);
    };

    fetchProducts();
  }, [category]);

  return (
    <div className='text-3xl'>
      <ProductList
        products={products}
        title={`Men ${category == 'tshirt' ? 'T-Shirt' : category}`}
      />
    </div>
  );
}
