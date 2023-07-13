import { SimplePostType } from '@/types/post';
import PostCard from './PostCard';

type Props = {
  posts: SimplePostType[];
};

const PostList = ({ posts }: Props) => {
  return (
    <ul className='flex flex-col gap-5'>
      {posts.map((post) => (
        <li key={post.slug}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
