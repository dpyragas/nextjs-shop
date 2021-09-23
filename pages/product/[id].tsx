import Product from '../../components/product';
const BASE_URL_API = 'http://localhost:3000';

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/all`);
  const data = await res.json();
  console.log(data, 'dataPAges');

  const paths = data.map((product: { id: { toString: () => any } }) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { id: any } }) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:3000/api/product/${id}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};

export default function ProductPage({ product }: any) {
  return (
    <div>
      <main className='px-10 py-6 flex flex-col flex-1'>
        {product ? <Product product={product[0]} /> : 'Product not found'}
      </main>
    </div>
  );
}
