import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <h1>Home</h1>
      <p>{process.env.NEXT_PUBLIC_PHASE}</p>
    </>
  );
};

export default Home;
