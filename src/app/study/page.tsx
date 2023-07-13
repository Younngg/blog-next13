import FilterablePosts from '@/components/FilterablePosts';
import PostCard from '@/components/PostCard';
import { getAllMarkdownPosts } from '@/service/post';

const StudyPage = async () => {
  const posts = await getAllMarkdownPosts();
  const categories = [...new Set(posts.flatMap((post) => post.categories))];

  return (
    <>
      <FilterablePosts posts={posts} categories={categories} />
    </>
  );
};

export default StudyPage;
