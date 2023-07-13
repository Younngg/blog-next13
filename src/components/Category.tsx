type Props = {
  categories: string[];
};

const Category = ({ categories }: Props) => {
  return (
    <div className='p-10 max-[600px]:p-0 w-56 text-center'>
      <p className='w-full font-bold border-solid border-b-2 border-blue-300 pb-2 mb-2'>
        Category
      </p>
      <ul className='text-sm'>
        {categories.map((category) => (
          <li
            key={category}
            // onClick={() => {
            //   setSelected(category);
            // }}
            // className={`cursor-pointer hover:text-sky-500 ${
            //   selected === category && 'text-sky-600'
            // }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
