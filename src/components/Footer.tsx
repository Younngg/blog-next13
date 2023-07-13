const Footer = () => {
  return (
    <footer className='bg-[#80a77a] py-10'>
      <div className='flex justify-center items-center gap-20 mb-5'>
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
      </div>
      <p className='text-center'>
        <strong className='inline-block mr-2'>Email</strong>
        <span>8533283@naver.com</span>
      </p>
    </footer>
  );
};

export default Footer;