## 🐥 The project

This project is a Twitter clone using on `Next.js` and `Supabase`.
It has been built based on this [tutorial](https://egghead.io/courses/build-a-twitter-clone-with-the-next-js-app-router-and-supabase-19bebadb).

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Notes

To generate TS types from database: `npx supabase gen types typescript --project-id mfdswqcibveetpfstogt > src/lib/database.types.ts`

### Deal with trigger creation

Tuto to fix trigger creation issue: https://www.youtube.com/watch?v=mcrqn77lUmM

```pgsql
// Via Supabase SQL Editor

create trigger on_auth_user_insert
  after insert on auth.users
  for each row execute function public.insert_profile_for_new_user();
```

### Deal with Optimistic UI (useOptimistic) and Server Action

[Link](https://www.youtube.com/watch?v=PPOw-sDeoNw) to a tutorial.

### Deal with Dynamic build issue

An error is raised on build where we use `cookies` (on Supabase auth) because Nextjs want by default to define these files as statics and cache them.
To fix that we must specify explicitlty that these file are dynamic by adding (cf. page.tsx for example):
```js
export const dynamic = "force-dynamic";
```

### Deal with Linter issue

Linter may raise an error concerning the file `database.types.ts`. To fix that we can create a `.eslintignore` and specify the file.