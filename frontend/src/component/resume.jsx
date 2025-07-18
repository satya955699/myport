import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Education from "./education";
import AlignHorizontalLeftOutlinedIcon from '@mui/icons-material/AlignHorizontalLeftOutlined';

function Resume() {
  const frontend = ["HTML", "CSS", "JAVASCRIPT", 'TAILWINDCSS', 'REACT', 'BOOTSTRAP'];
  const backend = ["node js", "postgreSQL", "restAPI", "express.js", "github"];

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="px-5">
        <Typography variant="h4" className="text-amber-500">
          <span className="text-amber-500">R</span>esume
        </Typography>
        <Divider className="bg-amber-300 w-11 h-1 rounded-2xl" />
      </div>

      <div>
        <div className="m-3">
          <div className="flex items-center space-x-4">
            <div className="px-2 bg-gray-900 rounded-xl place-content-center">
              <SchoolOutlinedIcon className="text-amber-400" />
            </div>
            <Typography variant="h5" className="font-extrabold">Education</Typography>
          </div>
          <Education name={"Matriculation"} year={"2019"} description={"Oshamani high school, Lankapara"} />
          <Education name={"Higher Secondary"} year={"2019-2021"} description={"Netaji Subhas Memorial City College , Cuttack"} />
          <Education name={"B-Tech"} year={"2022-2026"} description={"Odisha University Of Technology And Research, Bhubaneswar"} />
        </div>

        <div className="m-3">
          <div className="flex items-center space-x-4">
            <div className="px-2 bg-gray-900 rounded-xl place-content-center">
              <AlignHorizontalLeftOutlinedIcon className="text-amber-400" />
            </div>
            <Typography variant="h5" className="font-extrabold">Course</Typography>
          </div>
          <Education name={"Web-Devlopment"} year={"2023"} description={"Udemy"} />
          <Education name={"Data structure And Algorithms"} year={"2024"} description={"Udemy"} />
          <Education name={"Python Boot Camp"} year={"2022"} description={"youTube"} />
        </div>
        
        <div className="flex justify-center mt-6">
          <Typography variant="h4">Skill</Typography>
        </div>
        <Divider sx={{ backgroundColor: "gray" }} />
        
        {/* Responsive Skills Section */}
        <div className="mt-4 ml-2 sm:ml-8 md:ml-12">
          <div className="relative text-2xl sm:text-3xl">Frontend</div>
          <Divider className="bg-amber-300 w-11 h-1 rounded-2xl" />
          <Box sx={{ color: "white" }} className="overflow-x-auto">
            <Tabs aria-label="scrollable auto tabs" variant="scrollable">
              {frontend.map((e) => (
                <Tab key={e} sx={{ color: "#C4DB74", backgroundColor: "#121212", borderRadius: "20px", margin: "10px" }} label={e} />
              ))}
            </Tabs>
          </Box>
        </div>
        
        <div className="mt-4 ml-2 sm:ml-8 md:ml-12">
          <div className="relative text-2xl sm:text-3xl">Backend</div>
          <Divider className="bg-amber-300 w-11 h-1 rounded-2xl" />
          <Box sx={{ color: "white" }} className="overflow-x-auto">
            <Tabs aria-label="scrollable auto tabs" variant="scrollable">
              {backend.map((e) => (
                <Tab key={e} sx={{ color: "#C4DB74", backgroundColor: "#121212", borderRadius: "20px", margin: "10px" }} label={e} />
              ))}
            </Tabs>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Resume;