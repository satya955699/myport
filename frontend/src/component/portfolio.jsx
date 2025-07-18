import React from 'react';
import { Typography, Divider, Box, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import img2 from "../assets/img2.png"
import img1 from "../assets/img1.png"
import img3 from "..//assets/img3.png"
import img4 from "../assets/img4.png"

const projects = [
  {
    id: 1,
    title: "E-Commerce Web App",
    description: "A full-stack e-commerce platform with user authentication, a shopping cart, and a secure checkout process. Built with the MERN stack.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwindcss"],
    imageUrl:img2,
    liveLink: "#",
    githubLink: "https://github.com/satya955699/ecommorcee"
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "A real-time chat application using WebSockets for instant messaging. Features include public and private channels, and user status.",
    technologies: ["React", "Socket.IO", "Node.js", "Tailwind CSS"],
    imageUrl: img1,
    liveLink: "#",
    githubLink: "https://github.com/satya955699/chatapp"
  },
  {
    id: 3,
    title: "Personal Blog Platform",
    description: "A full-featured blog platform where users can create, edit, and publish posts. Includes an admin panel for content management.",
    technologies: ["Next.js", "Strapi", "GraphQL", "PostgreSQL"],
    imageUrl: img3,
    liveLink: "#",
    githubLink: "https://github.com/satya955699/BlogReact"
  },
  {
  id: 4,
  title: "Online Quiz Platform",
  description: "A full-stack application for creating and taking customizable quizzes. Features include user accounts, score tracking, and an intuitive quiz builder.",
  technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Redux"],
  imageUrl: img4,
  liveLink: "#",
  githubLink: "#"
}
];

function Portfolio() {
  return (
    <section id="portfolio" className="p-6 text-white">
      <div className="mb-8">
        <Typography variant="h4" className="text-amber-500">
          Portfolio
        </Typography>
        <Divider className="bg-amber-300 w-11 h-1 rounded-2xl" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <Box
            key={project.id}
            className="bg-[#3C3C3D] rounded-xl overflow-hidden shadow-lg p-4"
            sx={{ transition: "transform 0.3s", '&:hover': { transform: "scale(1.03)" } }}
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-auto rounded-lg mb-4" />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {project.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'gray', my: 1 }}>
              {project.description}
            </Typography>
            <div className="flex flex-wrap gap-2 my-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#121212] text-[#C4DB74] px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-start gap-4 mt-4">
              <Button
                variant="contained"
                startIcon={<OpenInNewIcon />}
                href={project.liveLink}
                target="_blank"
                sx={{ backgroundColor: '#2B2B2B', '&:hover': { backgroundColor: '#444444' } }}
              >
                Live Demo
              </Button>
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href={project.githubLink}
                target="_blank"
                sx={{ color: '#C4DB74', borderColor: '#C4DB74', '&:hover': { backgroundColor: 'rgba(196, 219, 116, 0.1)' } }}
              >
                GitHub
              </Button>
            </div>
          </Box>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;