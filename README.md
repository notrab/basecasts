## Run locally

```bash
# .env
GRAFBASE_API_URL=http://127.0.0.1:4000/graphql
GRAFBASE_API_KEY=letmein
NEXTAUTH_SECRET=secret
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

- `npm install`
- `npx grafbase@latest dev`
- `npm run codegen:watch`
- `npm run dev`

## Issues

- `app/page.tsx` and `app/lessons/page.tsx` should use the same `LessonList` component and `LessonListItem` component with the same data dependencies but the queries that use the fragments may differ (for example: when using a variable)

## Dummy data

Open Pathfinder at [`http://127.0.0.1:4000`](http://127.0.0.1:4000) and add a few Episodes:

```graphql
mutation {
  episodeCreate(
    input: {
      title: "Top 5 tools every frontend developer should be using with GraphQL in 2023"
      slug: "top-5-tools-every-frontend-developer-should-be-using-with-graphql-in-2023"
      excerpt: "Frontend developers need to watch this video."
      videoUrl: "https://www.youtube.com/watch?v=AV4Amf3Mag0"
    }
  ) {
    episode {
      id
    }
  }
}
```
