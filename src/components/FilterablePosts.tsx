'use client';

import { SimplePostType } from '@/types/post';
import PostList from './PostList';
import Category from './Category';
import { useState } from 'react';

type Props = {
  posts: SimplePostType[];
  categories: string[];
};

const ALL_POSTS = '전체';

const FilterablePosts = ({ posts, categories }: Props) => {
  const [selected, setSelected] = useState(ALL_POSTS);

  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.categories?.includes(selected));

  return (
    <>
      <PostList posts={filtered} />
      <Category
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </>
  );
};

export default FilterablePosts;
