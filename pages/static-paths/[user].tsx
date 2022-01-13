import { GetStaticPaths, GetStaticProps } from 'next';

type UserProps = {
  user: string;
};

const User = ({ user }: UserProps) => {
  return <h1>{user}</h1>;
};

// 다이나믹 라우트에 getStaticProps 함수를 쓰면 여기서 나오는 모든 페이지를 미리 렌더링 하겠다는 의미다.
// 그러나 무한대 경우의 수만큼 미리 렌더링을 할 수는 없기 때문에 getStaticPaths 함수를 써서 범위를 한정한다.
export const getStaticPaths: GetStaticPaths = () => {
  // fallback을 false로 설정하면 user에 해당하는 route에 john과 peter만 가능하고 나머지는 404가 된다.
  return {
    // 404 페이지 대신 데이터 없는 빈 페이지가 나오게 하려면 true 또는 'blocking'으로 설정할 수 있다.
    // paths에 포함된 경로만 미리 렌더링을 하고 나머지는 요청이 있을 때 렌더링한다는 의미다.
    // 빌드시 엄청나게 많은 페이지를 렌더링 해야하는 경우 리소스 낭비이기 때문에 자주 접속할 페이지만 렌더링 하도록 paths에 포함시킨다.
    // true는 데이터를 받아오기 전에 렌더링하고 'blocking'은 데이터를 받아오고 난 뒤에 렌더링을 한다.
    // 페이지를 빨리 보여줄 것인지 완벽한 페이지를 보여줄 것인지에 따라서 둘 중 하나를 선택한다.
    fallback: false,
    paths: [
      {
        params: {
          user: 'john',
        },
      },
      {
        params: {
          user: 'peter',
        },
      },
    ],
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const user = context.params!.user; // 해당 함수에서 다이나믹 라우트 값을 가져오는 방법

  return {
    props: {
      user,
    },
  };
};

export default User;
