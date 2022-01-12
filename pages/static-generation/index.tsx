type StaticGenerationProps = {
  data: string;
};

const StaticGeneration = ({ data }: StaticGenerationProps) => {
  return (
    <>
      <h1>StaticGeneration</h1>
      <div>{data}</div>
    </>
  );
};

// getStaticProps라는 함수가 있으면 함수 내부에서 서버 데이터를 가져온 뒤 빌드한다.
// 아래 함수 내부 코드는 client의 코드에 포함되지 않는다.
// server에서 돌아가기 때문에 fs와 같은 node에서만 쓸 수 있는 라이브러리도 쓸 수 있다.
export const getStaticProps = async () => {
  // fetch
  return {
    props: {
      data: 'hello world',
    },
    // 기본적으로는 npm run build 할 때에 local에서 한 번만 빌드되지만
    // revalidate를 넣으면 설정한 초(10초)가 지나고 요청이 일어났을 때 서버 상에서 다시 빌드된다.
    // 결과적으로 데이터를 10초마다 새롭게 한다.
    revalidate: 10,
    // data가 없는 경우 notFound를 true로 설정해서 404 페이지를 대신 보여주도록 할 수 있다.
    // notFound: true,
    // redirect 옵션을 넣어서 404 대신 다른 페이지로 이동시킬 수도 있다.
  };
};

export default StaticGeneration;
