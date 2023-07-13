import FilterablePosts from '@/components/FilterablePosts';
import PostCard from '@/components/PostCard';
import { getAllMarkdownPosts, getAllVelogPost } from '@/service/post';

const StudyPage = async () => {
  const posts = await getAllVelogPost();

  console.log(posts);
  return (
    <div className='max-w-screen-lg mx-auto flex justify-between py-10'></div>
  );
};

export default StudyPage;
