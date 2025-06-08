import { getAllPostIds, getPostData } from '@/lib/posts';
import PageClient from './page-client.jsx';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id);
  return {
    title: `${postData.title} | Desafio Vitalidade`,
    description: postData.excerpt,
  };
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id);
  return <PageClient postData={postData} />;
}

