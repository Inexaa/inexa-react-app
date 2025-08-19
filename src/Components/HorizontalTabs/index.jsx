// import React, { useState } from "react";

// const HorizontalTabs = () => {
//   const [activeTab, setActiveTab] = useState(4);

//   return (
//     <>
//       <div className="tabs-section">
//         <div className="tabs-content">
//           <ul className="tab-headings flex ">
//             <li className="cursor-pointer bg-lime-300 py-1 px-5" onClick={()=> setActiveTab(1)}>one</li>
//             <li className="cursor-pointer bg-lime-300 py-1 px-5" onClick={()=> setActiveTab(2)}>two</li>
//             <li className="cursor-pointer bg-lime-300 py-1 px-5" onClick={()=> setActiveTab(3)}>three</li>
//             <li className="cursor-pointer bg-lime-300 py-1 px-5" onClick={()=> setActiveTab(4)}>four</li>
//           </ul>
//           <div className="tabs-content">
//             {activeTab === 1 && (
//               <div className="content">
//                 <h4>one</h4>
//                 <p>
//                   Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                   Neque, eveniet possimus quis, nulla nostrum fugiat recusandae
//                   odit ut, aut ipsum architecto. Sunt assumenda eius nemo neque
//                   fuga aliquid nobis accusantium?
//                 </p>
//               </div>
//             )}
//             {activeTab === 2 && (
//               <div className="content">
//                 <h4>two</h4>
//                 <p>
//                   Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                   Neque, eveniet possimus quis, nulla nostrum fugiat recusandae
//                   odit ut, aut ipsum architecto. Sunt assumenda eius nemo neque
//                   fuga aliquid nobis accusantium?
//                 </p>
//               </div>
//             )}
//             {activeTab === 3 && (
//               <div className="content">
//                 <h4>three</h4>
//                 <p>
//                   Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                   Neque, eveniet possimus quis, nulla nostrum fugiat recusandae
//                   odit ut, aut ipsum architecto. Sunt assumenda eius nemo neque
//                   fuga aliquid nobis accusantium?
//                 </p>
//               </div>
//             )}
//             {activeTab === 4 && (
//               <div className="content">
//                 <h4>four</h4>
//                 <p>
//                   Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                   Neque, eveniet possimus quis, nulla nostrum fugiat recusandae
//                   odit ut, aut ipsum architecto. Sunt assumenda eius nemo neque
//                   fuga aliquid nobis accusantium?
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HorizontalTabs;

import React, { useState } from "react";

const HorizontalTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      title: "one",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, eveniet possimus quis, nulla nostrum fugiat recusandae odit ut, aut ipsum architecto. Sunt assumenda eius nemo neque fuga aliquid nobis accusantium?",
    },
    {
      title: "two",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, eveniet possimus quis, nulla nostrum fugiat recusandae odit ut, aut ipsum architecto. Sunt assumenda eius nemo neque fuga aliquid nobis accusantium?",
    },
    {
      title: "three",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, eveniet possimus quis, nulla nostrum fugiat recusandae odit ut, aut ipsum architecto. Sunt assumenda eius nemo neque fuga aliquid nobis accusantium?",
    },
    {
      title: "four",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, eveniet possimus quis, nulla nostrum fugiat recusandae odit ut, aut ipsum architecto. Sunt assumenda eius nemo neque fuga aliquid nobis accusantium?",
    },
    {
      title: "five",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, eveniet possimus quis, nulla nostrum fugiat recusandae odit ut, aut ipsum architecto. Sunt assumenda eius nemo neque fuga aliquid nobis accusantium?",
    },
  ];

  return (
    <div className="tabs-section">
      <div className="tabs-content">
        <ul className="tab-headings flex">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`cursor-pointer py-1 px-5 ${
                activeTab === index + 1 ? "bg-lime-500" : "bg-lime-300"
              }`}
              onClick={() => setActiveTab(index + 1)}
            >
              {tab.title}
            </li>
          ))}
        </ul>

        <div className="tabs-content">
          {tabs.map(
            (tab, index) =>
              activeTab === index + 1 && (
                <div className="content" key={index}>
                  <h4>{tab.title}</h4>
                  <p>{tab.content}</p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default HorizontalTabs;
