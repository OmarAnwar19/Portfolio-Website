//react imports
import React from "react";

//mui imports
import { Timeline } from "@mui/lab";

import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

//icon imports
import {
  Api,
  Cake,
  Code,
  DirectionsRun,
  FlightTakeoff,
  LaptopMac,
} from "@mui/icons-material";

//component imports
import TLineItem from "./TLineItem";

export default function OppositeContentTimeline() {
  const items = [
    {
      time: "Fall 2022",
      title: "Pilot",
      subtitle: "Front-end Engineer Intern",
      icon: <FlightTakeoff />,
    },
    {
      time: "Summer 2022",
      title: "GAOTek Inc.",
      subtitle: "Sofware Development Intern",
      icon: <Api />,
    },
    {
      time: "2022 - Present",
      title: "Inertia (startup)",
      subtitle: "Co-Founder, Developer and TPM",
      icon: <DirectionsRun />,
    },
    {
      time: "Winter 2022",
      title: "Digitera Interactive",
      subtitle: "Full-Stack Development Intern",
      icon: <LaptopMac />,
    },
    {
      time: "2020-22",
      title: "Freelance",
      subtitle: "Freelance Web Developer",
      icon: <Code />,
    },
    {
      time: "2018-20",
      title: "Sweet Me",
      subtitle: "Full Stack Developer, Digital PM",
      icon: <Cake />,
    },
  ];

  return (
    <Timeline
      sx={{
        maxHeight: "90%",
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
