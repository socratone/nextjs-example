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
        <Item onClick={() => handleClick('1')}>Route 1</Item>
        <Item onClick={() => handleClick('2')}>Route 2</Item>
        <Item onClick={() => handleClick('date/12/20')}>12/20</Item>
        <Item onClick={() => handleClick('date/12/25')}>12/25</Item>
      </ul>
    </>
  );
};

const Item = styled.li`
  cursor: pointer;
`;

export default Basic;
