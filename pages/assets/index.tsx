import Image from 'next/image';

/**
 * 사용자가 assets에 접근할 수 있으려면 public 폴더에 이미지 파일을 둬야 한다.
 */
const Assets = () => {
  return (
    <>
      <h1>Assets</h1>
      <Image
        src="/assets/images/developer.jpg"
        alt="developer"
        width="640"
        height="427"
      />
    </>
  );
};

export default Assets;
