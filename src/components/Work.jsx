import React from "react";
import WorkItem from "./WorkItem";
const data = [
  {
    year: 2023,
    title: "ML Engineer at Samsung Reseach and Development",
    duration: "6 Months",
    details:
      "We curated a diverse, meticulously labeled dataset spanning various age groups and genders, with a primary focus on individuals aged 55 and older. Using this dataset, we developed a high-performing machine learning algorithm and neural network architecture to predict a wide array of walking parameters. Rigorous benchmarking against leading methods confirmed our project's superior performance. Furthermore, our solution was successfully deployed on mobile devices for real-time assessment and practical use, advancing the field of mobility analysis.",
  },
  {
    year: 2023,
    title: "Project: OpenSeadragon - Open-Source Contribution",
    duration: "2 Months",
    details:
      "I have been actively contributing to OpenSeadragon, an open-source project that provides a versatile and high-performance image viewer for the web. My contributions include [briefly describe the enhancements, bug fixes, or features you've worked on], aimed at improving user experience and functionality. I continue to collaborate with the OpenSeadragon community to enhance this valuable tool for web developers and researchers. ",
  },
  {
    year: 2020,
    title: "Licenses & certifications",
    duration: "",
    details:
      "AWS Academy Graduate,AWS Academy Cloud Operations ,Oracle Database Certifications ,Introduction to Self Driving Cars , Android Development ,Matlab Machine Learning ",
  },
  {
    year: 2020,
    title: "Education",
    duration: "4 years",
    details: `SRM Institute of Science and Technology - Bachelors in Computer Science and Technology
CGPA: 9.49
Dr. Virendra Swarup Education Centre - XII ICSE board
Percentage: 91%`,
  },
];
function Work() {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-centre text-[#001b5e]">
        {data.map((item, idx) => (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </h1>
    </div>
  );
}

export default Work;
