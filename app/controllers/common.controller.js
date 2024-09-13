const users =  [
  {
    "id": 1,
    "name": "Ref",
    "username": "Motseo",
    "email": "rifilwemotseo@gmail.com"
  },


]

let posts =  [
  {
    "id": 1,
    "title": "Code Chronicles: My Journey Through School Projects",
    "body": "Welcome to Code Chronicles! This blog is where I share my journey through various school projects, documenting my growth as a full-stack developer. Each project represents a step forward in mastering new technologies, overcoming challenges, and expanding my skills. Whether it’s building responsive websites, developing dynamic applications, or learning new programming languages, I’ll break down the process and reflect on the lessons learned. Join me as I continue to explore the world of coding!...",
    "userId": 1,
    "date": "2024-03-04T13:25:05.437Z"
  },
  {
    "id": 2,
    "title": "Project Insights: Building My Tech Portfolio",
    "body": "In Project Insights, I’ll give you a behind-the-scenes look at how I’m building my tech portfolio through hands-on projects. Each post will focus on a specific project, the technologies I used, and the challenges I faced. Whether I’m creating web applications, solving real-world problems with code, or experimenting with new frameworks, this blog will serve as a window into my learning process. My goal is to inspire fellow developers and share the insights I’ve gained along the way....",
    "userId": 2,
    "date": "2024-04-13T23:52:23.4372"
  },
  {
    "id": 3,
    "title": "The Developer's Notebook: School Projects and Beyond",
    "body": "Welcome to The Developer’s Notebook! This blog is my digital notebook where I track the evolution of my skills through school projects and beyond. From coding fundamentals to advanced web development, I’ll document my progress, explain my thought process, and share the practical applications of each project. If you’re interested in seeing how a full-stack developer grows and adapts, this is the place to be!...",
    "userId": 3,
    "date": "2024-06-25T15:33.4372"
  },
  {
    "id": 4,
    "title": "From Concepts to Code: My School Project Showcase",
    "body": "In From Concepts to Code, I’ll showcase my school projects and demonstrate how I bring ideas to life through programming. Every post will walk through the journey of turning a concept into a functional application or website. From brainstorming and wireframing to writing clean, efficient code, I’ll highlight the creative and technical process that goes into each project. This is my space to reflect on the work I’ve done and to share my passion for coding with the world. ....",
    "userId": 4,
    "date": "2024-08-26T00:01.4372"
  }
]

// Create a new post
exports.create = (req, res) => {
  const post = {
    id: posts.length + 1,
    title: req.body.title,
    body: req.body.body,
    userId: req.body.userId,
    date: req.body.date,
    reactions: req.body.reactions
  };
  posts.push(post);
  res.send();
};

// Find all posts
exports.findAll = (req, res) => {
  res.send(posts); 
};

// Update a post by ID
exports.update = (req, res) => {
  const id = req.params.id;
  const allPosts = posts.map(post => post);
  const index = allPosts.findIndex(post => post.id === parseInt(id));
  // Update the properties of the post with the specified ID
  allPosts[index].title = req.body.title;
  allPosts[index].body = req.body.body;
  allPosts[index].userId = req.body.userId;
  allPosts[index].date = req.body.date;
  posts = allPosts.map(post => post); 
  res.send();
};

// Delete a post by ID
exports.delete = (req, res) => {
  const id = req.params.id;
  const index = posts.findIndex(post => post.id === id);
  posts.splice(index, 1); 
  res.send(); 
};

// Update reactions for a post by ID
exports.reactions = (req, res) => {
  const id = req.params.id;
  const allPosts = posts.map(post => post);
  const index = allPosts.findIndex(post => post.id === parseInt(id));
  allPosts[index].reactions = req.body.reactions;
  posts = allPosts.map(post => post);
  res.send();
};

// Get all users
exports.users = (req, res) => {
  res.send(users); 
};

// Find posts by a specific user ID
exports.postsFindByUserId = (req, res) => {
  const id = req.query.userId;
  res.send(posts.filter(post => post.userId === parseInt(id))); 
};
