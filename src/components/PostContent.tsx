import { FullPostType } from '@/types/post';
import Link from 'next/link';

type Props = {
  post: FullPostType;
};

const PostContent = ({ post }: Props) => {
  return (
    <div className='sm:w-3/5 mx-auto p-10'>
      <div className='mb-10  border-b'>
        <div className='flex items-center justify-between mb-10'>
          <h1 className='text-5xl font-bold'>{post.title}</h1>
          <span className='text-sm'>{post.date}</span>
        </div>
        <p className='mb-10'>{post.description}</p>
        {/* <div className='mb-5'>{post.tags && <Tag tags={post.tags} />}</div> */}
      </div>
      <div
        className='prose max-w-full'
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
      <div className='mt-28 flex justify-center'>
        <Link href={`/${post.link}`} legacyBehavior>
          <a className='block bg-gray-200 rounded-3xl w-fit py-2 px-5 hover:bg-gray-300'>
            목록
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PostContent;
