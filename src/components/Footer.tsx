const Footer = () => {
  return (
    <footer className='mx-auto s sm:mt-20 bg-[#80a77a]'>
      <div className='w-fit mx-auto py-20 grid grid-cols-3 gap-20 place-items-center'>
        <p>
          <a
            href='https://github.com/Younngg/'
            target='_blank'
            rel='noreferrer'
          >
            <strong>Github</strong>
          </a>
        </p>
        <p>
          <a
            href='https://velog.io/@younngg1012'
            target='_blank'
            rel='noreferrer'
          >
            <strong>Velog</strong>
          </a>
        </p>
        <p>
          <a
            href='https://my.surfit.io/w/1501176912'
            target='_blank'
            rel='noreferrer'
          >
            <strong>Resume</strong>
          </a>
        </p>
        <p className='emailBox col-span-3'>
          <strong className='inline-block mr-2'>Email</strong>
          <span>8533283@naver.com</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
