import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getSortedPostsData() {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(gfm)  // Adiciona suporte para GitHub Flavored Markdown
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getPostsByCategory(category) {
  const allPosts = getSortedPostsData();
  return allPosts.filter(post => post.category === category);
}

export function getAllCategories() {
  const allPosts = getSortedPostsData();
  const categories = new Set();
  
  allPosts.forEach(post => {
    if (post.category) {
      categories.add(post.category);
    }
  });
  
  return Array.from(categories);
}

export function getAllTags() {
  const allPosts = getSortedPostsData();
  const tags = new Set();
  
  allPosts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => tags.add(tag));
    }
  });
  
  return Array.from(tags);
}

export function getPostsByTag(tag) {
  const allPosts = getSortedPostsData();
  return allPosts.filter(post => 
    post.tags && Array.isArray(post.tags) && post.tags.includes(tag)
  );
}
