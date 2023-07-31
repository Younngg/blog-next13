'use client';

import { useGetRecentVelogPosts } from '@/hooks/velog';
import RecentPosts from './RecentPosts';

const RecentVelogPosts = () => {
  const { data: posts } = useGetRecentVelogPosts();

  if (posts) return <RecentPosts posts={posts} />;
};

export default RecentVelogPosts;
