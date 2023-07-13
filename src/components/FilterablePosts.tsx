import { SimplePostType } from '@/types/post';
import PostCard from './PostCard';
import PostList from './PostList';
import Category from './Category';

type Props = {
  posts: SimplePostType[];
  categories: string[];
};

const FilterablePosts = ({ posts, categories }: Props) => {
  return (
    <>
      <PostList posts={posts} />
      <Category categories={categories} />
    </>
  );
};

export default FilterablePosts;
