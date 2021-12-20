type ServerSideRenderingProps = {
  data: string;
};

const ServerSideRendering = ({ data }: ServerSideRenderingProps) => {
  return <div>{data}</div>;
};

// getServerSideProps라는 함수가 있으면 함수 내부에서 서버 데이터를 가져온 뒤 빌드한다.
export const getServerSideProps = async () => {
  // fetch
  return {
    props: {
      data: 'hello world',
    },
  };
};

export default ServerSideRendering;
