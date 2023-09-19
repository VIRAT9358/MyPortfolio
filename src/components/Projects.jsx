import React from "react";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto  md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-centre items-center text-[#001b5e]">Projects</h1>
      <p className="text-centre py-8">
        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem lorem ipsum dolor
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={pic1} title={pic1}/>
        <ProjectItem img={pic2} title={pic2}/>
        <ProjectItem img={pic3} title={pic3}/>
        <ProjectItem img={pic4} title={pic4}/>
        
      </div>
    </div>
  );
};

export default Projects;
