import PostContent from '@/components/PostContent';
import { getMarkdownPost, getVelogPost } from '@/service/post';
import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
};

const DailyPage = async ({ params: { slug } }: Props) => {
  const post = await getMarkdownPost(slug);

  if (!post) {
    redirect('/study');
  }

  return (
    <>
      <PostContent post={post!} />
    </>
  );
};

export default DailyPage;
