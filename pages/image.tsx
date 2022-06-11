import Image from 'next/image';

/**
 * 사용자가 assets에 접근할 수 있으려면 public 폴더에 이미지 파일을 둬야 한다.
 */
const ImagePage = () => {
  return (
    <>
      <h1>Image</h1>

      <h2>{'layout="intrinsic"'}</h2>
      <Image
        src="/images/developer.jpg"
        alt="developer"
        width="640"
        height="427"
      />

      <h2>{'layout="fill"'}</h2>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '300px',
          border: '1px solid tomato',
        }}
      >
        <Image src="/images/developer.jpg" alt="developer" layout="fill" />
      </div>

      <h2>{'layout="fill" objectFit="contain"'}</h2>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '300px',
          border: '1px solid tomato',
        }}
      >
        <Image
          src="/images/developer.jpg"
          alt="developer"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <h2>{'layout="fill" objectFit="cover"'}</h2>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '300px',
          border: '1px solid tomato',
        }}
      >
        <Image
          src="/images/developer.jpg"
          alt="developer"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h2>{'layout="responsive"'}</h2>
      <div
        style={{
          border: '1px solid tomato',
        }}
      >
        <Image
          src="/images/developer.jpg"
          alt="developer"
          width="640"
          height="427"
          layout="responsive"
        />
      </div>
    </>
  );
};

export default ImagePage;
