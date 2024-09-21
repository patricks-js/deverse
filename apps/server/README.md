# Deverse Server

> *Deverse Server is a Node.js application that provides the backend functionality for the Deverse platform.*

## Features

- CRUD Articles
- CRUD Comments on articles
- GET and display paginated lists of articles
- Favorite articles
- Follow other users

## Requirements

### Functional Requirements

- [ ] Should be able to...

### Non-Functional Requirements

- [ ] ...

### Business Rules

- [ ] ...

## Endpoints

| Method | Endpoint                            | Access  | Description                         |
| ------ | ----------------------------------- | ------  | ----------------------------------- |
| GET    | `/api/profiles/:username`           | Public  | Get a user by username              |
| POST   | `/api/profiles/:username/follow`    | Private | Follow a user                       |
| DELETE | `/api/profiles/:username/follow`    | Private | Unfollow a user                     |
| GET    | `/api/articles/paginated`           | Public  | Get paginated articles              |
| GET    | `/api/articles/feed/paginated`      | Private | Get paginated articles for the feed |
| GET    | `/api/articles/:slug`               | Public  | Get an article by slug              |
| POST   | `/api/articles`                     | Private | Create an article                   |
| PUT    | `/api/articles/:slug`               | Private | Update an article                   |
| DELETE | `/api/articles/:slug`               | Private | Delete an article                   |
| POST   | `/api/articles/:slug/favorite`      | Private | Favorite an article                 |
| DELETE | `/api/articles/:slug/favorite`      | Private | Unfavorite an article               |
| GET    | `/api/articles/:slug/comments`      | Public  | Get comments from an article        |
| POST   | `/api/articles/:slug/comments`      | Private | Create a comment on an article      |
| DELETE | `/api/articles/:slug/comments/:id`  | Private | Delete a comment from an article    |
| GET    | `/api/articles/tags`                | Public  | Get all available tags              |
