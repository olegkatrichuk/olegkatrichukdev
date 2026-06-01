import remarkGfm from "remark-gfm";

// Shared MDXRemote options. remark-gfm adds GitHub-flavoured Markdown:
// tables, task lists, strikethrough, autolinks — used in journal/case content.
export const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
};
