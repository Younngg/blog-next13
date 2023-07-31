import About from '@/components/About';
import RecentPosts from '@/components/RecentPosts';
import RecentVelogPosts from '@/components/RecentVelogPosts';
import Tags from '@/components/Tags';
import { getRecentMarkdownPosts, getRecentVelogPost } from '@/service/post';

export default async function Home() {
  const velogPosts = await getRecentVelogPost();
  const markdownPosts = await getRecentMarkdownPosts();
  const tags = [
    ...new Set(markdownPosts.flatMap((post) => post.tags)),
  ] as string[];

  return (
    <>
      <About />
      <section className='w-full mb-16'>
        <div className='p-5'>
          <div className='mx-auto flex flex-col gap-20'>
            <h2 className='text-center text-2xl font-bold'>Recent Posts</h2>
            <div className='flex flex-col items-center' data-aos='fade-up'>
              <h2 className='text-xl font-bold mb-10'>Posts</h2>
              <RecentPosts posts={markdownPosts} />
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-xl font-bold mb-10'>Velog</h2>
              <RecentVelogPosts />
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-xl font-bold mb-10'>Tags</h2>
              {tags && <Tags tags={tags} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
