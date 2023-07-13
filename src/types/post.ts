export type VelogType = {
  copyright: string;
  description: string;
  docs: string;
  feedUrl: string;
  generator: string;
  image: {
    link: string;
    url: string;
    title: string;
  };
  items: VelogPostType[];
  lastBuildDate: string;
};

export type VelogPostType = {
  title: string;
  isoDate: string;
  link: string;
  guid: string;
  contentSnippet: string;
  content: string;
};

export type SimplePostType = {
  title: string;
  date: string;
  description: string;
  slug: string;
  tags: string[];
  categories: string[];
};
