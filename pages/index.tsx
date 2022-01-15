import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <h1>Home</h1>
      <p>{process.env.phase}</p>
    </>
  );
};

export default Home;
