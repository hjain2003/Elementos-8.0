import React from "react";

import timelineElements from "./data/timelineData";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export default function TimeLine() {
  return (
    <>
      <div id="timeline">
        <h1 className="glitch">TIMELINE</h1>
      </div>
      <VerticalTimeline lineColor={"none"}>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              contentStyle={{ background: "none", color: "transparent" }}
              // contentArrowStyle={{
              //   borderRight: "7px solid  red",
              // }}
              key={element.key}
              className="card"
            >
              <div className="card-side front">
                <div>Front Side</div>
              </div>
              <div className="card-side back">
                <div>Back Side</div>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
}

// return (
//     <VerticalTimelineElement
//       key={element.key}
//       date={element.date}
//       dateClassName="date"
//       // iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
//       // icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
//     >
//       <h3 className="vertical-timeline-element-title">
//         {element.title}
//       </h3>
//       <h5 className="vertical-timeline-element-subtitle">
//         {element.location}
//       </h5>
//       <p id="description">{element.description}</p>
//       {/* {showButton && (
//           <a
//             className={`button ${
//               isWorkIcon ? "workButton" : "schoolButton"
//             }`}
//             href="/"
//           >
//             {element.buttonText}
//           </a>
//         )} */}
//     </VerticalTimelineElement>
//   );
