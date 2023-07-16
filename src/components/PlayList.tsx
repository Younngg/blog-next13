const PlayList = () => {
  return (
    <div className='playList px-12 py-10 flex justify-center bg-[url("/asset/playListBg.jpg")] bg-center bg-cover'>
      <div
        className='sm:container xl:w-1/2 h-80 flex flex-col-reverse sm:flex-row flex-auto gap-10 justify-center'
        data-aos='fade-up'
      >
        <iframe
          className='sm:w-auto xl:w-1/3 md:w-1/2 h-full'
          src='https://www.youtube.com/embed/videoseries?list=PL055hBeFBrbC1fKHxz9pJ52-vVyducONU'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
        <div className='xl:w-1/3 md:w-1/2 flex items-center justify-center'>
          <p className='font-semibold text-xl'>Play List</p>
        </div>
      </div>
    </div>
  );
};

export default PlayList;
