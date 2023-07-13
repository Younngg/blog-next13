import FilterablePosts from '@/components/FilterablePosts';
import { getAllMarkdownPosts } from '@/service/post';

const DailyPage = async () => {
  const posts = await getAllMarkdownPosts();
  const categories = [...new Set(posts.flatMap((post) => post.categories))];

  return (
    <div className='max-w-screen-lg mx-auto flex max-[600px]:flex-col-reverse max-[600px]:items-center max-[1024px]:px-5 justify-between py-10'>
      <FilterablePosts posts={posts} categories={categories} />
    </div>
  );
};

export default DailyPage;
