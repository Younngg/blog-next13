import FilterablePosts from '@/components/FilterablePosts';
import PostCard from '@/components/PostCard';
import PostList from '@/components/PostList';
import { getAllMarkdownPosts, getAllVelogPost } from '@/service/post';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Velog Posts',
  description: '벨로그 글 목록',
};


const VelogPage = async () => {
  const posts = await getAllVelogPost();

  return (
    <div className='max-w-screen-lg mx-auto py-10'>
      <PostList posts={posts} />
    </div>
  );
};

export default VelogPage;
