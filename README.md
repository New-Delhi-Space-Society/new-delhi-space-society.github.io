This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Install the dependencies:

```bash
yarn
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

## Style Guide

Figma: https://www.figma.com/file/sUhBLGwVk0tTFjMNNXYLLU/New-Delhi-Space-Society-website

## Code Guide

1. Do not use `next/image` for images. Use normal `img` element with something like `src=require({../public/img})`
2. Members data to be rendered is at `data/members.ts`
3. Member images are at `public/members` - They are to be referenced by `filename.extension` only
4. Use only `Button` component for Buttons.
5. Use `components/Typography.tsx` as much as possible
6. Use `components/SubHeadingContents.tsx` for Heading+Content like in Home, About and Members
7. For colors, use `lightTheme.colors` from `ThemeConfig.ts`
8. Do not push code if you've not implemented responsiveness. Use `device` with `@media` in `ThemeConfig.ts`.
   1. Mobile-first approach.
   2. Refer to `components/Navbar.tsx` and other components which use media query.

## How to push code

1. Fork repository
2. Create a new branch with following naming convention - https://deepsource.io/blog/git-branch-naming-conventions/
3. Commit code at regular interval with proper description - https://www.conventionalcommits.org/en/v1.0.0
4. Create a Pull Request to `new-delhi-space-society/main`
