import RecentPosts from '@/components/RecentPosts';
import { getRecentVelogPost } from '@/service/post';

export default async function Home() {
  const velogPosts = await getRecentVelogPost();

  return (
    <div className='w-full bg-[#80a77a]'>
      <div className='p-5'>
        <div className='mx-auto flex flex-col gap-20'>
          <h2 className='text-center text-2xl font-bold'>Recent Post</h2>
          {/* <div className='flex flex-col items-center' data-aos='fade-up'>
            <h2 className='text-xl font-bold mb-10'>Daily</h2>
            <RecentPost posts={posts} />
          </div> */}
          <div className='flex flex-col items-center'>
            <h2 className='text-xl font-bold mb-10'>Study</h2>
            <RecentPosts posts={velogPosts} />
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='text-xl font-bold mb-10'>Tags</h2>
            {/* {tags && <Tag tags={tags} size='large' />} */}
          </div>
        </div>
      </div>
    </div>
  );
}
