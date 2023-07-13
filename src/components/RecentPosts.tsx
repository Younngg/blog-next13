import { SimplePostType, SimpleVelogPostType } from '@/types/post';
import Link from 'next/link';

type Props = {
  velogPosts?: SimpleVelogPostType[];
  markdownPosts?: SimplePostType[];
};

const RecentPosts = ({ velogPosts, markdownPosts }: Props) => {
  return (
    <ul className='w-full lg:w-[1000px]'>
      {velogPosts &&
        velogPosts.map(({ guid, link, title, isoDate, contentSnippet }) => (
          <Link
            key={guid}
            href={`study/${link.split('https://velog.io/@younngg1012/')[1]}`}
            className='block py-3 border-b border-gray-900'
          >
            <li>
              <div className='flex items-center justify-between sm:mb-2'>
                <div className='w-2/3 sm:text-lg font-bold truncate'>
                  {title}
                </div>
                <span className='text-xs'>{isoDate.slice(0, 10)}</span>
              </div>
              <div className='hidden sm:block w-5/6 text-sm truncate'>
                {contentSnippet}
              </div>
            </li>
          </Link>
        ))}
      {markdownPosts &&
        markdownPosts.map(({ title, date, description, slug }) => (
          <Link
            key={slug}
            href={`study/${slug}}`}
            className='block py-3 border-b border-gray-900'
          >
            <li>
              <div className='flex items-center justify-between sm:mb-2'>
                <div className='w-2/3 sm:text-lg font-bold truncate'>
                  {title}
                </div>
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
