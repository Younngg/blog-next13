import PostContent from '@/components/PostContent';
import { getVelogPost } from '@/service/post';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const post = await getVelogPost(slug);

  if (!post)
    return {
      title: 'All Velog Posts',
      description: '벨로그 글 목록',
    };

  const { title, description } = post;
  return {
    title,
    description: title,
  };
}

const VelogPage = async ({ params: { slug } }: Props) => {
  const post = await getVelogPost(slug);

  if (!post) {
    redirect('/velog');
  }

  return (
    <>
      <PostContent post={post!} />
    </>
  );
};

export default VelogPage;
