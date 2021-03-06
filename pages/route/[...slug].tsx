import { useRouter } from 'next/router';

const Date = () => {
  const router = useRouter();

  const { slug } = router.query;
  if (!slug || !Array.isArray(slug) || slug.length < 2) return null;

  let month = slug[0];
  let day = slug[1];

  return (
    <>
      <h1>[...slug].tsx</h1>
      <p>{`${month}월 ${day}일`}</p>
    </>
  );
};

export default Date;
