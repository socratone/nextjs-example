import Link from 'next/link';

const StaticPaths = () => {
  return (
    <>
      <h1>StaticPaths</h1>
      <ul>
        <li>
          <Link href="/static-paths/john">John</Link>
        </li>
        <li>
          <Link href="/static-paths/peter">Peter</Link>
        </li>
        <li>
          <Link href="/static-paths/anonymous">Anonymous</Link>
        </li>
      </ul>
    </>
  );
};

export default StaticPaths;
