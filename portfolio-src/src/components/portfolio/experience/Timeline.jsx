//react imports
import React from "react";

//mui imports
import { Timeline } from "@mui/lab";

import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";

//component imports
import TLineItem from "./TLineItem";

//import timeline items
import tlItems from "./items/tlItems";

export default function OppositeContentTimeline() {
  return (
    <Timeline
      sx={{
        maxHeight: "90%",
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: { sm: 0.2, xs: 0.5 },
        },
      }}
    >
      {tlItems.map((item, i) => (
        <TLineItem
          key={`item-${i}`}
          time={item.time}
          title={item.title}
          subtitle={item.subtitle}
          icon={item.icon}
        />
      ))}
    </Timeline>
  );
}
