import PostContent from '@/components/PostContent';
import { getVelogPost } from '@/service/post';
import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
};

const VelogPage = async ({ params: { slug } }: Props) => {
  const post = await getVelogPost(slug);

  if (!post) {
    redirect('/study');
  }

  return (
    <>
      <PostContent post={post!} />
    </>
  );
};

export default VelogPage;
