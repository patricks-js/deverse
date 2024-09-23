# Deverse Web

> **Deverse Web** is the Next.js-powered frontend for the Deverse platform, delivering an intuitive and feature-rich experience for creating, managing, and viewing articles.

## Features

- **Real-time Markdown Preview**: Write articles in markdown and see the live preview.
- **Syntax Highlighting**: Code blocks automatically highlight your code in multiple languages.
- **Responsive Design**: Fully optimized for any device – mobile, tablet, or desktop.
- **Dark Mode**: Seamlessly switch between light and dark themes.
- **Enhanced Toolbar**: Enjoy a wide range of formatting options with our powerful toolbar.
- **File Upload**: Easily upload files and images to enrich your articles.
- **Export Options**: Save and export your articles in various formats.

## Routing

Deverse Web comes with a well-organized routing system to keep the user flow seamless:

- **Home page** (URL: `/`)
  - Displays a list of tags.
  - Pulls articles based on Feed, Global, or Tag filters.
  - Pagination for easier navigation through articles.

- **Sign In / Sign Up pages** (URL: `/login`, `/register`)
  - Handles user authentication using JWT tokens (stored in localStorage).
  - Easily switchable to session or cookie-based authentication.

- **Settings page** (URL: `/settings`)
  - Allows users to customize their account settings.

- **Editor page** (URL: `/editor`, `/editor/:article-slug`)
  - Provides a rich text editor for creating or editing articles.
  - Supports markdown with real-time rendering.

- **Article page** (URL: `/article/:article-slug`)
  - Displays article details, including markdown rendering.
  - Comments section for discussions.
  - Delete article/comment options (available only to the author).

- **Profile page** (URL: `/profile/:username`, `/profile/:username/favorites`)
  - Showcases user details (avatar, bio, etc.).
  - Lists articles created or favorited by the user.

## Tech Stack

- **Next.js**: For server-side rendering and static site generation.
- **React**: UI built with the React component library.
- **Tailwind CSS**: Responsive and customizable styling.
- **React-Markdown**: Fast and easy markdown processing.

## Contributing

Feel free to contribute by opening issues, submitting pull requests, or providing feedback!
