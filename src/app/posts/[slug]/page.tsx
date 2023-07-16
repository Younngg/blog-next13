import PostContent from '@/components/PostContent';
import { getMarkdownPost, getVelogPost } from '@/service/post';
import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getMarkdownPost(slug);

  if (!post) {
    redirect('/posts');
  }

  return (
    <>
      <PostContent post={post!} />
    </>
  );
};

export default PostPage;
