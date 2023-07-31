import { useQuery } from 'react-query';

const useGetVelogPosts = () => {
  return useQuery({
    queryKey: ['velog'],
    queryFn: async () => {
      const posts = await fetch('/api/velog/posts').then((data) => data.json());

      return posts;
    },
  });
};

const useGetRecentVelogPosts = () => {
  return useQuery({
    queryKey: ['velog'],
    queryFn: async () => {
      const posts = await fetch('/api/velog/recent').then((data) =>
        data.json()
      );

      return posts;
    },
  });
};

export { useGetVelogPosts, useGetRecentVelogPosts };
