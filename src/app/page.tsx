import RecentPosts from '@/components/RecentPosts';
import Tags from '@/components/Tags';
import { getRecentMarkdownPosts, getRecentVelogPost } from '@/service/post';

export default async function Home() {
  const velogPosts = await getRecentVelogPost();
  const markdownPosts = await getRecentMarkdownPosts();
  const tags = [
    ...new Set(markdownPosts.flatMap((post) => post.tags)),
  ] as string[];

  return (
    <div className='w-full bg-[#80a77a]'>
      <div className='p-5'>
        <div className='mx-auto flex flex-col gap-20'>
          <h2 className='text-center text-2xl font-bold'>Recent Posts</h2>
          <div className='flex flex-col items-center' data-aos='fade-up'>
            <h2 className='text-xl font-bold mb-10'>Posts</h2>
            <RecentPosts posts={markdownPosts} />
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='text-xl font-bold mb-10'>Velog</h2>
            <RecentPosts posts={velogPosts} />
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='text-xl font-bold mb-10'>Tags</h2>
            {tags && <Tags tags={tags} />}
          </div>
        </div>
      </div>
    </div>
  );
}
