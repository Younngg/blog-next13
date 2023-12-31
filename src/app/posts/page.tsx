import FilterablePosts from '@/components/FilterablePosts';
import PageTitle from '@/components/PageTitle';
import pageInfo from '@/constants/pageInfo';
import { getAllMarkdownPosts } from '@/service/post';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: '블로그 글 목록',
};

const PostsPage = async () => {
  const posts = await getAllMarkdownPosts();
  const categories = [
    ...new Set(posts.flatMap((post) => post.categories)),
  ] as string[];

  return (
    <>
      <PageTitle
        title={pageInfo['/posts'].title}
        description={pageInfo['/posts'].description}
      />
      <div className='max-w-screen-lg mx-auto flex max-[600px]:flex-col-reverse max-[600px]:items-center max-[1024px]:px-5 justify-between py-10'>
        <FilterablePosts posts={posts} categories={categories} />
      </div>
    </>
  );
};

export default PostsPage;
