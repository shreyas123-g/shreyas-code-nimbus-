
import React from "react";

const posts = [
  {
    category: "Fashion",
    date: "January 24, 2025",
    title: "Connect Your Worlds",
    excerpt:
      "A soft visual language that ties your ceremony, reception, and memories into one story.",
  },
  {
    category: "Decoration",
    date: "February 24, 2025",
    title: "Choose Your Style",
    excerpt:
      "Mix florals, typography, and imagery into layouts that feel uniquely yours.",
  },
  {
    category: "Planning",
    date: "March 24, 2025",
    title: "Wedding Lists",
    excerpt:
      "Organize everything from invitations to seating with clear, simple sections.",
  },
  {
    category: "Design",
    date: "April 24, 2025",
    title: "Something Special",
    excerpt:
      "Delight visitors with subtle movement, hover effects, and smooth transitions.",
  },
];

const BlogSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-intro center">
          <h2 className="section-title">Latest Stories</h2>
          <p className="section-subtitle">
            Use this area for featured articles, announcements, or inspiration
            for your event.
          </p>
        </div>
        <div className="blog-grid">
          {posts.map((post, idx) => (
            <article key={idx} className="blog-card fade-in-up">
              <div className="blog-image-placeholder" />
              <div className="blog-content">
                <p className="blog-meta">
                  <span>{post.category}</span> · <span>{post.date}</span>
                </p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="text-link">Read More →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
