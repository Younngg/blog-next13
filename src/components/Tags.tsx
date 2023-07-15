type Props = {
  tags: string[];
};

const Tags = ({ tags }: Props) => {
  return (
    <ul className='flex gap-2'>
      {tags.map((tag) => (
        <li
          className='rounded-full px-3 bg-green-100 text-neutral-600'
          key={tag}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
