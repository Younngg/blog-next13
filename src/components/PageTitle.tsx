type Props = {
  title: string;
  description: string;
};

const PageTitle = ({ title, description }: Props) => {
  return (
    <div className='w-5/6 sm:w-3/5 mx-auto py-10 max-[600px]:py-2'>
      <h2 className='text-2xl sm:text-4xl font-bold text-neutral-900'>
        {title}
      </h2>
      {description && <p className='mt-5 text-neutral-700'>{description}</p>}
    </div>
  );
};

export default PageTitle;
