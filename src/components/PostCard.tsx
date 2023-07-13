import { SimplePostType } from '@/types/post';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  post: SimplePostType;
};

const PostCard = ({ post }: Props) => {
  const { slug, title, description, date, image, tags } = post;

  return (
    <Link href={`/daily/${slug}`}>
      <article className='overflow-hidden shadow-md md:w-[700px] w-full'>
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            referrerPolicy='no-referrer'
            className='w-full h-56 object-cover'
          />
        )}
        <div className='h-48 p-8 flex flex-col justify-between'>
          <div>
            <h3 className='text-xl font-bold mb-4'>{title}</h3>
            <p>{description}</p>
          </div>
          <div>
            {tags && tags.length > 0 && (
              <ul className='flex gap-2'>
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className='rounded-full px-3 bg-green-100 text-neutral-600'
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            <span className='text-xs text-neutral-500'>{date}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
