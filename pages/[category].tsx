import ProductList from '../components/ProductList';

export const getStaticPaths = async () => {
  const res = await fetch(
    `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/all`
  );
  const data = await res.json();

  const paths = data.map((product: { category: { toString: () => any } }) => {
    return {
      params: { category: product.category.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: {
  params: { category: any };
}) => {
  const category = context.params.category;

  const res = await fetch(
    `http://${process.env.NEXT_PUBLIC_VERCEL_URL}api/all/${category}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};

function ProductPage({ product }: any) {
  return (
    <div className='text-3xl'>
      <ProductList products={product} title={`All ${product[0].category}`} />
    </div>
  );
}
export default ProductPage;
