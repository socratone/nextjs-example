type StaticGenerationProps = {
  data: string;
};

const StaticGeneration = ({ data }: StaticGenerationProps) => {
  return <div>{data}</div>;
};

// getStaticProps라는 함수가 있으면 함수 내부에서 서버 데이터를 가져온 뒤 빌드한다.
export const getStaticProps = async () => {
  // fetch
  return {
    props: {
      data: 'hello world',
    },
    // 기본적으로는 local에서 한 번만 빌드되지만
    // revalidate 넣으면 설정한 초(10초)가 지나고 요청이 일어났을 때 서버 상에서 다시 빌드된다.
    // 결과적으로 데이터를 10초마다 새롭게 한다.
    revalidate: 10,
  };
};

export default StaticGeneration;
