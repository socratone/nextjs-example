import styled from 'styled-components';
import { useRouter } from 'next/router';

const Basic = () => {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push('/route/' + id);
  };

  return (
    <>
      <h1>Route</h1>
      <ul>
        <Item onClick={() => handleClick('1')}>
          Dynamic Route가 하나일 때 1
        </Item>
        <Item onClick={() => handleClick('2')}>
          Dynamic Route가 하나일 때 2
        </Item>
        <Item onClick={() => handleClick('12/20')}>
          Dynamic Route가 둘 이상일 때 12/20
        </Item>
        <Item onClick={() => handleClick('12/25')}>
          Dynamic Route가 둘 이상일 때 12/25
        </Item>
      </ul>
    </>
  );
};

const Item = styled.li`
  cursor: pointer;
`;

export default Basic;
