import { FullPostType } from '@/types/post';
import Link from 'next/link';

type Props = {
  post: FullPostType;
};

const PostContent = ({ post }: Props) => {
  return (
    <div className='w-5/6 sm:w-3/5 mx-auto py-10 max-[600px]:py-2'>
      {post.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.image}
          alt={post.title}
          referrerPolicy='no-referrer'
          className='w-full object-cover'
        />
      )}
      <div className='mb-10 border-b'>
        <div className='mb-10'>
          <h1 className='text-4xl max-sm:text-xl font-bold mb-5'>
            {post.title}
          </h1>
          <span className='text-sm text-neutral-500'>{post.date}</span>
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
