import { useRouter } from 'next/router';

const Detail = () => {
  const router = useRouter();

  return (
    <>
      <h1>[id].tsx</h1>
      <p>{router.query.id}</p>
    </>
  );
};

export default Detail;
