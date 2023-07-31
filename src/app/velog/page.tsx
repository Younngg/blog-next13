import VelogPosts from '@/components/VelogPosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Velog Posts',
  description: '벨로그 글 목록',
};

const VelogPage = () => {
  return (
    <div className='max-w-screen-lg mx-auto py-10'>
      <VelogPosts />
    </div>
  );
};

export default VelogPage;
