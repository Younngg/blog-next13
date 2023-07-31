import Image from 'next/image';

const About = () => {
  return (
    <section className='bg-white w-full lg:w-[1000px] mx-auto px-5 py-10 mb-10'>
      <h2 className='text-center text-2xl font-bold'>About</h2>
      <div className='py-5 border-b flex items-center'>
        <Image src='/asset/me.png' alt='정지영' width={300} height={300} />
        <div className='flex flex-col gap-2'>
          <p className='text-xl font-bold'>정지영</p>
          <p>프론트엔드 개발자</p>
          <p>8533283@naver.com</p>
        </div>
      </div>
      <div className='py-5 flex flex-col gap-2'>
        <p>📌 협업을 좋아하고, 원활한 소통 방식에 대해 항상 고민합니다.</p>
        <p>📌 발전하는 개발자가 되겠습니다.</p>
      </div>
    </section>
  );
};

export default About;
