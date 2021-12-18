import styled from 'styled-components';
import { useRouter } from 'next/router';

const Basic = () => {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push('/basic/' + id);
  };

  return (
    <>
      <h1>BASIC</h1>
      <ul>
        <Item onClick={() => handleClick('1')}>Basic 1</Item>
        <Item onClick={() => handleClick('2')}>Basic 2</Item>
      </ul>
    </>
  );
};

const Item = styled.li`
  cursor: pointer;
`;

export default Basic;
