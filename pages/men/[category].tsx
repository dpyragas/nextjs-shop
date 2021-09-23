import ProductList from '../../components/ProductList';
const BASE_URL_API = 'http://localhost:3000';

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/men/all`);
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

  const res = await fetch(`http://localhost:3000/api/men/all/${category}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};

export default function ProductPage({ product }: any) {
  return (
    <div className='text-3xl'>
      <ProductList products={product} title={`Men ${product[0].category}`} />
    </div>
  );
}
