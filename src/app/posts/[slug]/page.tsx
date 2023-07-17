import PostContent from '@/components/PostContent';
import { getMarkdownPost, getVelogPost } from '@/service/post';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
};


export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getMarkdownPost(slug);

  return {
    title,
    description,
  };
}

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
