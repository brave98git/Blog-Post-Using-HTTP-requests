//Declaration Section
const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3000;



//Memory Storage Section
let posts = [
  {
    id: '1',
    title: 'Welcome to My Blog',
    content: 'This is your first blog post! You can edit or delete this post, or create new ones using the navigation above.',
    author: 'Blog Admin',
    date: new Date('2025-07-15'),
    excerpt: 'This is your first blog post! You can edit or delete this post...'
  },
  {
    id: '2',
    title: 'Getting Started with Node.js',
    content: 'Node.js is a powerful JavaScript runtime that allows you to build server-side applications. In this post, we\'ll explore the basics of creating web applications with Express.js and EJS templating.',
    author: 'Tech Writer',
    date: new Date('2025-07-10'),
    excerpt: 'Node.js is a powerful JavaScript runtime that allows you to build...'
  }
];



// Middleware Section
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// Helper function to create excerpt
function createExcerpt(content, maxLength = 150) {
  if (content.length <= maxLength) return content;
  return content.substring(0, maxLength) + '...';
}



// Routes Section
// Home page - display all posts
app.get('/', (req, res) => {
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  res.render('index', { posts: sortedPosts });
});

// Create new post - GET form
app.get('/new', (req, res) => {
  res.render('new');
});

// Create new post - POST
app.post('/posts', (req, res) => {
  const { title, content, author } = req.body;
  
  if (!title || !content) {
    return res.render('new', { 
      error: 'Title and content are required',
      title,
      content,
      author
    });
  }

  const newPost = {
    id: uuidv4(),
    title: title.trim(),
    content: content.trim(),
    author: author?.trim() || 'Anonymous',
    date: new Date(),
    excerpt: createExcerpt(content.trim())
  };

  posts.push(newPost);
  res.redirect('/');
});

// View single post
app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  
  if (!post) {
    return res.status(404).render('404');
  }

  res.render('post', { post });
});

// Edit post - GET form
app.get('/posts/:id/edit', (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  
  if (!post) {
    return res.status(404).render('404');
  }

  res.render('edit', { post });
});

// Edit post - POST
app.post('/posts/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === req.params.id);
  
  if (postIndex === -1) {
    return res.status(404).render('404');
  }

  const { title, content, author } = req.body;
  
  if (!title || !content) {
    return res.render('edit', { 
      post: posts[postIndex],
      error: 'Title and content are required'
    });
  }

  posts[postIndex] = {
    ...posts[postIndex],
    title: title.trim(),
    content: content.trim(),
    author: author?.trim() || posts[postIndex].author,
    excerpt: createExcerpt(content.trim()),
    updatedAt: new Date()
  };

  res.redirect(`/posts/${req.params.id}`);
});

// Delete post
app.post('/posts/:id/delete', (req, res) => {
  posts = posts.filter(p => p.id !== req.params.id);
  res.redirect('/');
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404');
});

// Start server
app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
  console.log('Press Ctrl+C to stop the server');
});

module.exports = app;