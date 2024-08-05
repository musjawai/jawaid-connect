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
