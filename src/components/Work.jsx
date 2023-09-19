import React from "react";
import WorkItem from "./WorkItem";
const data = [
  {
    year: 2020,
    title: "Content Creater",
    duration: "3 years",
    details: "nal grandfather). Siraj-ud-Daulah had become the Nawab of Bengal the year before, and he had ordered the English to stop the extension of their fortification. Robert Clive bribed Mir Jafar, the commander-in-chief of the Nawab's army, and also promised to make him Nawab of Bengal. Clive defeated Siraj-ud-Daulah at Plassey in 1757 and captured Calcutta.[2]",
  },
  {
    year: 2020,
    title: "Content Creater",
    duration: "3 years",
    details: "lorem nal grandfather). Siraj-ud-Daulah had become the Nawab of Bengal the year before, and he had ordered the English to stop the extension of their fortification. Robert Clive bribed Mir Jafar, the commander-in-chief of the Nawab's army, and also promised to make him Nawab of Bengal. Clive defeated Siraj-ud-Daulah at Plassey in 1757 and captured Calcutta.[2]",
  },
  {
    year: 2020,
    title: "Content Creater",
    duration: "3 years",
    details: "lorem nal grandfather). Siraj-ud-Daulah had become the Nawab of Bengal the year before, and he had ordered the English to stop the extension of their fortification. Robert Clive bribed Mir Jafar, the commander-in-chief of the Nawab's army, and also promised to make him Nawab of Bengal. Clive defeated Siraj-ud-Daulah at Plassey in 1757 and captured Calcutta.[2]",
  },
  {
    year: 2020,
    title: "Content Creater",
    duration: "3 years",
    details: "lorem nal grandfather). Siraj-ud-Daulah had become the Nawab of Bengal the year before, and he had ordered the English to stop the extension of their fortification. Robert Clive bribed Mir Jafar, the commander-in-chief of the Nawab's army, and also promised to make him Nawab of Bengal. Clive defeated Siraj-ud-Daulah at Plassey in 1757 and captured Calcutta.[2]",
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
