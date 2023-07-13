import { SimplePostType, VelogPostType } from '@/types/post';
import path from 'path';
import Parser from 'rss-parser';
import fs, { readFile } from 'fs/promises';
import matter from 'gray-matter';
import { readFileSync } from 'fs';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

const parser = new Parser();

export async function getRecentVelogPost(): Promise<VelogPostType[]> {
  return (await parser
    .parseURL('https://v2.velog.io/rss/younngg1012')
    .then((posts) =>
      posts.items.slice(0, 5).map((post) => ({
        ...post,
        contentSnippet: post.contentSnippet?.slice(0, 100),
      }))
    )) as VelogPostType[];
}

export async function getAllMarkdownPosts(): Promise<SimplePostType[]> {
  const folderPath = './posts';
  const files = await fs.readdir(folderPath);

  const posts = await Promise.all(
    files.map(async (file) => await getMarkdownPost(file))
  );

  return posts
    .map(({ data: { title, date, tags, slug, description, categories } }) => ({
      title,
      date,
      tags,
      slug,
      description,
      categories,
    }))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getMarkdownPost(slug: string) {
  const filePath = path.join(process.cwd(), 'posts', slug);
  const post = await readFile(filePath, 'utf-8').then(matter);
  const content = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(post.content);

  return { ...post, content: content.value };
}
