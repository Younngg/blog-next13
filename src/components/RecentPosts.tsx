import { SimplePostType } from '@/types/post';
import Link from 'next/link';

type Props = {
  posts: SimplePostType[];
};

const RecentPosts = ({ posts }: Props) => {
  return (
    <ul className='w-full lg:w-[1000px]'>
      {posts.map(({ title, date, description, slug }) => (
        <Link
          key={slug}
          href={`study/${slug}`}
          className='block py-3 border-b border-gray-900'
        >
          <li>
            <div className='flex items-center justify-between sm:mb-2'>
              <div className='w-2/3 sm:text-lg font-bold truncate'>{title}</div>
              <span className='text-xs'>{date}</span>
            </div>
            <div className='hidden sm:block w-5/6 text-sm truncate'>
              {description}
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default RecentPosts;
