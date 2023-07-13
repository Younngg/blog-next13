import { SimplePostType } from '@/types/post';
import Link from 'next/link';

type Props = {
  post: SimplePostType;
};

const PostCard = ({ post }: Props) => {
  const { slug, title, description, date } = post;

  return (
    <Link href={`/daily/${slug}`} passHref>
      <div className='w-full h-80 px-12 py-10 mb-5 border border-gray-200 shadow-md flex flex-col justify-between gap-5 hover:-translate-y-2 hover:shadow-lg transition-all'>
        <div className='flex flex-col gap-5'>
          <h3 className='font-semibold text-neutral-700 mb-1 text-xl'>
            {title}
          </h3>
          <p className='w-full break-all text-ellipsis line-clamp-4 text-neutral-600 text-sm leading-7'>
            {description}
          </p>
        </div>
        <div>
          <div className='border-t pt-5 text-xs text-neutral-500 text-right'>
            {date}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
