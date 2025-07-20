# Express Blog Application

A modern, responsive blog application built with Node.js, Express.js, and EJS templating. Features a clean, Paul Graham-inspired design with full CRUD functionality for blog posts.

## Features

✨ **Core Functionality**
- Create new blog posts with title, content, and author
- View all posts on the homepage with excerpts
- Read individual posts in full detail
- Edit existing posts
- Delete posts with confirmation
- Responsive design for desktop and mobile

🎨 **Design Features**
- Clean, modern interface inspired by Paul Graham's blog
- Responsive grid layout for post cards
- Auto-resizing textareas in forms
- Smooth hover effects and transitions
- Mobile-first responsive design
- Print-friendly styles

🔧 **Technical Features**
- In-memory post storage (no database required)
- UUID-based post IDs
- Input validation and error handling
- SEO-friendly URLs
- Automatic excerpt generation
- Post date tracking with update timestamps

## Project Structure

```
express-blog-app/
├── server.js              # Main Express server
├── package.json           # Dependencies and scripts
├── README.md             # Project documentation
├── public/
│   └── styles.css        # Main stylesheet
└── views/                # EJS templates
    ├── index.ejs         # Homepage (all posts)
    ├── post.ejs          # Single post view
    ├── new.ejs           # Create post form
    ├── edit.ejs          # Edit post form
    └── 404.ejs           # Error page
```

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Step 1: Create Project Directory
```bash
mkdir express-blog-app
cd express-blog-app
```

### Step 2: Initialize Project
```bash
npm init -y
```

### Step 3: Install Dependencies
```bash
npm install express ejs uuid
npm install --save-dev nodemon
```

### Step 4: Create Directory Structure
```bash
mkdir views public
```

### Step 5: Add Files
Copy the provided files to their respective locations:
- `server.js` → Root directory
- `package.json` → Root directory (update the generated one)
- `public/styles.css` → public/styles.css
- All EJS templates → views/ directory

### Step 6: Start the Application

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Usage

### Creating Posts
1. Click "New Post" in the navigation
2. Fill in the title, author (optional), and content
3. Click "Publish Post" to save

### Viewing Posts
- The homepage displays all posts in a card layout
- Click "Read More" on any post card to view the full post
- Posts are sorted by creation date (newest first)

### Editing Posts
1. From any post view, click "Edit Post"
2. Make your changes in the form
3. Click "Update Post" to save changes

### Deleting Posts
1. Click "Delete" on any post (from homepage, post view, or edit form)
2. Confirm the deletion in the popup dialog
3. The post will be permanently removed

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Homepage - display all posts |
| GET | `/new` | Show create post form |
| POST | `/posts` | Create new post |
| GET | `/posts/:id` | View single post |
| GET | `/posts/:id/edit` | Show edit form |
| POST | `/posts/:id` | Update post |
| POST | `/posts/:id/delete` | Delete post |

## Customization

### Styling
Edit `public/styles.css` to customize the appearance. The CSS is organized into sections:
- Base styles and reset
- Navigation components
- Post layouts and cards
- Forms and inputs
- Buttons and interactive elements
- Responsive breakpoints

### Content
- Modify the sample posts in `server.js` (lines 8-24)
- Update the site title and branding in the EJS templates
- Customize the footer text and links

### Features
- Add more fields to posts (tags, categories, featured images)
- Implement search functionality
- Add pagination for large numbers of posts
- Include user authentication

## Technical Details

### Data Storage
Posts are stored in memory as JavaScript objects with the following structure:
```javascript
{
  id: 'uuid-string',
  title: 'Post Title',
  content: 'Post content...',
  author: 'Author Name',
  date: Date object,
  excerpt: 'Generated excerpt...',
  updatedAt: Date object (if edited)
}
```

### Templating
- Uses EJS for server-side rendering
- Responsive design with CSS Grid and Flexbox
- Client-side JavaScript for form enhancements

### Error Handling
- 404 pages for missing posts
- Form validation with error messages
- Graceful handling of malformed requests

## Browser Support
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License
MIT License - feel free to use this code for your own projects!

## Acknowledgments
- Design inspired by Paul Graham's essay site
- Built with Express.js and EJS
- Styled with modern CSS techniques