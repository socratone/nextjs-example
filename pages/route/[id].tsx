import { useRouter } from 'next/router';

const Detail = () => {
  const router = useRouter();

  return <h1>{router.query.id}</h1>;
};

export default Detail;
