// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // for JSON bodies

// --- Dummy data (same structure as your React components) ---

const heroSlides = [
  {
    id: 1,
    title: "Style & Grace",
    subtitle: "Create an elegant wedding experience online.",
    cta: "View Demos"
  },
  {
    id: 2,
    title: "Designed With Care",
    subtitle:
      "Soft tones, subtle motion and a layout crafted for special moments.",
    cta: "Discover More"
  },
  {
    id: 3,
    title: "Simply Charming",
    subtitle: "Beautiful sections and layouts for events and celebrations.",
    cta: "Explore Templates"
  }
];

const features = [
  {
    id: 1,
    title: "Discover What’s Possible",
    text: "Showcase venues, services, and memories with a modern, refined layout."
  },
  {
    id: 2,
    title: "People Really Matter",
    text: "Put couples, guests, and stories at the center of your design."
  },
  {
    id: 3,
    title: "Having A Plan Feels Good",
    text: "Use clean sections to guide visitors through every important detail."
  }
];

const blogPosts = [
  {
    id: 1,
    category: "Fashion",
    date: "January 24, 2025",
    title: "Connect Your Worlds",
    excerpt:
      "A soft visual language that ties your ceremony, reception, and memories into one story."
  },
  {
    id: 2,
    category: "Decoration",
    date: "February 24, 2025",
    title: "Choose Your Style",
    excerpt:
      "Mix florals, typography, and imagery into layouts that feel uniquely yours."
  },
  {
    id: 3,
    category: "Planning",
    date: "March 24, 2025",
    title: "Wedding Lists",
    excerpt:
      "Organize everything from invitations to seating with clear, simple sections."
  },
  {
    id: 4,
    category: "Design",
    date: "April 24, 2025",
    title: "Something Special",
    excerpt:
      "Delight visitors with subtle movement, hover effects, and smooth transitions."
  }
];

const testimonials = [
  {
    id: 1,
    quote:
      "This layout made our wedding website feel effortless and beautifully curated.",
    name: "Nicole Burke",
    role: "Wedding Planner"
  },
  {
    id: 2,
    quote:
      "The animations are subtle but impactful, and the structure is very easy to customize.",
    name: "Daniel Mitchell",
    role: "Designer"
  },
  {
    id: 3,
    quote:
      "Clean typography, elegant spacing, and a timeless color palette.",
    name: "Raymond Myers",
    role: "Developer"
  }
];

const stats = [
  { id: 1, label: "Design", value: 90 },
  { id: 2, label: "Marketing", value: 70 },
  { id: 3, label: "Development", value: 80 },
  { id: 4, label: "User Experience", value: 85 }
];

const portfolio = [
  { id: 1, title: "Events", category: "Artistic" },
  { id: 2, title: "Sketches", category: "Modern" },
  { id: 3, title: "Cozy Pieces", category: "Photography" },
  { id: 4, title: "Project #14", category: "Print" },
  { id: 5, title: "Destinations", category: "Photography" },
  { id: 6, title: "HQ Setup", category: "Artistic" },
  { id: 7, title: "Colourful", category: "Modern" },
  { id: 8, title: "Daydreaming", category: "Print" }
];

const team = [
  {
    id: 1,
    name: "Cynthia Fowler",
    role: "Senior Designer",
    bio: "Creates soft, elegant visual systems tailored for weddings and celebrations."
  },
  {
    id: 2,
    name: "Cynthia Fowler",
    role: "Marketing Manager",
    bio: "Helps you present services and offers in a way that feels natural and warm."
  },
  {
    id: 3,
    name: "Cynthia Fowler",
    role: "PR Manager",
    bio: "Ensures every touchpoint with your guests feels thoughtful and intentional."
  }
];

const products = [
  { id: 1, name: "Autumn Bouquet", price: 375, rating: 5 },
  { id: 2, name: "Classic Centerpiece", price: 210, rating: 4.5 },
  { id: 3, name: "Soft Pastel Arrangement", price: 320, rating: 5 }
];

// --- API routes ---

app.get("/", (req, res) => {
  res.json({ message: "Fleur backend is running 🚀" });
});

app.get("/api/hero-slides", (req, res) => {
  res.json(heroSlides);
});

app.get("/api/features", (req, res) => {
  res.json(features);
});

app.get("/api/blog-posts", (req, res) => {
  res.json(blogPosts);
});

app.get("/api/testimonials", (req, res) => {
  res.json(testimonials);
});

app.get("/api/stats", (req, res) => {
  res.json(stats);
});

app.get("/api/portfolio", (req, res) => {
  res.json(portfolio);
});

app.get("/api/team", (req, res) => {
  res.json(team);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

// Example contact form endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};
  console.log("New contact submission:", { name, email, message });

  // In a real app you would store this in a DB or send email
  res.status(201).json({
    success: true,
    message: "Thank you for reaching out! We will get back to you soon."
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend API running at http://localhost:${PORT}`);
});
