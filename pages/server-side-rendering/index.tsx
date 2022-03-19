type ServerSideRenderingProps = {
  data: string;
};

const ServerSideRendering = ({ data }: ServerSideRenderingProps) => {
  return (
    <>
      <h1>ServerSideRendering</h1>
      <div>{data}</div>
    </>
  );
};

// getServerSideProps라는 함수가 있으면 함수 내부에서 서버 데이터를 가져온 뒤 빌드한다.
// pre-generated되지 않고 요청을 할 때마다 빌드한다.
// 때문에 getStaticPaths를 쓸 필요가 없다.
export const getServerSideProps = async () => {
  // fetch
  return {
    props: {
      data: 'hello world',
    },
  };
};

export default ServerSideRendering;
