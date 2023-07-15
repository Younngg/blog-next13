import FilterablePosts from '@/components/FilterablePosts';
import PostCard from '@/components/PostCard';
import PostList from '@/components/PostList';
import { getAllMarkdownPosts, getAllVelogPost } from '@/service/post';

const VelogPage = async () => {
  const posts = await getAllVelogPost();

  return (
    <div className='max-w-screen-lg mx-auto py-10'>
      <PostList posts={posts} />
    </div>
  );
};

export default VelogPage;
