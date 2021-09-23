import Product from '../../components/product';

export const getStaticPaths = async () => {
  const res = await fetch(`http://${process.env.BASE_URL_API}/api/all`);
  const data = await res.json();

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
  const res = await fetch(
    `http://${process.env.BASE_URL_API}/api/product/${id}`
  );
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
