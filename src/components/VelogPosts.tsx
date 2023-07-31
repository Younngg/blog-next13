'use client';

import { useGetVelogPosts } from '@/hooks/velog';
import PostList from './PostList';

const VelogPosts = () => {
  const { data: posts } = useGetVelogPosts();

  if (posts) return <PostList posts={posts} />;
};

export default VelogPosts;
