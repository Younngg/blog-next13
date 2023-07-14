export type VelogDataType = {
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

export type FullPostType = {
  title: string;
  date: string;
  content: string;
  slug: string;
  link: string;
  description?: string;
  tags?: string[];
  categories?: string[];
  image?: string;
};

export type SimplePostType = Omit<FullPostType, 'content'>;
