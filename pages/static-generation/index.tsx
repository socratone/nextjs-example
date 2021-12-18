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
  };
};

export default StaticGeneration;
