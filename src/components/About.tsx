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
        <p>📌 소통을 통해 더 나은 가치를 창출할 수 있다고 믿습니다.</p>
        <p>
          📌 일단 실행해보는 것의 중요성을 알고 있습니다. 실행 단계에서 부족한
          것이 무엇인지 알 수 있고, 고칠 수 있다고 생각합니다.
        </p>
      </div>
    </section>
  );
};

export default About;
