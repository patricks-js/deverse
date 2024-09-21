# Deverse

> *Share your thoughts, ideas, and inspirations with the world.*

## About

Deverse is a blogging platform focused in the tech community that allows users to share their thoughts, ideas, and inspirations with the world. It provides a platform for users to create and share posts, comments, and reactions, as well as follow users and suggested profiles.

## Features

- Profile management
- Post creation and management
- Commenting and reacting to posts
- Search & filtering
- Profile suggestions
- Following and unfollowing other users
- Favorite posts

## App Architecture

- Monorepo (using turborepo)
- Next.js
- Tailwind CSS
- Node.js
- Prisma
- PostgreSQL
- TypeScript

### Monorepo

The project is organized into a monorepo, with each app (server and web) being a separate package within the monorepo. You can find the packages in the `/apps` directory.

Some packages are shared across apps, such as the `tsconfig` package, are located in the `/packages` directory.

- See the server docs: [README.md](/apps/server/README.md)
- See the web docs: [README.md](/apps/web/README.md)

## Philosophy

- Keep the codebase as simple as possible
- Write at least one test for each new feature
- All the required features should be implemented.
- Make a clear documentation of the codebase.
- TypeScript is preferred over JavaScript.
- Do the best to keep the implementation up to date.

## Contributing

Contributions are welcome!
