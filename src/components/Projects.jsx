import React from "react";
import Random from "../assets/Random.png";
import Ecomzypic from "../assets/Ecomzypic.png";
import StudyNotion from "../assets/StudyNotion.png";
import mine from "../assets/mine.png";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto  md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-centre items-center text-[#001b5e]">Projects</h1>
      <p className="text-centre py-8">
      Welcome to my portfolio playground, where you'll discover four unique projects that showcase my creative spirit and dedication to making cool things happen!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        
        <ProjectItem img={StudyNotion} title="Study Notion:Ed-Tech Platform" tech="Nodejs" url="https://github.com/VIRAT9358/StudyNotion" />
        <ProjectItem img={Ecomzypic} title="Ecomzy" tech="React.js,Redux,javascript" url="https://github.com/VIRAT9358/Ecomzy"/>
        <ProjectItem img={Random} title="Random GIF generator" tech="React.js,javascript,API integration" url="https://github.com/VIRAT9358/Random_gif"/>
        <ProjectItem img={mine} title="MineSweeper" tech="kotlin,Android Studios" url=""/>
        
      </div>
    </div>
  );
};

export default Projects;
