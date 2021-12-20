import { GetStaticPaths, GetStaticProps } from 'next';

type UserProps = {
  user: string;
};

const User = ({ user }: UserProps) => {
  return <h1>{user}</h1>;
};

// 다이나믹 라우트를 쓸 때 모든 라우트에 해당하는 페이지를 다 생성하지 않도록 설정 하기 위해서 다음 함수를 쓴다.
export const getStaticPaths: GetStaticPaths = () => {
  // fallback을 false로 설정하면 user에 해당하는 route에 john과 peter만 가능하고 나머지는 404가 된다.
  return {
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
