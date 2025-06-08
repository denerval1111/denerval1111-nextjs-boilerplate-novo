import { getAllPostIds, getPostData } from '@/lib/posts';
import PageClient from './page-client';

export async function generateMetadata({ params }) {
  const post = await getPostData(params.id);
  return {
    title: `${post.title} | Desafio Vitalidade`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default async function Post({ params }) {
  const post = await getPostData(params.id);
  return <PageClient post={post} />;
}
