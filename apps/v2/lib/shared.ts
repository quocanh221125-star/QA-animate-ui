import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'QA-animate-ui';
export const siteUrl = 'https://qa-animate-ui.vercel.app';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

const isDev = process.env.NODE_ENV === 'development';

export const docsVersions = [
  {
    id: 'v2',
    label: 'v1.0.0',
    note: undefined,
    url:
      process.env.NEXT_PUBLIC_V2_URL ??
      (isDev ? 'http://localhost:3000' : 'https://qa-animate-ui.vercel.app'),
  },
] as const;

export const gitConfig = {
  user: 'quocanh221125-star',
  repo: 'QA-animate-ui',
  branch: 'main',
};

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
