import styled from 'styled-components';
import Link from 'next/link';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link href="/">Home</Link>
          <Link href="/route">Route</Link>
          <Link href="/static-generation">StaticGeneration</Link>
          <Link href="/server-side-rendering">ServerSideRendering</Link>
          <Link href="/static-paths">StaticPaths</Link>
          <Link href="/post">Post</Link>
          <Link href="/head">Head</Link>
          <Link href="/assets">Assets</Link>
        </Nav>
      </Header>
      <Main>{children}</Main>
    </Container>
  );
};

const Container = styled.div``;

const Header = styled.header`
  height: 40px;
  background: #111;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  height: 100%;

  a {
    color: #fff;
    font-weight: 600;
    margin-right: 10px;
  }
`;

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

export default Layout;
