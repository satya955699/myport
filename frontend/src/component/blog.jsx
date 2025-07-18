import React from 'react';
import { Typography, Divider, Box, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const blogPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    description: "A deep dive into the most common React Hooks, including useState and useEffect, and how they simplify state management.",
    date: "July 18, 2025",
    imageUrl: "https://via.placeholder.com/400x250",
    link: "#"
  },
  {
    id: 2,
    title: "Full-Stack Development with Node.js and Express",
    description: "Explore the fundamentals of building a robust backend API using Node.js and the Express framework.",
    date: "June 25, 2025",
    imageUrl: "https://via.placeholder.com/400x250",
    link: "#"
  },
  {
    id: 3,
    title: "Styling React with Tailwind CSS",
    description: "A guide to integrating Tailwind CSS into a React project for fast, utility-first styling without leaving your JavaScript.",
    date: "May 10, 2025",
    imageUrl: "https://via.placeholder.com/400x250",
    link: "#"
  }
];

function Blog() {
  return (
    <section id="blog" className="p-6 text-white">
      <div className="mb-8">
        <Typography variant="h4" className="text-amber-500">
          Blog
        </Typography>
        <Divider className="bg-amber-300 w-11 h-1 rounded-2xl" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <Box
            key={post.id}
            className="bg-[#3C3C3D] rounded-xl overflow-hidden shadow-lg p-4"
            sx={{ transition: "transform 0.3s", '&:hover': { transform: "scale(1.03)" } }}
          >
            <img src={post.imageUrl} alt={post.title} className="w-full h-auto rounded-lg mb-4" />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {post.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'gray', my: 1 }}>
              {post.description}
            </Typography>
            <div className="flex justify-between items-center mt-4">
              <Typography variant="caption" sx={{ color: 'gray' }}>
                {post.date}
              </Typography>
              <Button
                variant="outlined"
                startIcon={<OpenInNewIcon />}
                href={post.link}
                target="_blank"
                sx={{ color: '#C4DB74', borderColor: '#C4DB74', '&:hover': { backgroundColor: 'rgba(196, 219, 116, 0.1)' } }}
              >
                Read More
              </Button>
            </div>
          </Box>
        ))}
      </div>
    </section>
  );
}

export default Blog;