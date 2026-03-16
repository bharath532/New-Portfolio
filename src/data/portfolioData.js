// ─────────────────────────────────────────────────
//  PORTFOLIO DATA
//  data/portfolioData.js  —  edit all content here
// ─────────────────────────────────────────────────

export const personal = {
  name:       'Bharath S',
  role:       'MERN Stack Developer',
  location:   'Erode, Tamil Nadu',
  email:      'bharath978930@gmail.com',
  github:     'https://github.com/bharath532',
  linkedin:   'https://www.linkedin.com/in/bharath9789/',
  portfolio:  'https://bharath-portfolios.netlify.app/',
  resumeUrl:  'https://bharath-portfolios.netlify.app/',
  available:  true,
  bio: [
    'Hi! I\'m Bharath S, a Full Stack Developer from Erode, Tamil Nadu pursuing a BCA at Erode Arts and Science College, Bharathiar University (Expected 2026).',
    'Trained in the MERN stack with internship experience at IDM Tech Park. I build real-world projects — from e-commerce platforms to portfolio sites — and deploy them live on Netlify and Render.',
    'Also learning Japanese and preparing for JLPT N5, with the goal of pursuing software development opportunities in Japan.',
  ],
}

export const typewriterRoles = [
  'MERN Stack Developer',
  'Full Stack Developer',
  'React.js Developer',
  'Node.js Developer',
]

export const stats = [
  { value: 'BCA',  label: 'Pursuing 2026' },
  { value: '20+',   label: 'Live Projects'  },
  { value: '4mo',  label: 'Internship'     },
  { value: 'N5',   label: 'JLPT Prep 🇯🇵'  },
]

export const experience = [
  {
    company:   'IDM Tech Park',
    role:      'MERN Stack Intern',
    period:    'Apr 2025 – Jul 2025',
    location:  'Erode',
    points: [
      'Completed hands-on training in MERN Stack — MongoDB, Express.js, React.js, Node.js',
      'Built full-stack projects with RESTful APIs and MongoDB Atlas',
      'Gained experience with Git/GitHub and deployment using Netlify and Render',
    ],
  },
]

export const skillCategories = [
  {
    name:    'Frontend',
    color:   'purple',
    items:   ['React.js', 'JavaScript ES6', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    name:    'Backend',
    color:   'teal',
    items:   ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'bcrypt'],
  },
  {
    name:    'Database',
    color:   'orange',
    items:   ['MongoDB', 'Mongoose', 'MongoDB Atlas', 'MongoDB Compass'],
  },
  {
    name:    'Tools & Deployment',
    color:   'pink',
    items:   ['Git', 'GitHub', 'Netlify', 'Render', 'VS Code', 'Postman'],
  },
]

export const skillBars = [
  { name: 'React.js',    pct: 88 },
  { name: 'JavaScript',  pct: 85 },
  { name: 'Node.js',     pct: 82 },
  { name: 'Express.js',  pct: 80 },
  { name: 'MongoDB',     pct: 78 },
  { name: 'Bootstrap',   pct: 75 },
]

export const projects = [
  {
    number:      '01',
    title:       'ElectroMart — E-Commerce Web App',
    badge:       'Live on Render',
    description: 'A complete e-commerce platform with product catalog, shopping cart, checkout, and Stripe payment gateway. Features JWT + bcrypt auth, scalable Node/Express backend, and a responsive React + Bootstrap frontend with persistent cart and user sessions.',
    tags:        ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Stripe'],
    tags2:       ['Bootstrap', 'Render'],
    github:      'https://github.com/bharath532',
    live:        'https://e-commerce-1-lmzl.onrender.com',
  },
  {
    number:      '02',
    title:       'Portfolio Website',
    badge:       'Live on Netlify',
    description: 'A personal portfolio website showcasing projects, skills, and career goals. Built with HTML, CSS, and JavaScript with a fully responsive layout. Contact form integrated with Google Sheets via Google Apps Script and Axios.',
    tags:        ['HTML5', 'CSS3', 'JavaScript', 'Axios'],
    tags2:       ['Netlify', 'Google Apps Script'],
    github:      'https://github.com/bharath532',
    live:        'https://bharathportfollio.netlify.app/',
  },
  
]
