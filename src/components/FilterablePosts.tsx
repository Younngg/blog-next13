import { SimplePostType } from '@/types/post';
import PostCard from './PostCard';

type Props = {
  posts: SimplePostType[];
  categories: string[];
};

const FilterablePosts = ({ posts, categories }: Props) => {
  return (
    <>
      {posts.map((post) => (
        <PostCard post={post} key={post.slug} />
      ))}
    </>
  );
};

export default FilterablePosts;
