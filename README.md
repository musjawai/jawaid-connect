# Social Media Platform

This is a Node.js-based social media platform that allows users to register, authenticate, create posts, follow/unfollow other users, and manage profiles. The project uses MongoDB for data storage and Mongoose for object modeling.

## Features

- User Registration and Authentication
- Create, Read, Update, and Delete Posts
- Follow and Unfollow Users
- User Profiles with Followers and Following Count

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/) (for testing API endpoints)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/social-media-platform.git
   cd social-media-platform
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a .env file in the root of the directory and add the following variables:

   ```bash
   DATABASE_URI = mongodb....
   ACCESS_TOKEN_SECRET = 123456789123456789abcedfgabcdefg
   REFRESH_TOKEN_SECRET = 123456789123456789abcedfgabcdefg
   PORT = 3000
   ```

4. **Start the server**

   ```bash
   npm start
   ```

## API Endpoints

### User Routes

- **Register**: `POST /register`

  - Registers a new user.

- **Login**: `POST /login`

  - Authenticates a user and returns access and refresh tokens.

- **Logout**: `POST /logout`

  - Logs out a user and invalidates the token.

- **Refresh Token**: `POST /refresh-token`

  - Refreshes the user's access token.

- **Get My Profile**: `GET /profile/me`

  - Retrieves the authenticated user's profile.

- **Update My Profile**: `PUT /profile/me`

  - Updates the authenticated user's profile.

- **Get User Profile by Username**: `GET /profile/:username`
  - Retrieves a user's profile by their username.

### Post Routes

- **Create Post**: `POST /posts`

  - Creates a new post (requires authentication).

- **Get All Posts**: `GET /posts`

  - Retrieves all posts (public feed).

- **Get Post by ID**: `GET /posts/:postId`

  - Retrieves a specific post by its ID.

- **Update Post by ID**: `PUT /posts/:postId`

  - Updates a specific post by its ID (requires authentication).

- **Delete Post by ID**: `DELETE /posts/:postId`
  - Deletes a specific post by its ID (requires authentication).

### Follow Routes

- **Follow User**: `POST /profile/:username/follow`

  - Follows a user (requires authentication).

- **Unfollow User**: `POST /profile/:username/unfollow`
  - Unfollows a user (requires authentication).

### Interaction Routes (Likes and Comments)

- **Like Post**: `POST /posts/:postId/like`

  - Likes a post (requires authentication).

- **Unlike Post**: `POST /posts/:postId/unlike`

  - Unlikes a post (requires authentication).

- **Comment on Post**: `POST /posts/:postId/comment`

  - Comments on a post (requires authentication).

- **Delete Comment**: `DELETE /posts/:postId/comment/:commentId`
  - Deletes a comment on a post (requires authentication).
