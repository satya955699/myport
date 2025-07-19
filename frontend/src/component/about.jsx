// import { Box, Divider, Typography } from "@mui/material";
// import WebAssetIcon from '@mui/icons-material/WebAsset';
// import DesignServicesIcon from '@mui/icons-material/DesignServices';
// import CodeIcon from '@mui/icons-material/Code';
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { useRef } from "react";
// import Left from "./left";

// // Refactored data into a single array
// const services = [
//   {
//     id: 1,
//     title: "Web Development",
//     description: "Full-stack web development crafting seamless digital experiences. Code with logic. Design with purpose. Deploy with passion.",
//     icon: <WebAssetIcon />
//   },
//   {
//     id: 2,
//     title: "Responsive Web Design",
//     description: "Crafting clean, modern websites that blend design with functionality. Let's turn your vision into a beautiful digital reality.",
//     icon: <DesignServicesIcon />
//   },
//   {
//     id: 3,
//     title: "Custom Website Building",
//     description: "Building bespoke, modern websites for businesses and personal brands. Let me help you establish a strong online presence.",
//     icon: <CodeIcon />
//   }
// ];

// // Note: Function component name should be PascalCase
// function About() {
//   const container = useRef(null);

//   useGSAP(() => {
//     gsap.from(".about", {
//       x: 100,
//       opacity: 0,
//       delay: 0.2,
//     });
//   }, { scope: container });

//   return (
//     <div className="p-4 sm:p-6" ref={container}>
//       <div className="  md:hidden  justify-center  flex ">

//       <Left/>
//       </div>

 
//       <div className="px-5">
//         <Typography variant="h4"><span className="text-amber-500">A</span>bout</Typography>
//         <Divider className="bg-amber-300 w-11 h-1 rounded-2xl" />
//       </div>

//       <div className="p-4">
//         <Typography className="about">
//           Hello! My name is Satyaprangya Dash. I am a passionate full-stack developer specializing in the PERN stack (PostgreSQL, Express.js, React.js, Node.js). With a background in Mechanical Engineering from OUTR, Bhubaneswar, I've leveraged my problem-solving skills to build scalable and user-friendly web applications.
//           <br /><br />
//           I'm now building and selling professional, high-performance websites for businesses and personal brands. My passion lies in crafting clean code and elegant designs that help my clients achieve their online goals.
//         </Typography>
//       </div>
   
//       <div className="p-4">
//         <Typography variant="h5" className="mb-4">What I Offer</Typography>
//         <Divider className="bg-gray-300 w-24 h-1 rounded-2xl" />
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//         {services.map(service => (
//           <div key={service.id} className="cursor-pointer">
//             <div style={{ boxShadow: "0px 1px 4px black" }} className="p-4 rounded-xl flex w-full">
//               <div className="p-1.5 text-amber-400 place-content-center">
//                 {service.icon}
//               </div>
//               <div>
//                 <Typography sx={{ fontWeight: "800" }}>{service.title}</Typography>
//                 <Typography sx={{ fontSize: "10px" }}>{service.description}</Typography>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default About;






import { Box, Divider, Typography } from "@mui/material";
import WebAssetIcon from '@mui/icons-material/WebAsset';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Left from "./left";


const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Full-stack web development crafting seamless digital experiences. Code with logic. Design with purpose. Deploy with passion.",
    icon: <WebAssetIcon />
  },
  {
    id: 2,
    title: "Responsive Web Design",
    description: "Crafting clean, modern websites that blend design with functionality. Let's turn your vision into a beautiful digital reality.",
    icon: <DesignServicesIcon />
  },
  {
    id: 3,
    title: "Custom Website Building",
    description: "Building bespoke, modern websites for businesses and personal brands. Let me help you establish a strong online presence.",
    icon: <CodeIcon />
  }
];

function About() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".about", {
      x: 100,
      opacity: 0,
      delay: 0.2,
    });
  }, { scope: container });

  return (
    <div className="p-4 sm:p-6" ref={container}>
      <div className="md:hidden justify-center flex">
        <Left />
      </div>

      <div className="px-5">
        <Typography variant="h4">
          <span className="text-amber-500">A</span>bout
        </Typography>
        <Divider className="bg-amber-300 w-11 h-1 rounded-2xl" />
      </div>

      <div className="p-4">
        <Typography className="about">
          Hello! My name is Satyaprangya Dash. I am a passionate full-stack developer specializing in the PERN stack (PostgreSQL, Express.js, React.js, Node.js). With a background in Mechanical Engineering from OUTR, Bhubaneswar, I've leveraged my problem-solving skills to build scalable and user-friendly web applications.
          <br /><br />
          I'm now building and selling professional, high-performance websites for businesses and personal brands. My passion lies in crafting clean code and elegant designs that help my clients achieve their online goals.
        </Typography>
      </div>

      <div className="p-4">
        <Typography variant="h5" className="mb-4">What I Offer</Typography>
        <Divider className="bg-gray-300 w-24 h-1 rounded-2xl" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {services.map(service => (
          <div key={service.id} className="cursor-pointer group">
            <div className="p-4 rounded-xl flex w-full h-full shadow-md transition-transform duration-200 group-hover:scale-105 group-hover:shadow-lg">
              <div className="p-1.5 text-amber-400 place-content-center">
                {service.icon}
              </div>
              <div className="ml-4">
                <Typography sx={{ fontWeight: "800" }}>{service.title}</Typography>
                <Typography sx={{ fontSize: "10px" }}>{service.description}</Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
