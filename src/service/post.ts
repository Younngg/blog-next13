import { SimplePostType } from '@/types/post';
import path from 'path';
import Parser from 'rss-parser';
import fs, { readFile } from 'fs/promises';
import matter from 'gray-matter';
import { readFileSync } from 'fs';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

const parser = new Parser();

export async function getRecentVelogPost(): Promise<SimplePostType[]> {
  return (await getAllVelogPost()).slice(0, 5);
}

export async function getAllVelogPost(): Promise<SimplePostType[]> {
  return (await parser
    .parseURL('https://v2.velog.io/rss/younngg1012')
    .then((posts) =>
      posts.items.map(({ title, isoDate, guid, contentSnippet }) => ({
        title,
        date: isoDate?.slice(0, 10),
        slug: guid?.split('https://velog.io/@younngg1012/')[1],
        description: contentSnippet?.slice(0, 100),
      }))
    )) as SimplePostType[];
}

export async function getRecentMarkdownPosts(): Promise<SimplePostType[]> {
  return (await getAllMarkdownPosts()).slice(0, 5);
}

export async function getAllMarkdownPosts(): Promise<SimplePostType[]> {
  const folderPath = './posts';
  const files = await fs.readdir(folderPath);

  const posts = await Promise.all(
    files.map(async (file) => await getMarkdownPost(file))
  );

  return posts
    .map(
      ({
        data: { title, date, tags, slug, description, categories, image },
      }) => ({
        title,
        date,
        tags,
        slug,
        description,
        categories,
        image,
      })
    )
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
