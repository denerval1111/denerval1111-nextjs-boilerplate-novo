import { getSortedPostsData, getAllCategories } from '@/lib/posts';
import PageClient from './page-client.jsx';

export const metadata = {
  title: 'Blog | Desafio Vitalidade',
  description: 'Artigos, dicas e informações baseadas em ciência para transformar sua saúde e bem-estar.',
};

export default async function BlogPage() {
  const allPostsData = getSortedPostsData();
  const allCategories = getAllCategories();
  
  return (
    <PageClient 
      posts={allPostsData} 
      categories={allCategories} 
    />
  );
}
