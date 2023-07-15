'use client';

import { SimplePostType } from '@/types/post';
import PostCard from './PostCard';
import { useState } from 'react';
import Pagination from './Pagination';

type Props = {
  posts: SimplePostType[];
};

const PostList = ({ posts }: Props) => {
  const [page, setPage] = useState(1);

  const LIMIT = 4;
  const OFFSET = (page - 1) * LIMIT;

  return (
    <div>
      <ul className='flex flex-col gap-5'>
        {posts &&
          posts.slice(OFFSET, OFFSET + LIMIT).map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
      </ul>
      <Pagination
        total={posts.length}
        limit={LIMIT}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default PostList;
