//react imports
import React from "react";

//mui imports
import { Timeline } from "@mui/lab";

import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

//icon imports
import { LaptopMac } from "@mui/icons-material";

//component imports
import TLineItem from "./TLineItem";

export default function OppositeContentTimeline() {
  const items = [
    {
      time: "2004",
      title: "Code",
      subtitle: "Lorem ipsum dolor sit amet.",
      icon: <LaptopMac />,
    },
    {
      time: "2004",
      title: "Code",
      subtitle: "Lorem ipsum dolor sit amet.",
      icon: <LaptopMac />,
    },
    {
      time: "2004",
      title: "Code",
      subtitle: "Lorem ipsum dolor sit amet.",
      icon: <LaptopMac />,
    },
    {
      time: "2004",
      title: "Code",
      subtitle: "Lorem ipsum dolor sit amet.",
      icon: <LaptopMac />,
    },
    {
      time: "2004",
      title: "Code",
      subtitle: "Lorem ipsum dolor sit amet.",
      icon: <LaptopMac />,
    },
  ];

  return (
    <Timeline
      sx={{
        maxHeight: "100%",
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: { sm: 0.2, xs: 0.5 },
        },
      }}
    >
      {items.map((item) => (
        <TLineItem
          time={item.time}
          title={item.title}
          subtitle={item.subtitle}
          icon={item.icon}
        />
      ))}
    </Timeline>
  );
}
